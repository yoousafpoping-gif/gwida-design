import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useIsPresent } from 'framer-motion'
import { CloseIcon, ArrowIcon, ZoomIcon } from './Icons.jsx'
import { computeLens, lensSizeFor } from './lensMath.js'
import { useI18n } from '../../i18n/index.jsx'
import { prefetchImage } from '../../hooks/index.js'

export default function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const { t, isRTL } = useI18n()
  const item = items[index]

  const [canHover, setCanHover] = useState(false)
  const [isZoomEnabled, setIsZoomEnabled] = useState(false)

  /* Framer Motion tells us whether we're still the "present" child. While
     the exit animation plays we are no longer present, so the full-screen
     overlay drops to `pointer-events-none`: a lingering exit frame can
     NEVER keep swallowing clicks on the cards underneath. */
  const isPresent = useIsPresent()

  const imgRef = useRef(null)
  const lensRef = useRef(null)
  const rafRef = useRef(0)

  /* The magnifier is OFF by default and only offered on a fine pointer that
     can hover; touch devices fall back to the browser's native pinch zoom.
     Turning it on is always a deliberate click of the toggle button. */
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const apply = () => setCanHover(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const hideLens = useCallback(() => {
    if (lensRef.current) lensRef.current.style.opacity = '0'
  }, [])

  /* The heavy preview fades in over an instant, already-cached thumbnail so
     a click never shows a blank frame. Reset synchronously when the slide
     changes (render-phase reset) so the fade-in restarts cleanly. */
  const [loaded, setLoaded] = useState(false)
  const [loadedId, setLoadedId] = useState(item?.id)
  if (item && loadedId !== item.id) {
    setLoadedId(item.id)
    setLoaded(false)
  }

  /* Hide the lens and reset the magnifier whenever the visitor flips to
     another image, so each slide starts from a clean, zoom-off state. */
  useEffect(() => {
    setIsZoomEnabled(false)
    hideLens()
  }, [index, hideLens])

  /* Warm the neighbours (wrapping around) so the next arrow press is instant. */
  useEffect(() => {
    if (!items || items.length < 2) return
    const neighbours = [items[index + 1] ?? items[0], items[index - 1] ?? items[items.length - 1]]
    neighbours.forEach((it) => it && prefetchImage(it.large ?? it.src))
  }, [index, items])

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

  const lensActive = canHover && isZoomEnabled

  /* Touch swipe: enabled only on devices without hover (phones/tablets) so it
     never fights the mouse magnifier on desktop. The direction follows the
     writing direction, so a swipe always matches the on-screen image order. */
  const handleDragEnd = (_event, info) => {
    const offset = info.offset.x
    if (Math.abs(offset) < 60) return
    const forward = isRTL ? offset > 0 : offset < 0
    if (forward) onNext()
    else onPrev()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-surface/92 p-4 sm:p-8 ${
        isPresent ? '' : 'pointer-events-none'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {canHover && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setIsZoomEnabled((v) => !v)
            hideLens()
          }}
          aria-pressed={isZoomEnabled}
          aria-label={t('lightbox.magnify')}
          title={t('lightbox.magnify')}
          className={`absolute start-5 top-5 z-20 inline-flex items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-xs font-bold transition-all duration-300 ${
            isZoomEnabled
              ? 'border-gold-400 bg-gold-400 text-night-950 shadow-[0_0_24px_-6px_rgba(248,194,78,0.95)]'
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
        drag={canHover ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.35}
        onDragEnd={handleDragEnd}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-3xl flex-col items-center"
      >
        <div className="relative max-h-[74vh] w-full overflow-hidden rounded-3xl border border-line bg-surface-2 shadow-lift">
          <div className="relative mx-auto w-fit">
            <img
              src={item.thumb}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
            />
            <img
              ref={imgRef}
              src={item.large ?? item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              className={`relative z-10 mx-auto block h-auto max-h-[74vh] w-auto object-contain transition-opacity duration-300 ${
                loaded ? 'opacity-100' : 'opacity-0'
              } ${lensActive ? 'cursor-none' : ''}`}
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={(e) => {
                const el = e.currentTarget
                if (el.dataset.fallback) {
                  setLoaded(true)
                  return
                }
                el.dataset.fallback = '1'
                el.src = item.src
              }}
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
                className="pointer-events-none absolute left-0 top-0 z-20 rounded-full border-2 border-gold-400 opacity-0 shadow-[0_0_0_2px_rgba(248,194,78,0.85),0_0_0_4px_rgba(255,122,47,0.35),0_0_34px_10px_rgba(255,122,47,0.45)] transition-opacity duration-200 will-change-transform"
                style={{
                  width: 160,
                  height: 160,
                  backgroundImage: `url("${item.large ?? item.src}")`,
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
