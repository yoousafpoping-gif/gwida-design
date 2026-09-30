import { useState } from 'react'
import { motion } from 'framer-motion'
import { FACEBOOK, MENUS, PHONE_DISPLAY, PROJECTS, WHATSAPP } from '../data/site.js'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { FacebookIcon, PhoneIcon, SparkIcon, WhatsAppIcon, MailIcon } from './ui/Icons.jsx'

const BUDGETS = ['مشروع واحد', 'حملة شهرية', 'هوية متكاملة']
const NEEDS = ['لافتة إعلانية', 'مطبوعات ورقية', 'سوشيال ميديا', 'هوية بصرية', 'خط عربي / شعار']

const SEP = '━━━━━━━━━━━━━━━━━━━'

const clean = (v) => String(v ?? '').trim()

/**
 * Formats the form into a structured, readable Arabic message.
 * WhatsApp renders `*text*` as bold, so field labels are emphasised
 * while the body stays plain.
 */
export function buildWhatsAppMessage({ name, phone, need, budget, message }) {
  return [
    'السلام عليكم 👋',
    'أرغب بمناقشة مشروع تصميم جديد مع Gwida Design.',
    '',
    SEP,
    `*الاسم بالكامل:* ${clean(name)}`,
    `*رقم الواتساب:* ${clean(phone)}`,
    '',
    `*نوع الخدمة:* ${clean(need)}`,
    `*ميزانية تقريبية:* ${clean(budget)}`,
    '',
    SEP,
    '*تفاصيل المشروع:*',
    clean(message) || '—',
    '',
    SEP,
    'المرسل من موقع Gwida Design.',
  ].join('\n')
}

