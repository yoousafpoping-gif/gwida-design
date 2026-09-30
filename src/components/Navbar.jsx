import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../data/site.js'
import {
  useActiveSection,
  useScrolled,
  useTheme,
  scrollToSection,
} from '../hooks/index.js'
import { FacebookIcon, MoonIcon, SunIcon, WhatsAppIcon } from './ui/Icons.jsx'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

/** Custom brand mark. The source logo.png is an opaque square, so it is
 *  presented inside a rounded tile — that reads as a deliberate brand chip
 *  in both themes instead of a stray dark box on the light background. */
function Logo({ compact }) {
  return (
    <button
      onClick={() => scrollToSection('home')}
      className="group flex items-center gap-3 text-start"
      aria-label="Gwida Design — العودة للرئيسية"
    >
      {/* The tile stays dark in BOTH themes on purpose: logo.png is an
          opaque square with a dark-navy field, so a near-black tile lets
          it blend seamlessly and read as an intentional brand chip even
          against the light background. The rounded clip hides the
          image's own square corners. */}
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-night-900 shadow-panel transition-transform duration-500 group-hover:-rotate-6">
        <img
          src="/logo.png"
          alt="Gwida Design"
          className="h-10 w-auto object-contain"
          width={40}
          height={40}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-latin font-bold tracking-tight text-ink transition-all duration-500 ${
            compact ? 'text-base' : 'text-lg'
          }`}
        >
          Gwida<span className="text-gold-ink">.</span>Design
        </span>
        <span className="mt-1 font-sans text-[10px] font-medium tracking-[0.28em] text-ink-faint transition-opacity duration-500">
          AHMED GWIDA
        </span>
      </span>
    </button>
  )
}

/** Sun / moon toggle. */
function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
      title={isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
      className="group relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-surface-2/70 text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-ink/45 hover:text-gold-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
    >
      {/* Sun rides in from one side, moon out to the other. Both are
          absolutely positioned so the button never changes size. */}
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ y: 14, opacity: 0, rotate: -60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 60 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <SunIcon className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ y: -14, opacity: 0, rotate: 60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: -60 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <MoonIcon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const scrolled = useScrolled(30)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  // Close the mobile drawer whenever the viewport grows.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handle = (e) => !e.matches && setOpen(false)
    mq.addEventListener('change', handle)
    return () => mq.removeEventListener('change', handle)
  }, [])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <motion.nav
          initial={false}
          animate={{
            maxWidth: scrolled ? 1140 : 1240,
            paddingLeft: scrolled ? 20 : 8,
            paddingRight: scrolled ? 20 : 8,
            paddingTop: scrolled ? 10 : 12,
            paddingBottom: scrolled ? 10 : 12,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mx-auto flex w-full items-center justify-between rounded-3xl transition-colors duration-500 ${
            scrolled
              ? 'border border-line bg-surface-2/80 shadow-panel backdrop-blur-2xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <Logo compact={scrolled} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                      isActive ? 'text-night-950' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full bg-gold-sheen shadow-[0_8px_26px_-10px_rgba(248,194,78,0.9)]"
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06] opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    )}
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/201009198567"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-bold text-[#128C4A] ring-1 ring-[#25D366]/35 transition-all duration-300 hover:bg-[#25D366]/20 hover:shadow-[0_10px_30px_-12px_rgba(37,211,102,0.8)] sm:inline-flex dark:text-[#5BF08C]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              واتساب
            </a>

            <ThemeToggle isDark={isDark} onToggle={toggle} />

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={open}
              className="relative grid h-11 w-11 place-items-center rounded-2xl border border-line bg-surface-2/70 lg:hidden"
            >
              <span className="flex flex-col items-center justify-center gap-[5px]">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-5 rounded bg-gold-ink"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  className="block h-[2px] w-5 rounded bg-gold-ink"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-5 rounded bg-gold-ink"
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--c-scrim)] backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute inset-y-0 start-0 flex w-[82%] max-w-sm flex-col gap-1 border-e border-line bg-surface-2 p-6 pt-28"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-start text-lg font-bold transition-colors ${
                      active === link.id
                        ? 'bg-gold-400/12 text-gold-ink'
                        : 'text-ink-soft hover:bg-ink/[0.05] hover:text-ink'
                    }`}
                  >
                    <span className="font-latin text-xs text-ink-faint">0{i + 1}</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}

              <li className="mt-auto space-y-3 border-t border-line pt-6">
                <a
                  href="https://wa.me/201009198567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366]/12 py-3 font-bold text-[#128C4A] ring-1 ring-[#25D366]/30 dark:text-[#5BF08C]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  تواصل واتساب
                </a>
                <a
                  href="https://www.facebook.com/ahmed.alfanan2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#1877F2]/12 py-3 font-bold text-[#1257C4] ring-1 ring-[#1877F2]/30 dark:text-[#7FB4FF]"
                >
                  <FacebookIcon className="h-5 w-5" />
                  صفحة الفيسبوك
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}