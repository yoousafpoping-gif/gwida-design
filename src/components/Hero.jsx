import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { PROFILE_IMG, ROLES, STATS } from '../data/site.js'
import { scrollToSection } from '../hooks/index.js'
import { ArrowIcon, SparkIcon } from './ui/Icons.jsx'

/* ------------------------------------------------------------------ *
 * Typewriter — cycles the Arabic job titles.
 * Arabic-only: a single-direction string avoids bidi reordering,
 * so the caret and the growing text never jump sideways.
 * ------------------------------------------------------------------ */
function Typewriter({ words, className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (pause) {
      const t = setTimeout(() => {
        setPause(false)
        setDeleting(true)
      }, 1500)
      return () => clearTimeout(t)
    }

    if (!deleting && text === current) {
      setPause(true)
      return
    }

    const t = setTimeout(
      () => {
        if (deleting) {
          setText(current.slice(0, text.length - 1))
          if (text.length === 1) {
            setDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        } else {
          setText(current.slice(0, text.length + 1))
        }
      },
      deleting ? 55 : 110
    )

    return () => clearTimeout(t)
  }, [text, deleting, index, pause, words])

  return (
    <span dir="rtl" className={`font-display font-bold ${className}`}>
      {text}
      <span className="ms-1.5 inline-block h-[0.95em] w-[2.5px] translate-y-[0.16em] animate-caret bg-gold-400 align-middle" />
    </span>
  )
}

/* ------------------------------------------------------------------ *
 * Rotating circular badge with Arabic calligraphy-style copy.
 * ------------------------------------------------------------------ */
