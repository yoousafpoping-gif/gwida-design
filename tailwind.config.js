/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Theme switching is driven by a `.dark` class on <html>, set by the
  // bootstrap script in index.html and toggled by the useTheme hook.
  darkMode: 'class',
  // `badgeColor` values are data-driven strings, so Tailwind's scanner
  // cannot see them. They must be safelisted explicitly.
  safelist: ['bg-yellow-500', 'bg-cyan-500', 'bg-orange-500'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        display: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
        latin: ['Outfit', 'Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* -------------------------------------------------------
         * Semantic theme tokens.
         *
         * These are CSS variables declared in src/index.css and are
         * REASSIGNED when <html> gains/loses `.dark`. Components use
         * these names instead of raw palette values, so a theme flip
         * never requires touching a component again.
         *
         * The declarations use the `rgb(var(--token-rgb) / <alpha-value>)`
         * form, which is what lets Tailwind resolve an opacity
         * modifier such as `bg-ink/[0.03]` or `text-gold-ink/45`.
         * A plain `var(--token)` cannot accept `/NN` and would make
         * those classes fail to compile.
         *
         * `line` / `line-soft` are the exception: each theme bakes its
         * own alpha into them, so they are declared as plain vars and
         * must NOT be used with an opacity modifier.
         * ------------------------------------------------------- */
        surface: 'rgb(var(--c-surface-rgb) / <alpha-value>)',
        'surface-2': 'rgb(var(--c-surface-2-rgb) / <alpha-value>)',
        'surface-3': 'rgb(var(--c-surface-3-rgb) / <alpha-value>)',
        ink: 'rgb(var(--c-ink-rgb) / <alpha-value>)',
        'ink-soft': 'rgb(var(--c-ink-soft-rgb) / <alpha-value>)',
        'ink-mute': 'rgb(var(--c-ink-mute-rgb) / <alpha-value>)',
        'ink-faint': 'rgb(var(--c-ink-faint-rgb) / <alpha-value>)',
        line: 'var(--c-line)',
        'line-soft': 'var(--c-line-soft)',
        /* Accent *text* variants - same gold/cyan identity, contrast-correct
         * per theme. Fills, borders and gradients keep the vivid gold and
         * neon values below so branding stays identical. */
        'gold-ink': 'rgb(var(--c-gold-ink-rgb) / <alpha-value>)',
        'cyan-ink': 'rgb(var(--c-cyan-ink-rgb) / <alpha-value>)',

        night: {
          950: '#04060D',
          900: '#070B16',
          850: '#0A0F1E',
          800: '#0E1528',
          750: '#131C33',
          700: '#1A2542',
          600: '#243356',
        },
        gold: {
          50: '#FFF9EA',
          100: '#FFF0C9',
          200: '#FFE49B',
          300: '#FFD469',
          400: '#F8C24E',
          500: '#EAA93A',
          600: '#C9852A',
          700: '#9C6520',
        },
        neon: {
          cyan: '#2DD9F0',
          sky: '#49B6FF',
          orange: '#FF7A2F',
          rose: '#FF5E8A',
          lime: '#B6F05A',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(248,194,78,0.25), 0 18px 60px -18px rgba(248,194,78,0.45)',
        'glow-cyan': '0 0 0 1px rgba(45,217,240,0.25), 0 18px 60px -18px rgba(45,217,240,0.4)',
        /* Soft neutral elevation — recoloured per theme. */
        panel: 'var(--c-shadow)',
        glass: 'var(--c-shadow)',
        lift: 'var(--c-shadow-lift)',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(135deg,#FFF0C9 0%,#F8C24E 38%,#EAA93A 62%,#C9852A 100%)',
        'cyan-sheen': 'linear-gradient(135deg,#B6F05A 0%,#2DD9F0 45%,#49B6FF 100%)',
        'ember-sheen': 'linear-gradient(135deg,#FFD469 0%,#FF7A2F 55%,#FF5E8A 100%)',
        'grid-lines':
          'linear-gradient(to right, var(--c-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--c-grid) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' },
        },
        floatYslow: {
          '0%,100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-26px,0) rotate(2.5deg)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marqueeL: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
        marqueeR: {
          from: { transform: 'translate3d(-50%,0,0)' },
          to: { transform: 'translate3d(0,0,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        caret: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '80%,100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(320%) skewX(-18deg)' },
        },
      },
      animation: {
        floatY: 'floatY 7s ease-in-out infinite',
        floatYslow: 'floatYslow 12s ease-in-out infinite',
        spinSlow: 'spinSlow 26s linear infinite',
        marqueeL: 'marqueeL 42s linear infinite',
        marqueeR: 'marqueeR 46s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        caret: 'caret 1s step-end infinite',
        pulseRing: 'pulseRing 2.6s cubic-bezier(0.2,0.6,0.3,1) infinite',
        sweep: 'sweep 3.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}