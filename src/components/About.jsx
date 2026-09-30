import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PROFILE_IMG } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { QuoteIcon } from './ui/Icons.jsx'

const PILLARS = [
  { title: 'أصالة الخطاط', desc: 'خط عربي متجذّر في تراث الكتابة' },
  { title: 'خيال الرسام', desc: 'ألوان وتفاصيل تُحكى بالمعنى' },
  { title: 'احترافية الجرافيك', desc: 'مخرجات مطابقة لمتطلبات الطباعة' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [42, -42])
  const quoteY = useTransform(scrollYProgress, [0, 1], [10, -18])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      {/* Diagonal hairline divider */}
      <div className="hairline absolute inset-x-0 top-0 h-px" />

      <div className="wrap">
        {/* Asymmetric 12-col grid: text spans wider than the portrait */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ---------- PORTRAIT COLUMN ---------- */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28 lg:max-w-none">
              {/* Large offset panel */}
              <motion.div
                style={{ y: quoteY }}
                className="absolute -bottom-8 -end-6 hidden h-[86%] w-[78%] rounded-[2rem] border border-gold-400/20 bg-[linear-gradient(150deg,rgba(248,194,78,0.14),transparent_60%)] lg:block"
              />
              <div className="absolute -start-5 -top-5 h-28 w-28 rounded-2xl border border-neon-cyan/25 bg-neon-cyan/[0.06]" />

              <Reveal y={40} x={30}>
                <div className="ring-spin relative overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-lift">
                  <img
                    src={PROFILE_IMG}
                    alt="رحلة الإبداع — أحمد جويدة"
                    width="1024"
                    height="1024"
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,6,13,0.85),transparent_55%)]" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-latin text-[10px] font-bold tracking-[0.34em] text-gold-ink">
                      THE JOURNEY
                    </p>
                    <p className="mt-1.5 text-base font-bold text-ink">رحلة الإبداع</p>
                  </div>
                </div>
              </Reveal>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.3 }}
                className="absolute -top-6 -start-6 grid h-24 w-24 place-items-center rounded-3xl border border-gold-400/30 bg-surface-2/90 text-center shadow-glow backdrop-blur-xl"
              >
                <div>
                  <p className="font-latin text-3xl font-black leading-none text-gold-ink">20+</p>
                  <p className="mt-1 text-[10px] font-bold leading-tight text-ink-mute">
                    عاماً في
                    <br />
                    الميدان
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ---------- TEXT COLUMN ---------- */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading
              index="01"
              eyebrow="من أنا"
              title="من الخط إلى"
              highlight="العلامة"
              desc="أكثر من عشرين عاماً في تحويل الأفكار إلى هويات تبقى في الذاكرة."
            />

            <Reveal delay={0.12}>
              <p className="mt-8 text-lg font-medium leading-loose text-ink-soft sm:text-xl">
                الحمد لله على ما مضى، والحمد لله على ما بقى.. متطلع دائماً لتجربة جديدة
                وشركاء نجاح آخرين. أنا{' '}
                <span className="font-bold text-ink">أحمد جويدة</span>، أجمع بين أصالة
                <span className="mx-1.5 rounded-lg bg-gold-400/10 px-2 py-0.5 text-base font-bold text-gold-ink">
                  الخطاط
                </span>
                ، وخيال
                <span className="mx-1.5 rounded-lg bg-neon-cyan/10 px-2 py-0.5 text-base font-bold text-cyan-ink">
                  الرسام الديجيتال
                </span>
                ، واحترافية
                <span className="mx-1.5 rounded-lg bg-neon-orange/10 px-2 py-0.5 text-base font-bold text-neon-orange">
                  مصمم الجرافيك
                </span>
                . بخبرة تمتد لأكثر من عشرين عاماً في السوق، أفهم تماماً كيف أجعل علامتك
                التجارية تتحدث بصوت مسموع. سواء كنت تبحث عن لافتة إعلانية، مطبوعات ورقية، أو
                تصميمات عصرية؛ أنا هنا لنجاح مشروعك.
              </p>
            </Reveal>

            {/* Pillars */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.09}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink/[0.03] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/35 hover:bg-ink/[0.06]">
                    <span className="absolute -bottom-6 -start-6 h-20 w-20 rounded-full bg-gold-400/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                    <span className="font-latin text-xs font-bold text-gold-ink/70">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-loose text-ink-mute">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pull quote */}
            <Reveal delay={0.2}>
              <motion.figure
                style={{ y: imgY }}
                className="relative mt-10 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(140deg,rgba(248,194,78,0.08),transparent_55%)] p-7 sm:p-9"
              >
                <QuoteIcon className="absolute -top-2 end-4 h-20 w-20 text-ink/[0.05]" />
                <blockquote className="relative text-lg font-bold leading-loose text-ink sm:text-xl">
                  <span className="text-gold-gradient animate-shimmer">أصالة الخط</span> هي ما
                  يجعل علامتك تُقرأ من على بُعد مترين.. لا لأنني أزيّنها، بل لأنني أُسمعها.
                </blockquote>
                <figcaption className="relative mt-5 flex items-center gap-3 text-sm text-ink-mute">
                  <span className="h-px w-8 hairline" />
                  أحمد جويدة — Gwida Design
                </figcaption>
              </motion.figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}