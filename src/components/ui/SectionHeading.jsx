import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

/**
 * Section heading: oversized index number, gold eyebrow, gradient title.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  desc,
  align = 'start',
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'text-center' : ''}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}
        >
          {index && (
            <span className="relative font-latin text-5xl font-light leading-none text-ink/[0.07] sm:text-6xl">
              {index}
              <span className="absolute inset-0 bg-gold-sheen bg-clip-text text-transparent">
                {index}
              </span>
            </span>
          )}
          <span className="eyebrow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-pulseRing" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-5 text-4xl font-black leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
          {title}{' '}
          {highlight && <span className="text-gold-gradient animate-shimmer">{highlight}</span>}
        </h2>
      </Reveal>

      {desc && (
        <Reveal delay={0.16}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-mute sm:text-base ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {desc}
          </motion.p>
        </Reveal>
      )}
    </div>
  )
}