function ContactCard({ href, external, icon: Icon, title, value, tone }) {
  const tones = {
    green: 'text-[#5BF08C] bg-[#25D366]/12 ring-[#25D366]/25 hover:bg-[#25D366]/20',
    blue: 'text-[#7FB4FF] bg-[#1877F2]/12 ring-[#1877F2]/25 hover:bg-[#1877F2]/20',
    gold: 'text-gold-ink bg-gold-400/12 ring-gold-400/25 hover:bg-gold-400/20',
  }

  const Wrapper = external ? 'a' : 'div'

  return (
    <Wrapper
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group flex items-center gap-4 rounded-2xl border border-line bg-ink/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-line ${
        href ? 'cursor-pointer' : ''
      }`}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 transition-transform duration-500 group-hover:scale-110 ${tones[tone]}`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold tracking-wide text-ink-mute">{title}</p>
        <p className="latin mt-0.5 truncate font-latin text-sm font-bold text-ink" dir="ltr">
          {value}
        </p>
      </div>
    </Wrapper>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    need: NEEDS[0],
    budget: BUDGETS[0],
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // wa.me pre-fills the chat; the visitor still presses send there.
    const url = `${WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage(form))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="hairline absolute inset-x-0 top-0 h-px" />
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="تواصل"
          title="لنتحدث عن"
          highlight="مشروعك القادم"
          desc="أرسل تفاصيل مشروعك وسأرد عليك في أقرب وقت — أو تواصل مباشرة عبر واتساب."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* ---------------- INFO SIDE ---------------- */}
          <div className="order-2 space-y-4 lg:order-1 lg:col-span-5">
            <Reveal y={30}>
              <ContactCard
                href={WHATSAPP}
                external
                icon={WhatsAppIcon}
                title="واتساب — الأسرع للرد"
                value={PHONE_DISPLAY}
                tone="green"
              />
            </Reveal>
            <Reveal y={30} delay={0.08}>
              <ContactCard
                href={`tel:+201009198567`}
                external
                icon={PhoneIcon}
                title="اتصال هاتفي"
                value={PHONE_DISPLAY}
                tone="gold"
              />
            </Reveal>
            <Reveal y={30} delay={0.16}>
              <ContactCard
                href={FACEBOOK}
                external
                icon={FacebookIcon}
                title="فيسبوك"
                value="ahmed.alfanan2"
                tone="blue"
              />
            </Reveal>

            {/* Availability */}
            <Reveal y={30} delay={0.24}>
              <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseRing" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <p className="text-sm font-semibold text-emerald-200">
                  متاح حالياً لاستقبال مشاريع جديدة هذا الأسبوع.
                </p>
              </div>
            </Reveal>

            {/* Mini stat card */}
            <Reveal y={30} delay={0.3}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-[linear-gradient(140deg,rgba(248,194,78,0.1),transparent_60%)] p-6">
                <p className="font-display text-lg font-black text-ink">
                  عندك تصميم في بالك؟
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">
                 بسّط الفكرة وأرسلها — حتى لو ناقصة — وأنا أكمّلها معاك.
                </p>
                <p className="mt-4 font-latin text-xs font-bold tracking-[0.28em] text-gold-ink">
                  GWIDA DESIGN
                </p>
                <span className="pointer-events-none absolute -bottom-8 -end-6 h-28 w-28 rounded-full bg-neon-cyan/10 blur-2xl" />
              </div>
            </Reveal>
          </div>

          {/* ---------------- FORM SIDE ---------------- */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal y={34} x={24}>
              <form
                onSubmit={onSubmit}
                className="ring-spin relative overflow-hidden rounded-3xl border border-line bg-ink/[0.035] p-6 backdrop-blur-md sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-400/12 text-gold-ink ring-1 ring-gold-400/25">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-ink">أرسل رسالة</h3>
                    <p className="text-xs text-ink-mute">نرد خلال 24 ساعة كحد أقصى</p>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold text-ink-mute">
                      الاسم بالكامل
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="field"
                      placeholder="مثال: محمد العوضي"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-bold text-ink-mute">
                      رقم الواتساب
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={update('phone')}
                      className="field text-start"
                      placeholder="01xxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-2.5 block text-xs font-bold text-ink-mute">نوع الخدمة</span>
                  <div className="flex flex-wrap gap-2">
                    {NEEDS.map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, need: n }))}
                        className={`relative rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                          form.need === n
                            ? 'text-night-950'
                            : 'border border-line bg-ink/[0.04] text-ink-mute hover:text-ink'
                        }`}
                      >
                        {form.need === n && (
                          <motion.span
                            layoutId="need-pill"
                            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                            className="absolute inset-0 -z-10 rounded-full bg-gold-sheen"
                          />
                        )}
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-2.5 block text-xs font-bold text-ink-mute">ميزانية تقريبية</span>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`relative rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                          form.budget === b
                            ? 'border border-neon-cyan/50 bg-neon-cyan/12 text-cyan-ink'
                            : 'border border-line bg-ink/[0.04] text-ink-mute hover:text-ink'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-xs font-bold text-ink-mute">
                    تفاصيل المشروع
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className="field resize-none"
                    placeholder="اكتب فكرتك، المقاسات المطلوبة، والموعد المناسب للتسليم..."
                  />
                </div>

                {/* Single call to action: the submit button builds the
                    WhatsApp message and hands off to wa.me. */}
                <div className="mt-7">
                  <button type="submit" className="btn-gold group">
                    <SparkIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
                    إرسال الرسالة
                  </button>
                </div>

                {/* Inline confirmation: the draft is open in WhatsApp,
                    nothing was transmitted from the page itself. */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: sent ? 1 : 0,
                    height: sent ? 'auto' : 0,
                    marginTop: sent ? 20 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] px-5 py-4 text-sm font-semibold text-emerald-200">
                    تم تجهيز رسالتك وفتح محادثة واتساب في نافذة جديدة — اضغط «إرسال» هناك لإتمام الطلب.
                  </p>
                </motion.div>
              </form>
            </Reveal>
          </div>
        </div>

        {/* Portfolio CTA banner */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(120deg,rgba(248,194,78,0.12),rgba(45,217,240,0.08)_50%,transparent)] p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="font-display text-xl font-black text-ink sm:text-2xl">
                  تصفّح {PROJECTS.length + MENUS.length} مشروعاً في معرض الأعمال
                </p>
                <p className="mt-1.5 text-sm text-ink-mute">
                  ممكن تشوف أعمال مشابهة لفكرتك قبل ما نبدأ.
                </p>
              </div>
              <a href="#portfolio" className="btn-ghost shrink-0">
                الذهاب إلى المعرض
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}