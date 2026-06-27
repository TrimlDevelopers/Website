import { Link } from 'react-router-dom'
import { Mail, Phone, Share2, Globe, MessageCircle } from 'lucide-react'
import { company, navLinks, services, products } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-indigo-500 text-sm font-extrabold text-surface-950">
                T
              </div>
              <span className="text-lg font-bold text-white">
                Tri<span className="text-brand-400">ML</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">{company.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
              {company.positioning}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 transition-colors hover:text-brand-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to="/products"
                    className="text-sm text-gray-400 transition-colors hover:text-brand-300"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400 sm:justify-start">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-300"
            >
              <Mail size={15} className="text-brand-500" />
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-300"
            >
              <Phone size={15} className="text-brand-500" />
              {company.phone}
            </a>
          </div>

          <div className="flex items-center gap-2">
            {[Share2, Globe, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 text-gray-500 transition-all hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-300"
                aria-label="Social link"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
