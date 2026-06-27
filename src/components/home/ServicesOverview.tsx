import { Link } from 'react-router-dom'
import {
  Code2,
  Globe,
  Boxes,
  Brain,
  Workflow,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import { services } from '../../data/content'
import AnimateIn from '../ui/AnimateIn'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  boxes: Boxes,
  brain: Brain,
  workflow: Workflow,
  chart: BarChart3,
}

export default function ServicesOverview() {
  return (
    <section className="bg-surface-light py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-label mb-2">Our Core Services</p>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
              Solutions Designed for Your Business Growth
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2
            return (
              <AnimateIn key={service.id} delay={index * 80} animation="scale-in">
                <Link
                  to={`/services#${service.id}`}
                  className="service-card card-hover group flex h-full flex-col rounded-2xl p-6 lg:p-7"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.shortDescription}
                  </p>
                </Link>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
