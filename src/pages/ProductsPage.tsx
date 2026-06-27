import { Wrench, Eye, Zap, CheckCircle2 } from 'lucide-react'
import { products } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'

const iconMap: Record<string, typeof Wrench> = {
  wrench: Wrench,
  eye: Eye,
  zap: Zap,
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Ready-to-Deploy Software Platforms"
        description="Purpose-built products designed to solve critical operational challenges across industries."
      />

      <section className="bg-surface-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = iconMap[product.icon] ?? Wrench
              return (
                <div
                  key={product.id}
                  className={`service-card card-hover flex h-full flex-col rounded-2xl p-8 ${
                    product.featured ? 'ring-2 ring-brand-500/30' : ''
                  }`}
                >
                  {product.featured ? (
                    <span className="mb-4 self-start rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  ) : (
                    <span className="mb-4 block h-[26px]" aria-hidden="true" />
                  )}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                    <Icon size={26} />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900">{product.title}</h2>
                  <p className="mt-1 text-sm text-brand-500">{product.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button href="/#contact" variant={product.featured ? 'primary' : 'outline'} className="w-full">
                      Request Demo
                    </Button>
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
