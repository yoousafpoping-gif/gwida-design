import { motion } from 'framer-motion'
import { CloseIcon, ArrowIcon } from './Icons.jsx'

export default function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const item = items[index]
  if (!item) return null

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
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute end-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-ink/[0.06] text-ink transition-all duration-300 hover:rotate-90 hover:border-gold-400/50 hover:bg-gold-400/15"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {/* Prev / Next */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="السابق"
          className="absolute start-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-2xl border border-line bg-ink/[0.06] text-ink transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/15"
        >
          <ArrowIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="التالي"
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
            <img
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="mx-auto block h-auto max-h-[74vh] w-auto object-contain"
              loading="lazy"
            />
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