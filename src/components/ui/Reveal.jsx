import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper. Animates children into view once.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  className = '',
  once = true,
  amount = 0.25,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Staggered container — pair with <RevealItem />.
 */
export function RevealGroup({ children, className = '', stagger = 0.09, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}