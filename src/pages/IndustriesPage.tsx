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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Factory
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="service-card card-hover overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[2/1] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                        <Icon size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-navy-900">{industry.title}</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">{industry.description}</p>
                    <div className="mt-5">
                      <Button href="/#contact" variant="outline">
                        Discuss Your Needs
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
