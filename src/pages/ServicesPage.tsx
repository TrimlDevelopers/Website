import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Code2,
  Globe,
  Boxes,
  Brain,
  Workflow,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Users,
} from 'lucide-react'
import { services } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'
import AnimateIn from '../components/ui/AnimateIn'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  boxes: Boxes,
  brain: Brain,
  workflow: Workflow,
  chart: BarChart3,
}

const valueProps = [
  { icon: Clock, label: 'On-time delivery' },
  { icon: Shield, label: 'Secure & scalable' },
  { icon: Users, label: 'Dedicated support' },
]

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id)

  useEffect(() => {
    const ids = services.map((s) => s.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHero
        label="Services"
        title="Comprehensive Software Services"
        description="From concept to deployment, TriML Technologies delivers end-to-end solutions tailored to your business needs."
      />

      {/* Quick overview grid — uses full width */}
      <section className="border-b border-slate-200 bg-surface-light py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-2">What We Offer</p>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
                Six Core Capabilities for Modern Businesses
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Select a service below to jump to details, or scroll to explore each offering.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Code2
              const isActive = activeId === service.id
              return (
                <AnimateIn key={service.id} delay={index * 60} animation="scale-in" duration={500}>
                  <a
                    href={`#${service.id}`}
                    className={`service-card card-hover flex h-full gap-4 rounded-xl p-5 transition-all ${
                      isActive ? 'ring-2 ring-brand-500/40 border-brand-500/30' : ''
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-navy-900">{service.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-slate-500 line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </a>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detail section — sidebar + content uses full width */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile horizontal nav */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  activeId === service.id
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {service.title.split(' ')[0]}
              </a>
            ))}
          </div>

          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-14">
            {/* Sticky sidebar — desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="section-label mb-4">Jump To</p>
                <nav className="space-y-1">
                  {services.map((service) => {
                    const Icon = iconMap[service.icon] ?? Code2
                    return (
                      <a
                        key={service.id}
                        href={`#${service.id}`}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          activeId === service.id
                            ? 'bg-brand-500/10 font-semibold text-brand-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-brand-500'
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        <span className="leading-snug">{service.title}</span>
                      </a>
                    )
                  })}
                </nav>

                <div className="mt-8 rounded-xl border border-slate-200 bg-surface-light p-5">
                  <p className="text-sm font-semibold text-navy-900">Need a custom plan?</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Tell us your requirements and we&apos;ll recommend the right mix of services.
                  </p>
                  <Button href="/#contact" className="mt-4 w-full text-xs">
                    Talk to Us
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </aside>

            {/* Service details */}
            <div className="space-y-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] ?? Code2
                return (
                  <AnimateIn key={service.id} delay={index * 50} animation="fade-up">
                    <article
                      id={service.id}
                      className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      <div className="grid md:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_280px]">
                        <div className="p-6 sm:p-8 lg:p-10">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                              <Icon size={28} />
                            </div>
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
                                Service {String(index + 1).padStart(2, '0')}
                              </span>
                              <h2 className="mt-1 text-2xl font-bold text-navy-900 sm:text-3xl">
                                {service.title}
                              </h2>
                            </div>
                          </div>

                          <p className="mt-5 text-base leading-relaxed text-slate-600">
                            {service.description}
                          </p>

                          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {service.highlights.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                                <CheckCircle2 size={16} className="shrink-0 text-brand-500" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-8 flex flex-wrap gap-3">
                            <Button href="/#contact">
                              Get Started
                              <ArrowRight size={16} />
                            </Button>
                            <Link
                              to="/products"
                              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border-2 border-brand-500/30 px-5 text-sm font-semibold text-brand-500 transition-colors hover:bg-brand-50"
                            >
                              View Solutions
                            </Link>
                          </div>
                        </div>

                        <div className="border-t border-slate-100 bg-surface-light p-6 md:border-l md:border-t-0 sm:p-8">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Ideal For
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {service.shortDescription}
                          </p>
                          <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                            {valueProps.map(({ icon: VIcon, label }) => (
                              <div key={label} className="flex items-center gap-2.5 text-sm text-slate-600">
                                <VIcon size={16} className="text-brand-500" />
                                {label}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Value strip — fills horizontal space */}
      <section className="border-y border-slate-200 bg-surface-light py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {valueProps.map(({ icon: Icon, label }, index) => (
              <AnimateIn key={label} delay={index * 80} animation="fade-up">
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{label}</p>
                    <p className="text-sm text-slate-500">Built into every engagement</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
