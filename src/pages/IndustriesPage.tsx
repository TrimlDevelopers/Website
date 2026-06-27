import {
  Factory,
  Truck,
  Warehouse,
  Heart,
  GraduationCap,
  ShoppingBag,
  Rocket,
  LineChart,
} from 'lucide-react'
import { industries } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'

const iconMap: Record<string, typeof Factory> = {
  factory: Factory,
  truck: Truck,
  warehouse: Warehouse,
  heart: Heart,
  graduation: GraduationCap,
  shopping: ShoppingBag,
  rocket: Rocket,
  chart: LineChart,
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Industries We Serve"
        description="Deep domain expertise across sectors — we understand your challenges and build solutions that fit."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Factory
            return (
              <div
                key={industry.id}
                id={industry.id}
                className="card-hover flex h-full flex-col rounded-2xl border border-white/[0.06] glass-card p-7 sm:p-8"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/10 text-brand-400 ring-1 ring-brand-500/20">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-xl font-bold text-white">{industry.title}</h2>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-400">
                  {industry.description}
                </p>
                <div className="mt-6 pt-2">
                  <Button href="#contact" variant="outline">
                    Discuss Your Needs
                  </Button>
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
