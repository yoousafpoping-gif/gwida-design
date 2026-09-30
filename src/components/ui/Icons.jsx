/* Hand-rolled inline SVG icon set — no icon library dependency. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const SignIcon = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M6 39V12a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v27" />
    <path d="M4 39h40" />
    <path d="M13 16h22" />
    <path d="M13 23h14" />
    <path d="M13 30h9" />
    <path d="M30 27l5 5 8-10" />
  </svg>
)

export const PrintIcon = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M14 16V6h20v10" />
    <path d="M14 36H9a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-5" />
    <rect x="14" y="27" width="20" height="15" rx="2" />
    <circle cx="34" cy="23" r="1.6" />
  </svg>
)

export const SocialIcon = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <rect x="6" y="6" width="36" height="36" rx="10" />
    <circle cx="18" cy="18" r="2.6" />
    <circle cx="30" cy="18" r="2.6" />
    <path d="M12.5 33c1.6-4.4 5-6.6 8.5-6.6s6.9 2.2 8.5 6.6" />
    <path d="M38 14.5c1.8 1.4 3 3.6 3 6s-1.2 4.6-3 6" />
  </svg>
)

export const CalligraphyIcon = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M6 34c6-2 8-8 8-14S11 10 9 13s2 9 9 10" />
    <path d="M20 12h22" />
    <path d="M26 18c0 6-3 10-7 12" />
    <path d="M26 18c3 4 8 5 13 4" />
    <path d="M39 20c2 3 3 7 2 11" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.18 8.24Z" />
  </svg>
)

export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...p}>
    <path d="M21 16.9v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4 6.1 1.7 1.7 0 0 1 5.7 4h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.8.3 1.6.6 2.3a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.7 13.7 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.7.3 1.5.5 2.3.6a1.7 1.7 0 0 1 1.5 1.7Z" />
  </svg>
)

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
  </svg>
)

export const EyeIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...p}>
    <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
)

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.9} {...p}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </svg>
)

export const SparkIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...p}>
    <path d="M12 2.5 13.9 9l6.6 1.9-6.6 1.9L12 19.4 10.1 12.8 3.5 10.9 10.1 9 12 2.5Z" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.8} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const QuoteIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.5 5.5c-3 1.4-4.9 4-4.9 7.6 0 3.3 1.9 5.4 4.4 5.4 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.3-1.7 1.6-3.3 3.4-4.3l-2.3-1.9Zm9 0c-3 1.4-4.9 4-4.9 7.6 0 3.3 1.9 5.4 4.4 5.4 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.3-1.7 1.6-3.3 3.4-4.3l-2.3-1.9Z" />
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
  </svg>
)

export const SunIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
  </svg>
)

export const MoonIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...p}>
    <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />
  </svg>
)

export const SERVICES_ICONS = {
  sign: SignIcon,
  print: PrintIcon,
  social: SocialIcon,
  calligraphy: CalligraphyIcon,
}