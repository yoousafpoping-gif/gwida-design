import { useCallback, useEffect, useState } from 'react'
import { CLOSED_INDEX, closeIndex, isOpen, nextIndex, prevIndex } from '../components/ui/lightboxState.js'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}

/**
 * True once the page has been scrolled past `offset` px.
 */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * Smoothly scrolls to a section, accounting for the floating navbar.
 */
export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - 84
  window.scrollTo({ top, behavior: 'smooth' })
}

/* Fired on card hover/focus so the lightbox image is already in the HTTP
   cache by the time it is clicked. A module-level Set dedupes requests,
   so a card hovered many times fetches its preview only once. */
const prefetched = new Set()

export function prefetchImage(src) {
  if (!src || typeof window === 'undefined' || typeof window.Image === 'undefined') return
  if (prefetched.has(src)) return
  prefetched.add(src)
  const img = new window.Image()
  img.decoding = 'async'
  img.src = src
}

/* ============================================================
   THEME
   ------------------------------------------------------------
   'dark'  = Midnight Atelier (the product default)
   'light' = Daylight

   The matching `.dark` class is applied to <html> by the inline
   script in index.html before React mounts, so there is no flash
   of the wrong theme. This hook keeps it in sync and persists the
   choice. `THEME_KEY` is duplicated in that inline script — keep
   the two in step.
   ============================================================ */
export const THEME_KEY = 'gwida-theme'

/** Reads the persisted choice, falling back to dark (the default theme). */
export function readStoredTheme() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const saved = window.localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Private mode / disabled storage — fall through to the default.
  }
  return 'dark'
}

/** Applies the theme by toggling `.dark` on <html>. */
export function applyTheme(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme)

  // Re-apply on mount in case the bootstrap script and this hook ever
  // disagree (e.g. the script was blocked).
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Persist, and keep the browser UI (address bar) in step.
  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_KEY, theme)
    } catch {
      // Storage unavailable — the theme still applies for this session.
    }

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#070B16' : '#F5F7FB')
  }, [theme])

  // Dark is the product default and is NOT overridden by the OS: the
  // persist effect above always records a concrete choice, so an
  // OS-preference listener here could never fire. Once the visitor
  // toggles, the stored value is what `readStoredTheme` returns.
  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, isDark: theme === 'dark', setTheme, toggle }
}

/**
 * Full-screen gallery lightbox state with keyboard navigation.
 * Arrow keys follow the RTL reading direction.
 */
export function useLightbox(length) {
  const [index, setIndex] = useState(CLOSED_INDEX)
  const open = isOpen(index, length)

  const close = useCallback(() => setIndex(closeIndex()), [])
  const next = useCallback(() => setIndex((i) => nextIndex(i, length)), [length])
  const prev = useCallback(() => setIndex((i) => prevIndex(i, length)), [length])

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'ArrowRight') prev()
    }

    window.addEventListener('keydown', onKey)

    // Lock the page behind the modal, but remember whatever was set before
    // so the cleanup ALWAYS restores it (a stale 'hidden' here would freeze
    // scrolling after a close, and a stale 'none' would block every click).
    const previousOverflow = document.body.style.overflow
    const previousPointerEvents = document.body.style.pointerEvents
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      document.body.style.pointerEvents = previousPointerEvents
    }
  }, [open, close, next, prev])

  return { index, setIndex, open, close, next, prev }
}