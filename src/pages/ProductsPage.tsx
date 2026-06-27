import { Wrench, Eye, Zap, CheckCircle2 } from 'lucide-react'
import { products } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
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
        label="Products"
        title="Ready-to-Deploy Software Platforms"
        description="Purpose-built products designed to solve critical operational challenges across industries."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.icon] ?? Wrench
            return (
              <div
                key={product.id}
                className={`card-hover flex h-full flex-col rounded-3xl border p-8 ${
                  product.featured
                    ? 'border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-surface-950/50 glow'
                    : 'border-white/[0.06] glass-card'
                }`}
              >
                {product.featured ? (
                  <span className="mb-5 self-start rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                    Featured
                  </span>
                ) : (
                  <span className="mb-5 block h-[26px]" aria-hidden="true" />
                )}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-indigo-500/10 text-brand-400 ring-1 ring-brand-500/20">
                  <Icon size={26} />
                </div>
                <h2 className="text-xl font-bold text-white">{product.title}</h2>
                <p className="mt-1 text-sm text-brand-400">{product.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={product.featured ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Request Demo
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
