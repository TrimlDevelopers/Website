import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { company } from '../../data/content'
import Section from '../ui/Section'
import Button from '../ui/Button'

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact" className="pb-20 lg:pb-28">
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-800/90 to-surface-950 glow">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
              Contact Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Operations?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-400">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a
              tailored plan.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: company.email, href: `mailto:${company.email}` },
                { icon: Phone, label: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
                { icon: MapPin, label: 'Global — Remote First', href: undefined },
              ].map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-surface-950/40 px-4 py-3 text-gray-300 transition-colors hover:border-brand-500/20 hover:text-brand-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm">{label}</span>
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-surface-950/40 px-4 py-3 text-gray-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm">{label}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-white/5 bg-surface-950/50 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
                  <Send size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                <p className="mt-2 max-w-xs text-sm text-gray-400">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-surface-900/80 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-surface-900/80 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-300">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-white/10 bg-surface-900/80 px-4 py-3 text-sm text-white outline-none transition-all focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option value="custom-software">Custom Software Development</option>
                    <option value="website">Website Development</option>
                    <option value="microservices">Microservices Development</option>
                    <option value="ai">AI Solutions</option>
                    <option value="automation">Business Automation</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-surface-900/80 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
