import { Wrench, Eye, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'
import AnimateIn from '../components/ui/AnimateIn'

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

      <section className="bg-surface-light py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-2">Our Products</p>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
                Platforms Built for Real-World Operations
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </AnimateIn>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {products.map((product, index) => {
              const Icon = iconMap[product.icon] ?? Wrench
              return (
                <AnimateIn key={product.id} delay={index * 100} animation="scale-in">
                  <div
                    className={`service-card card-hover flex h-full flex-col overflow-hidden rounded-2xl ${
                      product.featured ? 'ring-2 ring-brand-500/30' : ''
                    }`}
                  >
                    <div
                      className={`flex h-32 items-center justify-center bg-gradient-to-br p-6 ${
                        product.id === 'cmms'
                          ? 'from-brand-600/20 to-blue-100'
                          : product.id === 'ai-vision'
                            ? 'from-indigo-600/20 to-purple-100'
                            : 'from-cyan-600/20 to-blue-100'
                      }`}
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md text-brand-500">
                        <Icon size={30} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {product.featured && (
                        <span className="mb-3 self-start rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                          Featured
                        </span>
                      )}
                      <h2 className="text-xl font-bold text-navy-900">{product.title}</h2>
                      <p className="mt-1 text-sm text-brand-500">{product.subtitle}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                        {product.description}
                      </p>
                      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
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
                      <div className="mt-6">
                        <Button
                          href="/#contact"
                          variant={product.featured ? 'primary' : 'outline'}
                          className="w-full"
                        >
                          Request Demo
                        </Button>
                      </div>
                    </div>
                  </div>
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
