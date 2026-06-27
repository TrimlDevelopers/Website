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
import AnimateIn from '../components/ui/AnimateIn'

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

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-8 max-w-2xl">
            <p className="section-label mb-2">Sector Expertise</p>
            <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
              Tailored Solutions Across Eight Key Industries
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We combine domain knowledge with modern technology to deliver software that fits your
              sector&apos;s unique operational needs.
            </p>
          </AnimateIn>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] ?? Factory
              return (
                <AnimateIn key={industry.id} delay={index * 70} animation="fade-up">
                  <article
                    id={industry.id}
                    className="service-card card-hover flex h-full flex-col overflow-hidden rounded-2xl"
                  >
                    <div className="aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                          <Icon size={20} />
                        </div>
                        <h2 className="text-lg font-bold text-navy-900">{industry.title}</h2>
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-slate-500">
                        {industry.description}
                      </p>
                      <div className="mt-5">
                        <Button href="/#contact" variant="outline">
                          Discuss Your Needs
                        </Button>
                      </div>
                    </div>
                  </article>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
