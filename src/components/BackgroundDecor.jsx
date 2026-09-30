import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/index.jsx'

/**
 * Fixed ambient layer: gradient aurora blobs, a fine grid, grain,
 * plus abstract calligraphy-like strokes used as transparent decoration.
 * Everything is pointer-events-none so it never blocks interaction.
 */

function Aurora() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '38%']), {
    stiffness: 40,
    damping: 22,
  })
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-26%']), {
    stiffness: 40,
    damping: 22,
  })

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Drifting colour fields */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 left-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(248,194,78,0.16),transparent_62%)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[28%] right-[-14%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(45,217,240,0.14),transparent_62%)] blur-3xl"
      />
      <div className="absolute bottom-[-12%] left-[26%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,47,0.12),transparent_62%)] blur-3xl animate-floatYslow" />

      {/* Technical grid */}
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_at_50%_0%,#000_5%,transparent_72%)]" />

      {/* Abstract calligraphy strokes */}
      <svg
        className="absolute left-[-6%] top-[8%] h-[34rem] w-[34rem] opacity-[0.16]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strokeGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8C24E" stopOpacity="0" />
            <stop offset="45%" stopColor="#F8C24E" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF7A2F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M40 320C90 250 60 150 140 110s190 20 220-60"
          stroke="url(#strokeGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M20 210c70 30 130-40 190 10s60 120 140 110"
          stroke="url(#strokeGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3.6, delay: 0.3, ease: 'easeInOut' }}
        />
        <circle cx="140" cy="110" r="3" fill="#F8C24E" />
        <circle cx="360" cy="50" r="2" fill="#FF7A2F" />
      </svg>

      <svg
        className="absolute right-[-8%] top-[62%] h-[30rem] w-[30rem] opacity-[0.14]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strokeCyan" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD9F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#2DD9F0" stopOpacity="1" />
            <stop offset="100%" stopColor="#49B6FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M360 90c-60 40-40 130-130 160S90 300 60 250"
          stroke="url(#strokeCyan)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M380 200c-50 20-70 90-140 100s-90-40-140-10"
          stroke="url(#strokeCyan)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 3.4, delay: 0.25, ease: 'easeInOut' }}
        />
      </svg>

      {/* Oversized ghost glyph — a nod to the calligraphy */}
      <div className="absolute left-1/2 top-[112%] -translate-x-1/2 select-none font-display text-[30rem] font-black leading-none text-ink/[0.018]">
        art
      </div>

      {/* Grain */}
      <div className="grain absolute inset-0 opacity-[0.55]" />
    </div>
  )
}

/** Thin progress rail pinned to the very top of the viewport. */
export function ScrollProgress() {
  const { isRTL } = useI18n()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })

  return (
    <motion.div
      /* The rail grows away from the reading edge, which sits on the
         right in RTL and on the left in LTR. */
      style={{ scaleX, transformOrigin: isRTL ? 'right' : 'left' }}
      className={
        isRTL
          ? 'fixed inset-x-0 top-0 z-[60] h-[3px] origin-right bg-[linear-gradient(to_left,#F8C24E,#FF7A2F,#2DD9F0)]'
          : 'fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(to_right,#F8C24E,#FF7A2F,#2DD9F0)]'
      }
    />
  )
}

/** A soft glow that trails the cursor across the whole page. */
export function CursorGlow() {
  const x = useSpring(0, { stiffness: 90, damping: 26, mass: 0.6 })
  const y = useSpring(0, { stiffness: 90, damping: 26, mass: 0.6 })

  // The glow layer is pointer-events-none, so the listener lives on window.
  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: x, top: y }}
      className="pointer-events-none fixed z-50 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,194,78,0.09),transparent_65%)] blur-xl lg:block"
    />
  )
}

export default function BackgroundDecor() {
  return (
    <>
      <Aurora />
      <ScrollProgress />
      <CursorGlow />
    </>
  )
}