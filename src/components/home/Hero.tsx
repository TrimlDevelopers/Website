import { ArrowRight, Play, Brain, Layers, Cloud } from 'lucide-react'
import { company, heroFeatures } from '../../data/content'
import Button from '../ui/Button'
import DashboardMockup from '../ui/DashboardMockup'

const featureIcons = { brain: Brain, layers: Layers, cloud: Cloud }

export default function Hero() {
  return (
    <section className="hero-pattern overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <span className="hero-enter hero-enter-1 inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-600 sm:px-4 sm:py-1.5 sm:text-xs">
            {company.heroBadge}
          </span>

          <h1 className="hero-enter hero-enter-2 mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {company.heroTitle}{' '}
            <span className="text-brand-500">{company.heroTitleAccent}</span>
          </h1>

          <p className="hero-enter hero-enter-3 mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:text-lg">
            {company.heroSubtitle}
          </p>

          <div className="hero-enter hero-enter-4 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch">
            <Button href="#contact" className="btn-pulse w-full sm:w-auto">
              Schedule Consultation
              <ArrowRight size={16} />
            </Button>
            <Button href="/products" variant="outline" className="w-full sm:w-auto">
              <Play size={14} fill="currentColor" />
              Explore Solutions
            </Button>
          </div>

          <div className="hero-enter hero-enter-5 mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            {heroFeatures.map((f) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons] ?? Brain
              return (
                <div key={f.label} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{f.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hero-dashboard-enter w-full">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
