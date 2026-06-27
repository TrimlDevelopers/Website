import {
  Code2,
  Globe,
  Boxes,
  Brain,
  Workflow,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import { services } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  globe: Globe,
  boxes: Boxes,
  brain: Brain,
  workflow: Workflow,
  chart: BarChart3,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Comprehensive Software Services"
        description="From concept to deployment, TriML Technologies delivers end-to-end solutions tailored to your business needs."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-5 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2
            const isEven = index % 2 === 0
            return (
              <div
                key={service.id}
                id={service.id}
                className={`service-card card-hover flex flex-col gap-6 rounded-2xl p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                  <Icon size={36} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-navy-900">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-500">{service.description}</p>
                  <div className="mt-6">
                    <Button href="/#contact" variant="outline">
                      Get Started
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
