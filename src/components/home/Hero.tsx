import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react'
import { company } from '../../data/content'
import Button from '../ui/Button'
import Section from '../ui/Section'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '8', label: 'Industries Served' },
  { value: '6', label: 'Core Services' },
  { value: '24/7', label: 'Support Available' },
]

const highlights = [
  'Custom software & AI solutions',
  'Cloud-native architecture',
  'End-to-end delivery',
]

export default function Hero() {
  return (
    <Section className="relative overflow-hidden grid-bg !py-0" containerClassName="!px-0 max-w-none">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24 xl:py-28">
        <div className="max-w-xl lg:max-w-none">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-200">
            <Sparkles size={14} className="text-brand-400" />
            {company.name}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            <span className="gradient-text block">{company.tagline}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
            {company.positioning}
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 size={16} className="shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact">
              Start Your Project
              <ArrowRight size={16} />
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
          <div className="glass-card glow relative overflow-hidden rounded-3xl border border-white/[0.08] p-6 sm:p-7">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Operations Dashboard
                  </p>
                  <p className="mt-1.5 text-xl font-semibold text-white">Live Overview</p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                  All systems active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-surface-950/70 px-3 py-4 text-center"
                  >
                    <div className="text-2xl font-bold leading-none text-brand-400">
                      {stat.value}
                    </div>
                    <div className="mt-2 max-w-[7rem] text-[11px] leading-snug text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-surface-950/70 p-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-gray-400">Automation efficiency</span>
                  <span className="font-semibold tabular-nums text-brand-400">94%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-surface-800">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-indigo-400" />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-brand-500/15 bg-brand-500/[0.06] px-4 py-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
                    Avg. time saved
                  </p>
                  <p className="text-lg font-bold leading-tight text-white">40+ hrs/week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
