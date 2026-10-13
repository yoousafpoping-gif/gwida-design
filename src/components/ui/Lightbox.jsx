import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CloseIcon, ArrowIcon, ZoomIcon } from './Icons.jsx'
import { computeLens, lensSizeFor } from './lensMath.js'
import { useI18n } from '../../i18n/index.jsx'

export default function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const { t } = useI18n()
  const item = items[index]

  const [canHover, setCanHover] = useState(false)
  const [magnify, setMagnify] = useState(false)

  const imgRef = useRef(null)
  const lensRef = useRef(null)
  const rafRef = useRef(0)

  /* A real magnifier cursor only makes sense for a fine pointer that can
     hover. Touch devices fall back to the browser's native pinch zoom. */
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const apply = () => {
      setCanHover(mq.matches)
      setMagnify(mq.matches)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const hideLens = useCallback(() => {
    if (lensRef.current) lensRef.current.style.opacity = '0'
  }, [])

  /* Hide the lens when the visitor flips to another image. */
  useEffect(() => {
    hideLens()
  }, [index, hideLens])

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const moveLens = useCallback((clientX, clientY) => {
    const img = imgRef.current
    const lens = lensRef.current
    if (!img || !lens) return

    const rect = img.getBoundingClientRect()
    if (rect.width < 2 || rect.height < 2) return

    const lensSize = lensSizeFor(rect.width, rect.height)
    const geo = computeLens({
      pointerX: clientX - rect.left,
      pointerY: clientY - rect.top,
      imageWidth: rect.width,
      imageHeight: rect.height,
      lensSize,
    })

    const style = lens.style
    style.width = `${lensSize}px`
    style.height = `${lensSize}px`
    style.transform = `translate3d(${geo.left}px, ${geo.top}px, 0)`
    style.backgroundSize = `${geo.bgWidth}px ${geo.bgHeight}px`
    style.backgroundPosition = `${geo.bgX}px ${geo.bgY}px`
    style.opacity = '1'
  }, [])

  const scheduleMove = useCallback(
    (clientX, clientY) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => moveLens(clientX, clientY))
    },
    [moveLens]
  )

  if (!item) return null

  const lensActive = canHover && magnify

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-surface/92 p-4 backdrop-blur-xl sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {lensActive && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setMagnify((v) => !v)
            hideLens()
          }}
          aria-pressed={magnify}
          aria-label={t('lightbox.magnify')}
          title={t('lightbox.magnify')}
          className={`absolute start-5 top-5 z-20 inline-flex items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-xs font-bold transition-all duration-300 ${
            magnify
              ? 'border-gold-400/60 bg-gold-400/15 text-gold-ink shadow-[0_0_22px_-6px_rgba(248,194,78,0.85)]'
              : 'border-line bg-ink/[0.06] text-ink-mute hover:border-gold-400/50 hover:text-ink'
          }`}
        >
          <ZoomIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{t('lightbox.magnify')}</span>
        </button>
      )}

      <button
        onClick={onClose}
        aria-label={t('lightbox.close')}
        className="absolute end-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-ink/[0.06] text-ink transition-all duration-300 hover:rotate-90 hover:border-gold-400/50 hover:bg-gold-400/15"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label={t('lightbox.prev')}
        className="absolute start-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-line bg-ink/[0.06] text-ink transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/15"
      >
        <ArrowIcon className="h-5 w-5 rotate-180" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label={t('lightbox.next')}
        className="absolute end-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-line bg-ink/[0.06] text-ink transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/15"
      >
        <ArrowIcon className="h-5 w-5" />
      </button>

      <motion.figure
        key={item.id}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-3xl flex-col items-center"
      >
        <div className="relative max-h-[74vh] w-full overflow-hidden rounded-3xl border border-line bg-surface-2 shadow-lift">
          <div className="relative mx-auto w-fit">
            <img
              ref={imgRef}
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              className={`mx-auto block h-auto max-h-[74vh] w-auto object-contain ${
                lensActive ? 'cursor-none' : ''
              }`}
              loading="lazy"
              onMouseEnter={(e) => {
                if (lensActive) scheduleMove(e.clientX, e.clientY)
              }}
              onMouseMove={(e) => {
                if (lensActive) scheduleMove(e.clientX, e.clientY)
              }}
              onMouseLeave={hideLens}
            />

            {lensActive && (
              <div
                ref={lensRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 rounded-full border-2 border-gold-400 opacity-0 shadow-[0_0_0_2px_rgba(248,194,78,0.85),0_0_0_4px_rgba(255,122,47,0.35),0_0_34px_10px_rgba(255,122,47,0.45)] transition-opacity duration-200 will-change-transform"
                style={{
                  width: 160,
                  height: 160,
                  backgroundImage: `url("${item.src}")`,
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
          </div>
        </div>

        <figcaption className="mt-5 flex w-full flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/[0.05] px-3.5 py-1 text-xs font-bold text-ink-soft">
              <span className={`h-2 w-2 rounded-full ${item.badgeColor}`} aria-hidden="true" />
              {item.category}
            </span>
            <span className="latin font-latin text-xs text-ink-mute">
              {index + 1} / {items.length}
            </span>
          </div>

          <h3 className="font-display text-lg font-black text-ink sm:text-xl">
            {item.title}
          </h3>

          <p className="max-w-xl text-sm leading-loose text-ink-mute">{item.description}</p>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
