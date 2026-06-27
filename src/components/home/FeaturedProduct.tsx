import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { products } from '../../data/content'
import Section from '../ui/Section'
import Button from '../ui/Button'

export default function FeaturedProduct() {
  const featured = products.find((p) => p.featured) ?? products[0]

  return (
    <Section>
      <div className="overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-surface-800/80 to-surface-950 glow">
        <div className="p-8 sm:p-10 lg:p-14 xl:p-16">
          <span className="mb-4 inline-flex w-fit items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
            Featured Product
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-2 text-brand-400">{featured.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-400">
            {featured.description}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-3xl">
            {featured.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">Request Demo</Button>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
            >
              View all products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
