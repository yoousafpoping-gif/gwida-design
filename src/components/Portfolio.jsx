import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CATEGORIES, MENUS, PROJECTS } from '../data/site.js'
import { useI18n } from '../i18n/index.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import Lightbox from './ui/Lightbox.jsx'
import { useLightbox, scrollToSection } from '../hooks/index.js'
import { ArrowIcon, SparkIcon } from './ui/Icons.jsx'

/* How many items the main page shows before the "view all" button.
   Each limit is a multiple of its own column count, so the masonry
   fills evenly and never leaves a lopsided last row:

     PREVIEW_LIMIT  -> Gallery       : md:2 / lg:3 columns -> 6 = 2x3
     MENU_PREVIEW_LIMIT -> MenuGallery: sm:2 columns        -> 4 = 2x2

   Menus also get a smaller slice because each one is a front+back PAIR,
   so a menu card already contains two full-size pieces of artwork. */
const PREVIEW_LIMIT = 6
const MENU_PREVIEW_LIMIT = 4

/* Category id -> CATEGORIES entry, so every footer chip label can be
   resolved through `pick()` instead of the raw Arabic string on the item. */
const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]))

/* ------------------------------------------------------------------ *
 * Gallery card
 * - The image is NEVER cropped: `h-auto w-full object-contain` lets
 *   each asset render at its true intrinsic aspect ratio.
 * - All text lives in a solid footer BELOW the image, so nothing
 *   is ever overlaid on top of the artwork.
 * ------------------------------------------------------------------ */