function RotatingBadge({ className = '' }) {
  return (
    <div className={`absolute h-32 w-32 sm:h-40 sm:w-40 ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spinSlow">
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            fill="none"
          />
          <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE49B" />
            <stop offset="55%" stopColor="#F8C24E" />
            <stop offset="100%" stopColor="#FF7A2F" />
          </linearGradient>
        </defs>
        <text className="fill-gold-300 text-[15px] font-bold tracking-[0.28em]">
          <textPath href="#badge-circle" startOffset="0%">
            • أحمد جويدة • تصميم وخط عربي • منذ أكثر من خمس وعشرين عاماً •
          </textPath>
        </text>
        <circle cx="100" cy="100" r="88" fill="none" stroke="url(#badgeGrad)" strokeWidth="0.75" opacity="0.5" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */
export default function Hero() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 130])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  // Pointer-driven 3D tilt for the portrait block.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 130, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 130, damping: 18 })

  const handlePointer = (e) => {
    const r = frameRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const resetTilt = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointer}
      onPointerLeave={resetTilt}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28"
    >
      {/* Vertical latin watermark */}
      <span className="pointer-events-none absolute -start-6 top-1/2 hidden -translate-y-1/2 select-none font-latin text-[7rem] font-bold tracking-[0.3em] text-ink/[0.03] xl:block">
        GWIDA
      </span>

      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* ---------------- CONTENT (start side in RTL) --------------- */}
          <motion.div style={{ y: yText, opacity: fade }} className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] py-1.5 pe-4 ps-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseRing" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold tracking-wide text-emerald-300">
                متاح حالياً لمشاريع جديدة
              </span>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-200">
                2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[3.1rem] font-black leading-[1.05] tracking-tight text-ink sm:text-[4.2rem] lg:text-[5rem]"
            >
              <span className="block">أحمد جويدة</span>
              <span className="latin mt-1 block font-latin text-lg font-medium tracking-[0.42em] text-ink-mute sm:text-xl">
                AHMED GWIDA
              </span>
            </motion.h1>

            {/* Typewriter roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 flex items-center gap-3"
            >
              <Typewriter words={ROLES} className="text-2xl text-gold-ink sm:text-3xl" />
            </motion.div>

            {/* Main heading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-2xl text-[1.35rem] font-bold leading-[1.65] text-ink-soft sm:text-[1.6rem] lg:text-[1.75rem]"
            >
              أكثر من{' '}
              <span className="relative inline-block">
                <span className="text-gold-gradient animate-shimmer">25 عاماً</span>
                <svg
                  className="absolute -bottom-1.5 start-0 h-2.5 w-full text-gold-ink/60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C20 3 40 10 58 6s28-6 40-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              من الشغف.. حيث يتحول التصميم إلى{' '}
              <span className="text-gold-gradient animate-shimmer">فن</span>، والفن إلى هوية.
            </motion.p>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.34 }}
              className="mt-4 max-w-xl text-[15px] leading-[2] text-ink-mute sm:text-base"
            >
              خطاط، رسام ديجيتال، ومصمم جرافيك. أتولى التعبير عن هويتك البصرية من خلال
              تصميمات لافتة ومطبوعات احترافية.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button onClick={() => scrollToSection('portfolio')} className="btn-gold group">
                <SparkIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
                شاهد أعمالي
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-ghost group">
                تواصل معي
                <ArrowIcon className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1.5" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.52 }}
              className="mt-11 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-ink/[0.05]"
            >
              {STATS.map((s) => (
                <div key={s.label} className="bg-surface/70 px-4 py-4 text-center backdrop-blur-sm">
                  <dt className="font-latin text-2xl font-black text-gold-ink sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] font-semibold text-ink-mute sm:text-xs">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ---------------- VISUAL (end side in RTL) ------------------ */}
          <motion.div
            style={{ y: yVisual, opacity: fade, scale }}
            className="order-first lg:order-last lg:col-span-5"
          >
            <div ref={frameRef} className="relative mx-auto max-w-md lg:max-w-none" style={{ perspective: 1200 }}>
              <motion.div
                style={{ rotateX: rx, rotateY: ry }}
                className="[transform-style:preserve-3d]"
              >
                {/* Offset colour block behind the portrait */}
                <div className="absolute -bottom-6 -start-6 h-4/5 w-4/5 rounded-[2.5rem] border border-gold-400/25 bg-gold-400/[0.06]" />
                <div className="absolute -end-6 -top-6 h-32 w-32 rounded-full bg-neon-cyan/10 blur-2xl" />

                {/* Main portrait frame */}
                <div className="ring-spin relative overflow-hidden rounded-[2.5rem] border border-line bg-surface-2 shadow-lift">
                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(248,194,78,0.18),transparent_45%,rgba(45,217,240,0.14))]" />
                  <img
                    src={PROFILE_IMG}
                    alt="أحمد جويدة — مصمم جرافيك وخطاط"
                    width="1024"
                    height="1024"
                    loading="eager"
                    className="relative aspect-square w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />

                  {/* Corner brackets */}
                  {[
                    'start-4 top-4 border-s-2 border-t-2',
                    'end-4 top-4 border-e-2 border-t-2',
                    'start-4 bottom-4 border-s-2 border-b-2',
                    'end-4 bottom-4 border-e-2 border-b-2',
                  ].map((pos) => (
                    <span
                      key={pos}
                      className={`pointer-events-none absolute h-7 w-7 rounded-md border-gold-400/70 ${pos}`}
                    />
                  ))}

                  {/* Caption strip */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-[linear-gradient(to_top,rgba(4,6,13,0.94),transparent)] px-5 pb-4 pt-10">
                    <div>
                      <p className="font-latin text-[10px] font-bold tracking-[0.3em] text-gold-ink">
                        GWIDA DESIGN
                      </p>
                      <p className="mt-1 text-sm font-bold text-ink">أحمد جويدة</p>
                    </div>
                    <span className="rounded-full border border-line bg-ink/10 px-2.5 py-1 text-[10px] font-bold text-ink backdrop-blur">
                      2005 — 2026
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -top-5 -start-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass sm:-start-8"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-400/15 text-lg">
                  ✍︎
                </span>
                <div>
                  <p className="text-xs font-black text-ink">خط عربي أصيل</p>
                  <p className="text-[10px] text-ink-mute">Calligraphy</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="glass absolute -bottom-6 -end-3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass sm:-end-8"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-neon-cyan/15 text-lg">
                  🎨
                </span>
                <div>
                  <p className="text-xs font-black text-ink">ملفات جاهزة للطباعة</p>
                  <p className="text-[10px] text-ink-mute">Print Ready</p>
                </div>
              </motion.div>

              <RotatingBadge className="-bottom-10 -start-10 hidden sm:block" />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          onClick={() => scrollToSection('about')}
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-ink-faint transition-colors hover:text-gold-ink lg:mt-20"
          aria-label="انتقل إلى قسم من أنا"
        >
          <span className="text-[10px] font-bold tracking-[0.3em]">SCROLL</span>
          <span className="relative h-12 w-[1px] overflow-hidden bg-ink/10">
            <motion.span
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1/2 bg-gold-sheen"
            />
          </span>
        </motion.button>
      </div>
    </section>
  )
}