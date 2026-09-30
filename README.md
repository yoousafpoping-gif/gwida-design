# Gwida Design — موقع أحمد جويدة

موقع أعمال (Portfolio) بصفحة واحدة لمصمم الجرافيك والخطاط **أحمد جويدة** — عربي بالكامل،
اتجاه RTL، مع وضع ليلي وبألوان ذهب / نيون.

A single-page Arabic (RTL) portfolio for senior graphic designer & calligrapher **Ahmed Gwida**.

---

## Tech stack

| | |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Fonts | Cairo · Tajawal · Outfit (Google Fonts) |
| Direction | `<html lang="ar" dir="rtl">` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Project structure

```
├── index.html                  # lang="ar" dir="rtl", font links, meta/OG tags
├── tailwind.config.js          # night / gold / neon palette, keyframes, animations
├── vite.config.js
├── postcss.config.js
├── public/
│   └── portfolio-assets/       # all images (already in place)
│       ├── الصورة الشخصية.png
│       ├── تصميم يافطة (1..12).jpg
│       ├── انفوجرافيك 1..5.jpg
│       └── سوشيال ميديا/
│           ├── تشكن فريش1..5.jpg
│           ├── ميدلينك1..5.jpg
│           ├── فول نور 1..5.jpg
│           └── عمرة المولد النبوي1..6.jpg
└── src/
    ├── main.jsx
    ├── App.jsx                 # section composition
    ├── index.css               # design system: glass, buttons, grain, RTL base
    ├── data/site.js              # ⭐ all copy + portfolioData live here
    ├── hooks/index.js            # useActiveSection, useScrolled, useLightbox
    └── components/
        ├── BackgroundDecor.jsx   # aurora blobs, grid, calligraphy strokes, cursor glow
        ├── Navbar.jsx            # floating glass navbar, shrinks on scroll
        ├── Hero.jsx              # asymmetric split, typewriter, 3D tilt portrait
        ├── About.jsx             # رحلة الإبداع
        ├── Services.jsx          # bento hover cards
        ├── Portfolio.jsx         # filterable masonry + lightbox
        ├── Testimonials.jsx      # dual counter-scrolling marquee
        ├── Contact.jsx           # form + contact channels
        ├── Footer.jsx            # footer + floating WhatsApp button
        └── ui/
            ├── Icons.jsx         # inline SVG icon set (no icon library)
            ├── Reveal.jsx        # scroll-reveal + stagger wrappers
            ├── SectionHeading.jsx
            └── Lightbox.jsx
```

## Editing content

Almost everything you'll want to change lives in **`src/data/site.js`**:

- `NAV_LINKS` — navigation labels
- `ROLES` — the Arabic typewriter titles
- `portfolioData` / `PROJECTS` — the gallery (see below)
- `DIMENSIONS` — intrinsic pixel sizes, used only to reserve space
- `SERVICES`, `TESTIMONIALS`, `STATS` — section copy
- `PHONE` / `WHATSAPP` / `FACEBOOK` — contact channels
- Section prose (hero heading, about paragraph, etc.) is inline in each component file

### Portfolio data

`portfolioData` holds one row per design:

```js
{ image: 'portfolio-assets/تصميم يافطة (1).jpg',
  category: 'تصميم لافتات',        // must match a CATEGORIES label
  badgeColor: 'bg-yellow-500',      // signage=gold, social=cyan, infographic=orange
  title: 'مطاعم فول مازن ومطحن المصطفى',
  description: '...' }
```

`PROJECTS` derives `id`, `src`, `cat`, `width`, `height` and `aspectRatio` from it.

- **Adding a project** — drop the file into `public/portfolio-assets/` (sub-folders
  work), append a row, and add its real pixel size to `DIMENSIONS` if the group
  isn't listed yet.
- **Images are never cropped.** Cards use `h-auto w-full object-contain`, so each
  asset renders at its true aspect ratio. `width`/`height` are emitted only so the
  browser reserves the right box *before* decode — they do not constrain the image.
- **`badgeColor` is safelisted** in `tailwind.config.js`. Tailwind's scanner only
  sees class names in source, so a data-driven color like `bg-yellow-500` must be
  listed there or it will be purged.
- Paths run through `encodeURI()` once, so Arabic filenames, spaces and
  parentheses work with no manual percent-encoding.

> Files on disk are named `تصميم يافطة (1).jpg` — *not* `(1) تصميم يافطة.jpg`.
> The code matches the real names, so double-check spelling if you rename anything.

### Contact form

The form is front-end only and shows an inline success note. To make it actually
send, wire the `onSubmit` handler in `src/components/Contact.jsx` to your
backend, Formspree, or an email service.

## Design notes

- **Layout originality** — no stacked "card grid" template. The hero is an
  asymmetric 7/5 split with an overlapping portrait, offset colour blocks,
  floating chips and a rotating circular badge; services use a bento grid where
  the lead card spans 2×2; the portfolio is a real Pinterest-style masonry.
- **Micro-interactions** — `layoutId` pills for nav/filter state, conic-gradient
  spinning borders on hover, pointer-tracked spotlights, magnetic CTA shine
  sweep, scroll progress rail, cursor-following glow, typewriter roles.
- **RTL everywhere** — logical properties (`start/end`, `ms/me`, `ps/pe`,
  `inset-inline-*`) rather than `left/right`, plus a `.latin` helper that
  isolates LTR fragments (phone numbers, English titles) inside Arabic text.
- **Accessibility** — semantic landmarks, skip link, focus-visible styles,
  keyboard-navigable lightbox (`Esc` / arrows), and a global
  `prefers-reduced-motion` override.
