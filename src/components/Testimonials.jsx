import { TESTIMONIALS } from '../data/site.js'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { QuoteIcon, StarIcon } from './ui/Icons.jsx'

function Card({ t }) {
  return (
    <figure className="group relative flex w-[19rem] shrink-0 snap-center flex-col rounded-3xl border border-line bg-ink/[0.035] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/30 hover:bg-ink/[0.06] sm:w-[22rem]">
      <span className="absolute -bottom-10 -start-8 h-28 w-28 rounded-full bg-gold-400/[0.09] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
      <QuoteIcon className="h-7 w-7 text-gold-ink/35" />

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <StarIcon key={i} className="h-3.5 w-3.5 text-gold-ink" />
        ))}
      </div>

      <blockquote className="relative mt-4 flex-1 text-[15px] leading-[2] text-ink-soft">
        {t.text}
      </blockquote>

      <figcaption className="relative mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-sheen font-display text-base font-black text-night-950">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="mt-0.5 text-[11px] text-ink-mute">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

/**
 * Duplicated track so the marquee loops seamlessly.
 * Each copy is its own padded group, so translating the track by exactly
 * -50% always lands on an identical visual position (no seam from `gap`).
 */
function Track({ items }) {
  return (
    <div className="flex w-max">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 gap-5 pe-5">
          {items.map((t, i) => (
            <Card key={`${copy}-${i}`} t={t} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const rowA = TESTIMONIALS
  const rowB = [...TESTIMONIALS].reverse()

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="آراء العملاء"
          title="آراء"
          highlight="شركاء النجاح"
          desc="ما يقوله من تعاملوا معي في الطباعة والخط العربي — رأيتهم أقرب من أي وصف."
          align="center"
        />
      </div>

      {/* Two counter-scrolling rows */}
      <div className="mt-14 space-y-5">
        <Reveal>
          <div className="mask-edges group relative overflow-hidden">
            <div dir="ltr" className="flex animate-marqueeL group-hover:[animation-play-state:paused]">
              <Track items={rowA} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mask-edges group relative overflow-hidden">
            <div dir="ltr" className="flex animate-marqueeR group-hover:[animation-play-state:paused]">
              <Track items={rowB} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust strip */}
      <div className="wrap mt-16">
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-3xl border border-line bg-ink/[0.03] px-8 py-7">
            {[
              { k: '20+', v: 'عاماً خبرة' },
              { k: '100%', v: 'رضا العملاء' },
              { k: 'CMYK', v: 'معايير الطباعة' },
              { k: '300DPI', v: 'دقة الملفات' },
            ].map((s) => (
              <div key={s.v} className="flex items-baseline gap-2">
                <span className="font-latin text-2xl font-black text-gold-ink">{s.k}</span>
                <span className="text-sm font-semibold text-ink-mute">{s.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}