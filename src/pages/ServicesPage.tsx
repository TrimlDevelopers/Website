import {
  Code2,
  Globe,
  Boxes,
  Brain,
  Workflow,
  Cloud,
  ArrowRight,
} from 'lucide-react'
import { services } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  boxes: Boxes,
  brain: Brain,
  workflow: Workflow,
  cloud: Cloud,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Comprehensive Software Services"
        description="From concept to deployment, TriML Technologies delivers end-to-end solutions tailored to your business needs."
      />

      <Section>
        <div className="mx-auto max-w-4xl space-y-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2
            const isEven = index % 2 === 0
            return (
              <div
                key={service.id}
                id={service.id}
                className={`card-hover flex flex-col gap-6 rounded-3xl border border-white/[0.06] glass-card p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-indigo-500/10 text-brand-400 ring-1 ring-brand-500/20 lg:h-24 lg:w-24">
                  <Icon size={36} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Button href="#contact" variant="outline">
                      Get Started
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
