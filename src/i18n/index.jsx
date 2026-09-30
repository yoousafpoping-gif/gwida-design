/* ============================================================
   LANGUAGE
   ------------------------------------------------------------
   Mirrors the THEME pattern in src/hooks/index.js: a persisted
   preference, a pre-paint bootstrap in index.html that sets the
   `dir`/`lang` attributes before React mounts (so there is no
   flash of the wrong direction), and this provider that keeps
   everything in sync.

   `LANG_KEY` is duplicated in that inline script — keep the two
   in step.
   ============================================================ */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DICT } from './dictionary.js'

export const LANG_KEY = 'gwida-lang'
export const DEFAULT_LANG = 'ar'
export const LANGS = ['ar', 'en']

/** Arabic is RTL; everything else is LTR. */
export function dirFor(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr'
}

export function isRTL(lang) {
  return dirFor(lang) === 'rtl'
}

/** Reads the persisted choice, falling back to Arabic (the default). */
export function readStoredLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const saved = window.localStorage.getItem(LANG_KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
    // Private mode / disabled storage — fall through to the default.
  }
  return DEFAULT_LANG
}

/** Applies the language to <html> so CSS logical properties flip. */
export function applyLang(lang) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.setAttribute('lang', lang)
  root.setAttribute('dir', dirFor(lang))
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    applyLang(lang)
  }, [lang])

  useEffect(() => {
    try {
      window.localStorage.setItem(LANG_KEY, lang)
    } catch {
      // Storage unavailable — the language still applies for this session.
    }
  }, [lang])

  /**
   * Resolves a dotted dictionary key. Unknown keys return the key
   * itself rather than `undefined`, so a missing translation shows up
   * as an obvious `portfolio.foo` instead of blanking the UI.
   * Missing English falls back to the Arabic copy.
   */
  const t = useCallback(
    (key, vars) => {
      const table = DICT[lang] ?? DICT[DEFAULT_LANG]
      let out = table[key] ?? DICT[DEFAULT_LANG][key] ?? key
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          out = out.replaceAll(`{${k}}`, String(v))
        }
      }
      return out
    },
    [lang]
  )

  /**
   * Picks the localised field off a data object from site.js.
   * `item.enTitle` in English mode, otherwise the original Arabic key.
   * Pass `enField` when the Arabic name is not the bare English stem:
   * projects use `description`/`enDesc` and menus use
   * `frontCaption`/`frontCaptionEn`.
   */
  const pick = useCallback(
    (obj, field, enField) => {
      if (!obj) return ''
      if (lang === 'ar') return obj[field]
      const key = enField ?? `en${field.charAt(0).toUpperCase()}${field.slice(1)}`
      return obj[key] ?? obj[field]
    },
    [lang]
  )

  const toggle = useCallback(() => {
    setLang((l) => (l === 'ar' ? 'en' : 'ar'))
  }, [])

  const value = useMemo(
    () => ({ lang, dir: dirFor(lang), isRTL: isRTL(lang), setLang, toggle, t, pick }),
    [lang, toggle, t, pick]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/**
 * Access the active language. Falls back to Arabic-only behaviour if
 * called outside the provider, so a component can never crash.
 */
export function useI18n() {
  const ctx = useContext(LanguageContext)
  return (
    ctx ?? {
      lang: DEFAULT_LANG,
      dir: dirFor(DEFAULT_LANG),
      isRTL: isRTL(DEFAULT_LANG),
      setLang: () => {},
      toggle: () => {},
      t: (key, vars) => {
        let out = DICT[DEFAULT_LANG][key] ?? key
        if (vars) {
          for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v))
        }
        return out
      },
      pick: (obj, field) => obj?.[field] ?? '',
    }
  )
}