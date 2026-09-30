import { useCallback, useEffect, useState } from 'react'

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
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 84
  window.scrollTo({ top, behavior: 'smooth' })
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
  const [index, setIndex] = useState(-1)
  const open = index >= 0 && length > 0

  const close = useCallback(() => setIndex(-1), [])
  const next = useCallback(() => setIndex((i) => (length ? (i + 1) % length : -1)), [length])
  const prev = useCallback(
    () => setIndex((i) => (length ? (i - 1 + length) % length : -1)),
    [length]
  )

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') next()
      if (e.key === 'ArrowRight') prev()
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, next, prev])

  return { index, setIndex, open, close, next, prev }
}