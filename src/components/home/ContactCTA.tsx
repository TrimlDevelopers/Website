import { useState, type FormEvent } from 'react'
import { Mail, Phone, Globe, MapPin, Send, ArrowRight } from 'lucide-react'
import { company } from '../../data/content'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section id="contact" className="dark-section py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <AnimateIn animation="fade-right">
            <div>
              <p className="section-label mb-2 text-brand-300">Contact Us</p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Let&apos;s Build the Future Together
              </h2>
              <p className="mt-4 text-gray-400">
                Ready to transform your business? Reach out and we&apos;ll schedule a free
                consultation to discuss your project.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Phone, text: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
                  { icon: Mail, text: company.email, href: `mailto:${company.email}` },
                  { icon: Globe, text: company.website, href: `https://${company.website}` },
                  { icon: MapPin, text: company.location, href: undefined },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                      <Icon size={18} />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-gray-300 hover:text-white">
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-300">{text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                  Request a Consultation
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={150}>
            <div className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-500/5 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                  <p className="mt-2 text-sm text-gray-400">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        className="w-full rounded-lg border border-white/10 bg-navy-900/60 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-500/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-white/10 bg-navy-900/60 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-500/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-gray-300">
                      Company Name
                    </label>
                    <input
                      id="company"
                      className="w-full rounded-lg border border-white/10 bg-navy-900/60 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-500/50"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">
                      Project Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-white/10 bg-navy-900/60 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-500/50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              )}
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