function Card({ item, onOpen, index }) {
  const { lang, pick, t } = useI18n()
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const title = pick(item, 'title')
  const desc = pick(item, 'description', 'enDesc')
  const category = pick(CATEGORY_BY_ID[item.cat], 'label')

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-line bg-surface-2 shadow-glass transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-ink/45 hover:shadow-lift"
    >
      <button
        onClick={() => onOpen(item)}
        className="block w-full text-start"
        aria-label={t('portfolio.ariaView', { name: title })}
      >
        {/* ---------- Image area (uncropped) ---------- */}
        <div className="relative w-full overflow-hidden bg-surface-3">
          {/* Placeholder reserves the exact intrinsic ratio to avoid
              layout shift while the image decodes. */}
          {!loaded && (
            <div
              className="w-full animate-shimmer bg-[linear-gradient(110deg,var(--c-surface-3)_30%,var(--c-surface-2)_50%,var(--c-surface-3)_70%)] bg-[length:220%_100%]"
              style={{ aspectRatio: item.aspectRatio }}
              aria-hidden="true"
            />
          )}

          {failed ? (
            <div
              className="grid w-full place-items-center bg-[linear-gradient(140deg,rgba(248,194,78,0.14),rgba(45,217,240,0.08))] p-8 text-center"
              style={{ aspectRatio: item.aspectRatio }}
            >
              <span className="font-display text-sm font-bold leading-relaxed text-ink-soft">
                {title}
              </span>
            </div>
          ) : (
            <img
              src={item.src}
              alt={`${title} — ${category}`}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              /* h-auto + w-full + object-contain => full image, no crop,
                 no distortion, height driven purely by intrinsic ratio. */
              className={`block h-auto w-full object-contain transition-opacity duration-700 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Subtle hover veil — a tint only, keeps the artwork readable.
              Deliberately a BLACK scrim (not a surface token): it dims
              artwork, so it must stay dark in Light mode too. */}
          <span
            className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
            aria-hidden="true"
          />
        </div>

        {/* ---------- Solid footer ---------- */}
        <div className="border-t border-line-soft bg-surface-2 p-5">
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.badgeColor}`}
                aria-hidden="true"
              />
              <span className="text-[11px] font-bold tracking-wide text-ink-mute">
                {category}
              </span>
            </span>

            <span className="shrink-0 rounded-lg border border-line bg-ink/[0.05] px-2 py-0.5 font-latin text-[10px] font-bold text-ink-mute">
              {item.categoryId}
            </span>
          </div>

          <h3 className="mt-3 font-display text-base font-black leading-snug text-ink transition-colors duration-300 group-hover:text-gold-ink sm:text-[17px]">
            {title}
          </h3>

          <p className="mt-2 text-[13px] leading-loose text-ink-mute">{desc}</p>

          <span className="mt-4 flex items-center gap-2 text-[11px] font-bold text-ink-mute transition-colors duration-300 group-hover:text-gold-ink">
            <span className="h-px w-6 bg-ink/20 transition-all duration-300 group-hover:w-9 group-hover:bg-gold-400/60" />
            {t('portfolio.viewProject')}
          </span>
        </div>
      </button>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ *
 * Masonry gallery — one lightbox per group, so the arrow keys walk
 * only the projects of the section the visitor is actually viewing.
 * `limit` renders just the preview slice; omit it for the full view.
 * ------------------------------------------------------------------ */
function Gallery({ items, limit }) {
  const shown = limit ? items.slice(0, limit) : items
  const box = useLightbox(shown.length)
  const openItem = (item) => box.setIndex(shown.findIndex((p) => p.id === item.id))

  if (shown.length === 0) return null

  return (
    <>
      {/* CSS multi-column masonry: 1 / 2 / 3 columns.
          Children opt out of column breaks via `break-inside-avoid`. */}
      <div className="mt-9 columns-1 gap-5 md:columns-2 lg:columns-3">
        {shown.map((item, i) => (
          <Card key={item.id} item={item} onOpen={openItem} index={i} />
        ))}
      </div>

      <AnimatePresence>
        {box.open && (
          <Lightbox
            items={shown}
            index={box.index}
            onClose={box.close}
            onNext={box.next}
            onPrev={box.prev}
          />
        )}
      </AnimatePresence>
    </>
  )
}

/* ------------------------------------------------------------------ *
 * One side of a menu (the front page, or the back page).
 * Uncropped, with the caption in a solid footer beneath the artwork.
 * ------------------------------------------------------------------ */
function MenuSide({ image, caption, side, onOpen, index }) {
  const { t } = useI18n()
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const ratio = `${image.width} / ${image.height}`

  return (
    <figure className="group overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-glass transition-all duration-500 hover:-translate-y-1 hover:border-gold-ink/45 hover:shadow-lift">
      <button
        onClick={() => onOpen(image)}
        className="block w-full text-start"
        aria-label={t('portfolio.ariaView', { name: caption })}
      >
        <div className="relative w-full overflow-hidden bg-surface-3">
          {!loaded && (
            <div
              className="w-full animate-shimmer bg-[linear-gradient(110deg,var(--c-surface-3)_30%,var(--c-surface-2)_50%,var(--c-surface-3)_70%)] bg-[length:220%_100%]"
              style={{ aspectRatio: ratio }}
              aria-hidden="true"
            />
          )}

          {failed ? (
            <div
              className="grid w-full place-items-center bg-[linear-gradient(140deg,rgba(248,194,78,0.14),rgba(45,217,240,0.08))] p-6 text-center"
              style={{ aspectRatio: ratio }}
            >
              <span className="font-display text-sm font-bold text-ink-soft">{caption}</span>
            </div>
          ) : (
            <img
              src={image.src}
              alt={caption}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`block h-auto w-full object-contain transition-opacity duration-700 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Side chip — sits in the padding ABOVE the artwork only via
              the footer, so nothing is ever painted over the design. */}
          <span className="pointer-events-none absolute inset-x-0 top-0 flex justify-start p-3">
            <span className="rounded-lg border border-line bg-surface-2/85 px-2.5 py-1 text-[10px] font-bold text-ink-mute backdrop-blur-sm">
              {side}
            </span>
          </span>
        </div>

        <figcaption className="border-t border-line-soft bg-surface-2 px-4 py-3">
          <p className="font-display text-sm font-black leading-snug text-ink transition-colors duration-300 group-hover:text-gold-ink">
            {caption}
          </p>
        </figcaption>
      </button>
    </figure>
  )
}

/* ------------------------------------------------------------------ *
 * Menu gallery — CSS masonry, NOT a grid.
 *
 * A 2-column grid forced every row to the height of its tallest cell, so
 * a landscape menu page left a band of dead space underneath. Multi-column
 * masonry packs each card independently and closes that gap.
 *
 * Each menu stays ONE card (`break-inside-avoid`) with its front and back
 * stacked inside, so a front/back pair is never split across two columns.
 * A single lightbox walks the flat front→back→front→back sequence so
 * flipping through stays in document order.
 * ------------------------------------------------------------------ */
function MenuGallery({ menus }) {
  const { lang, pick, t } = useI18n()

  // Flatten once: [menu1.front, menu1.back, menu2.front, ...]
  // `flatIndex[i]` is where menu i's FRONT page starts in that sequence,
  // which only equals i*2 when every earlier menu was a pair.
  const { flat, flatIndex } = useMemo(() => {
    const out = []
    const offsets = []
    for (const m of menus) {
      offsets.push(out.length)
      out.push({ ...m.front, id: `${m.id}-front`, title: pick(m, 'frontCaption', 'frontCaptionEn') })
      if (m.back) out.push({ ...m.back, id: `${m.id}-back`, title: pick(m, 'backCaption', 'backCaptionEn') })
    }
    return { flat: out, flatIndex: offsets }
  }, [menus, lang, pick])

  const box = useLightbox(flat.length)
  const open = (image) => box.setIndex(flat.findIndex((f) => f.id === image.id))

  if (menus.length === 0) return null

  return (
    <>
      <div className="mt-9 columns-1 gap-6 sm:columns-2">
        {menus.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: Math.min(i * 0.05, 0.35),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-3xl border border-line bg-surface-2/60 p-4 shadow-glass sm:p-5"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${m.badgeColor}`}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold tracking-wide text-ink-mute">
                  {pick(CATEGORY_BY_ID[m.cat], 'label')}
                </span>
              </span>

              <span className="flex items-center gap-2">
                <span className="rounded-lg border border-line bg-ink/[0.05] px-2 py-0.5 font-latin text-[10px] font-bold text-ink-mute">
                  {m.categoryId}
                </span>
                <span className="rounded-lg border border-line bg-ink/[0.05] px-2 py-0.5 font-latin text-[10px] font-bold text-ink-faint">
                  {m.isPaired ? 'FRONT + BACK' : 'FRONT'}
                </span>
              </span>
            </div>

            {/* Front and back stack INSIDE the masonry card, so the pair
                always travels together down one column. */}
            <div className="space-y-5">
              <MenuSide
                image={m.front}
                caption={pick(m, 'frontCaption', 'frontCaptionEn')}
                side={t('portfolio.menuFront')}
                onOpen={open}
                index={flatIndex[i]}
              />
              {m.back && (
                <MenuSide
                  image={m.back}
                  caption={pick(m, 'backCaption', 'backCaptionEn')}
                  side={t('portfolio.menuBack')}
                  onOpen={open}
                  index={flatIndex[i] + 1}
                />
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {box.open && (
          <Lightbox
            items={flat}
            index={box.index}
            onClose={box.close}
            onNext={box.next}
            onPrev={box.prev}
          />
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * The four dedicated gallery groups, stacked vertically in display
 * order: signage -> social media -> infographics -> print & menus.
 * All copy lives in the dictionary under `portfolio.sections.<id>.*`.
 * `hasHighlight` marks the three groups whose title splits into two
 * lines — the infographic heading is a single line and has no `titleB`.
 */
const GROUPS = [
  {
    id: 'signage',
    anchor: 'portfolio-signage',
    source: 'projects',
    hasHighlight: true,
  },
  {
    id: 'social',
    anchor: 'portfolio-social',
    source: 'projects',
    hasHighlight: true,
  },
  {
    id: 'infographic',
    anchor: 'portfolio-infographic',
    source: 'projects',
    hasHighlight: false,
  },
  {
    id: 'menus',
    anchor: 'portfolio-menus',
    source: 'menus',
    hasHighlight: true,
  },
]

/* Small pill that opens a category's full view. */
function ViewAllButton({ label, count, onClick }) {
  const { isRTL } = useI18n()

  return (
    <button
      type="button"
      onClick={onClick}
      className="group mt-8 inline-flex items-center gap-3 rounded-full border border-gold-ink/35 bg-surface-2 px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:border-gold-400 hover:bg-gold-400/12 hover:text-gold-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
    >
      {label}
      <span className="rounded-full bg-ink/[0.06] px-2 py-0.5 font-latin text-[11px] font-bold text-ink-mute">
        {count}
      </span>
      {/* RTL: "forward" is toward the start edge, so the arrow points back.
          The nudge is a physical translate, so it mirrors with dir. */}
      <ArrowIcon
        className={`h-4 w-4 rotate-180 transition-transform duration-300 ${
          isRTL ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'
        }`}
      />
    </button>
  )
}

/* ------------------------------------------------------------------ *
 * Section
 * ------------------------------------------------------------------ */
export default function Portfolio() {
  /* null            -> main page: preview slice of every category
     a category id   -> that category's dedicated full view          */
  const [view, setView] = useState(null)
  const { isRTL, lang, t } = useI18n()

  const groups = useMemo(
    () =>
      GROUPS.map((g) => ({
        ...g,
        items:
          g.source === 'menus'
            ? MENUS
            : PROJECTS.filter((p) => p.cat === g.id),
      })),
    []
  )

  const active = view ? groups.find((g) => g.id === view) : null
  const total = PROJECTS.length + MENUS.length

  /* Per-category heading + CTA copy, all from `portfolio.sections.<id>`. */
  const sectionCopy = (g) => ({
    eyebrow: t(`portfolio.sections.${g.id}.eyebrow`),
    titleA: t(`portfolio.sections.${g.id}.titleA`),
    titleB: g.hasHighlight ? t(`portfolio.sections.${g.id}.titleB`) : null,
    desc: t(`portfolio.sections.${g.id}.desc`),
    cta: t(`portfolio.sections.${g.id}.cta`),
  })

  const activeCopy = active ? sectionCopy(active) : null

  /* Keep the section heading in view when swapping between the
     preview page and a full category view. */
  const switchView = (id) => {
    setView(id)
    requestAnimationFrame(() => scrollToSection('portfolio'))
  }

  const isMenus = active?.source === 'menus'

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="03"
            eyebrow={activeCopy ? activeCopy.eyebrow : t('portfolio.eyebrow')}
            title={activeCopy ? activeCopy.titleA : t('portfolio.titleA')}
            highlight={activeCopy ? activeCopy.titleB : t('portfolio.titleB')}
            desc={activeCopy ? activeCopy.desc : t('portfolio.desc')}
          />

          <Reveal delay={0.1}>
            {active ? (
              <button
                type="button"
                onClick={() => switchView(null)}
                className="inline-flex items-center gap-3 rounded-2xl border border-line bg-surface-2 px-5 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:border-gold-400 hover:text-gold-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                {/* Nudge is a physical translate, so it mirrors with dir. */}
                <ArrowIcon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                  }`}
                />
                {t('portfolio.back')}
              </button>
            ) : (
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-2 px-5 py-3">
                <SparkIcon className="h-5 w-5 text-gold-ink" />
                <div>
                  <p className="font-latin text-xl font-black leading-none text-ink">
                    {total}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-mute">{t('portfolio.projectShown')}</p>
                </div>
              </div>
            )}
          </Reveal>
        </div>

        {/* ============ FULL CATEGORY VIEW ============ */}
        {active && (
          <div className="mt-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                <p className="text-sm font-bold text-ink-mute">
                  {t('portfolio.viewFull')} —{' '}
                  <span className="font-latin">{active.items.length}</span>{' '}
                  {isMenus ? t('portfolio.menuShown') : t('portfolio.projectShown')}
                </p>
              </div>
            </div>

            {isMenus ? (
              <MenuGallery menus={active.items} />
            ) : (
              <Gallery items={active.items} />
            )}
          </div>
        )}

        {/* ============ MAIN PAGE: PREVIEWS ============ */}
        {!active && (
          <>
            {/* Jump links — one per group, since there is no single grid any more */}
            <Reveal delay={0.12}>
              <nav
                aria-label={t('portfolio.jumpAria')}
                className="mt-12 flex flex-wrap items-center gap-2.5"
              >
                {groups.map((g) => {
                  const copy = sectionCopy(g)
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => scrollToSection(g.anchor)}
                      className="flex items-center gap-2 rounded-full border border-line bg-surface-2 px-5 py-2.5 text-sm font-bold text-ink-mute transition-colors duration-300 hover:border-gold-ink/45 hover:text-ink"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                      {copy.titleB ? `${copy.titleA} ${copy.titleB}` : copy.titleA}
                      <span className="latin font-latin text-[11px] text-ink-faint">
                        {g.items.length}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </Reveal>

            {/* One dedicated, vertically stacked section per category */}
            {groups.map((g, gi) => {
              const menus = g.source === 'menus'
              const preview = menus ? g.items.slice(0, MENU_PREVIEW_LIMIT) : g.items.slice(0, PREVIEW_LIMIT)
              const hidden = g.items.length - preview.length
              const copy = sectionCopy(g)

              return (
                <div
                  key={g.id}
                  id={g.anchor}
                  className={gi === 0 ? 'mt-14' : 'mt-16 border-t border-line pt-14'}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                      eyebrow={copy.eyebrow}
                      title={copy.titleA}
                      highlight={copy.titleB}
                      desc={copy.desc}
                    />

                    <Reveal delay={0.1}>
                      <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-surface-2 px-5 py-3">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-400"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-latin text-lg font-black leading-none text-ink">
                            {g.items.length}
                          </p>
                          <p className="mt-1 text-[11px] text-ink-mute">
                            {menus ? t('portfolio.menuShown') : t('portfolio.unit')}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {menus ? (
                    <MenuGallery menus={preview} />
                  ) : (
                    <Gallery items={g.items} limit={PREVIEW_LIMIT} />
                  )}

                  <Reveal delay={0.05}>
                    <ViewAllButton
                      label={copy.cta}
                      count={g.items.length}
                      onClick={() => switchView(g.id)}
                    />
                  </Reveal>

                  {hidden > 0 && (
                    <p className="mt-3 text-[11px] text-ink-faint">
                      {t('portfolio.previewNote', {
                        shown: preview.length,
                        total: g.items.length,
                      })}
                    </p>
                  )}
                </div>
              )
            })}
          </>
        )}
      </div>
    </section>
  )
}