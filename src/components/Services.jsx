import { useRef } from 'react'
import { SERVICES } from '../data/site.js'
import { RevealGroup, RevealItem } from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { SERVICES_ICONS, ArrowIcon } from './ui/Icons.jsx'

const ACCENTS = {
  gold: {
    text: 'text-gold-ink',
    ring: 'group-hover:border-gold-400/45',
    glow: 'group-hover:shadow-glow',
    blob: 'bg-gold-400/18',
    sheen: 'from-gold-400',
    chip: 'bg-gold-400/12 text-gold-ink ring-gold-400/25',
  },
  cyan: {
    text: 'text-cyan-ink',
    ring: 'group-hover:border-neon-cyan/45',
    glow: 'group-hover:shadow-glow-cyan',
    blob: 'bg-neon-cyan/18',
    sheen: 'from-neon-cyan',
    chip: 'bg-neon-cyan/12 text-cyan-ink ring-neon-cyan/25',
  },
  orange: {
    text: 'text-neon-orange',
    ring: 'group-hover:border-neon-orange/45',
    glow: 'group-hover:shadow-[0_22px_60px_-20px_rgba(255,122,47,0.6)]',
    blob: 'bg-neon-orange/18',
    sheen: 'from-neon-orange',
    chip: 'bg-neon-orange/12 text-neon-orange ring-neon-orange/25',
  },
  lime: {
    text: 'text-neon-lime',
    ring: 'group-hover:border-neon-lime/45',
    glow: 'group-hover:shadow-[0_22px_60px_-20px_rgba(182,240,90,0.5)]',
    blob: 'bg-neon-lime/15',
    sheen: 'from-neon-lime',
    chip: 'bg-neon-lime/12 text-neon-lime ring-neon-lime/25',
  },
}

function ServiceCard({ service, featured }) {
  const Icon = SERVICES_ICONS[service.icon]
  const a = ACCENTS[service.accent]
  const ref = useRef(null)

  // Pointer-tracked spotlight coordinates
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group spotlight relative h-full overflow-hidden rounded-3xl border border-line bg-ink/[0.03] p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-ink/[0.06] ${a.ring} ${a.glow} ${
        featured ? 'lg:p-9' : ''
      }`}
    >
      {/* Accent blob that blooms on hover */}
      <span
        className={`pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full blur-2xl transition-all duration-700 group-hover:scale-150 ${a.blob} opacity-40 group-hover:opacity-100`}
      />

      {/* Oversized index numeral */}
      <span
        className={`pointer-events-none absolute -top-6 end-3 font-latin text-[7rem] font-black leading-none opacity-[0.05] transition-all duration-500 group-hover:opacity-10 ${a.text}`}
      >
        {service.num}
      </span>

      <div className="relative flex h-full flex-col">
        {/* Icon tile */}
        <span
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ring-1 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${a.chip}`}
        >
          <Icon className="h-7 w-7" />
        </span>

        <h3 className={`mt-6 text-xl font-black leading-snug text-ink ${featured ? 'sm:text-3xl' : ''}`}>
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-[1.95] text-ink-mute">{service.desc}</p>

        {/* Divider + link */}
        <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
          <span className={`font-latin text-[11px] font-bold tracking-[0.25em] ${a.text}`}>
            {service.id.toUpperCase()}
          </span>
          <span className="flex items-center gap-2 text-xs font-bold text-ink-mute transition-colors duration-300 group-hover:text-ink">
            اطلب الخدمة
            <ArrowIcon
              className={`h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1 ${a.text}`}
            />
          </span>
        </div>
      </div>

      {/* Bottom sheen line that wipes in on hover */}
      <span
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-right scale-x-0 bg-gradient-to-l ${a.sheen} to-transparent transition-transform duration-500 group-hover:scale-x-100`}
      />
    </div>
  )
}

export default function Services() {
  const [lead, ...rest] = SERVICES

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow="خدماتي"
            title="أربع أدوات"
            highlight="لنجاح علامتك"
            desc="من الفكرة الأولى حتى الملف النهائي الجاهز للطباعة — كل خدمة مُعالَجَة بنفس المعيار، ونفس العناية بالتفاصيل."
          />

          <RevealGroup className="flex flex-wrap gap-2 lg:justify-end">
            {['جودة طباعة عالية', 'تسليم في الموعد', 'ملفات جاهزة'].map((chip) => (
              <RevealItem key={chip}>
                <span className="rounded-full border border-line bg-ink/[0.04] px-3.5 py-1.5 text-xs font-semibold text-ink-mute">
                  {chip}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Bento: featured card spans 2 cols × 2 rows on large screens */}
        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
          stagger={0.1}
        >
          <RevealItem className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <ServiceCard service={lead} featured />
          </RevealItem>
          {rest.map((s, i) => (
            <RevealItem
              key={s.id}
              className={i === rest.length - 1 ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}