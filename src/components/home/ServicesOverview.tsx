import { Link } from 'react-router-dom'
import {
  Code2,
  Globe,
  Boxes,
  Brain,
  Workflow,
  Cloud,
  ArrowRight,
} from 'lucide-react'
import { services } from '../../data/content'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  boxes: Boxes,
  brain: Brain,
  workflow: Workflow,
  cloud: Cloud,
}

export default function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        label="Services"
        title="End-to-End Software Solutions"
        description="From custom applications to AI-powered automation, we deliver technology that drives real business outcomes."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Code2
          return (
            <div
              key={service.id}
              className="card-hover group flex h-full flex-col rounded-2xl border border-white/[0.06] glass-card p-6 lg:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-all group-hover:ring-brand-400/40">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                {service.shortDescription}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/5 px-5 py-2.5 text-sm font-medium text-brand-300 transition-all hover:border-brand-400/50 hover:bg-brand-500/10"
        >
          View all services
          <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  )
}
