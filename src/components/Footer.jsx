import { FACEBOOK, MENUS, NAV_LINKS, PHONE_DISPLAY, PROJECTS, WHATSAPP } from '../data/site.js'
import { scrollToSection } from '../hooks/index.js'
import { FacebookIcon, PhoneIcon, WhatsAppIcon } from './ui/Icons.jsx'
import { useI18n } from '../i18n/index.jsx'

/** Floating WhatsApp action button — always one tap away. */
export function FloatingContact() {
  const { t } = useI18n()

  return (
    <div className="fixed bottom-5 start-5 z-[80] flex flex-col gap-3">
      <a
        href={FACEBOOK}
        target="_blank"
        rel="noreferrer"
        aria-label={t('footer.facebookAria')}
        className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2/85 text-[#1257C4] opacity-0 shadow-panel backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white focus-visible:opacity-100 md:opacity-100 dark:text-[#7FB4FF]"
      >
        <FacebookIcon className="h-5 w-5" />
      </a>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label={t('footer.whatsappAria')}
        className="group relative grid h-14 w-14 place-items-center rounded-2xl bg-[#25D366] text-white shadow-[0_14px_36px_-12px_rgba(37,211,102,0.9)] transition-transform duration-500 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-60 animate-pulseRing" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  )
}

export default function Footer() {
  const year = 2026
  const { pick, t } = useI18n()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-2/60 pt-16">
      {/* Giant ghost wordmark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 start-1/2 w-max -translate-x-1/2 select-none font-latin text-[22vw] font-black leading-none text-ink/[0.022]"
      >
        GWIDA
      </span>

      <div className="wrap relative">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-night-900 shadow-panel">
                <img
                  src="/logo.png"
                  alt="Gwida Design"
                  className="h-10 w-auto object-contain"
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="font-latin text-lg font-bold text-ink">
                Gwida<span className="text-gold-ink">.</span>Design
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-[2] text-ink-mute">
              {t('footer.about')}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.whatsapp')}
                className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/12 text-[#128C4A] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-night-950 dark:text-[#5BF08C]"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.facebook')}
                className="grid h-11 w-11 place-items-center rounded-xl bg-[#1877F2]/12 text-[#1257C4] ring-1 ring-[#1877F2]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white dark:text-[#7FB4FF]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="tel:+201009198567"
                aria-label={t('footer.call')}
                className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/12 text-gold-ink ring-1 ring-gold-400/30 transition-all duration-300 hover:-translate-y-1 hover:bg-gold-400 hover:text-night-950"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav>
            <h3 className="text-sm font-black text-ink">{t('footer.quickLinks')}</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="group flex items-center gap-2 text-sm text-ink-mute transition-colors hover:text-gold-ink"
                  >
                    <span className="h-px w-3 bg-ink-faint transition-all duration-300 group-hover:w-5 group-hover:bg-gold-400" />
                    {pick(l, 'label')}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black text-ink">{t('footer.contactInfo')}</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-mute">
              <li>
                <a href="tel:+201009198567" className="transition-colors hover:text-gold-ink">
                  <span className="latin font-latin" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="latin font-latin transition-colors hover:text-gold-ink"
                  dir="ltr"
                >
                  ahmed.alfanan2
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseRing" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs">{t('footer.available')}</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-5 text-xs text-ink-faint">
              <span>
                <span className="font-latin font-bold text-gold-ink">{PROJECTS.length + MENUS.length}+</span>{' '}
                {t('footer.projects')}
              </span>
              <span>
                <span className="font-latin font-bold text-gold-ink">+25</span> {t('footer.years')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line-soft py-7 sm:flex-row">
          <p className="text-center text-xs text-ink-mute sm:text-start">
            {t('footer.rights')} © {year} {t('footer.owner')} — Gwida Design
          </p>
          <p className="font-latin text-[11px] tracking-[0.28em] text-ink-faint">
            DESIGNED &amp; BUILT IN CAIRO
          </p>
        </div>
      </div>
    </footer>
  )
}