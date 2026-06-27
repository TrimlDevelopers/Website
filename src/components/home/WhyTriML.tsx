import { CheckCircle2, ArrowRight, Smartphone, Monitor } from 'lucide-react'
import { whyTriML } from '../../data/content'
import Button from '../ui/Button'
import AnimateIn from '../ui/AnimateIn'

export default function WhyTriML() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn animation="fade-right" className="relative order-2 flex items-center justify-center lg:order-1">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Monitor size={18} className="text-brand-500" />
                  <span className="text-sm font-semibold text-navy-900">Responsive Design</span>
                </div>
                <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-brand-500/10 to-blue-100/50 sm:h-32" />
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="h-8 rounded bg-slate-100" />
                  <div className="h-8 rounded bg-slate-100" />
                  <div className="h-8 rounded bg-brand-500/20" />
                </div>
              </div>
              <div className="animate-float absolute -bottom-4 right-0 rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:-bottom-6 sm:-right-6">
                <Smartphone size={16} className="mx-auto text-brand-500" />
                <div className="mt-2 h-14 w-9 rounded-md bg-gradient-to-b from-brand-500/20 to-brand-500/5 sm:h-16 sm:w-10" />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-left" delay={100} className="order-1 lg:order-2">
            <p className="section-label mb-2">Why TriML Technologies?</p>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              We combine deep technical expertise with a client-first approach to deliver solutions
              that drive measurable business results.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {whyTriML.map((item, index) => (
                <AnimateIn key={item} delay={200 + index * 60} animation="fade-up" duration={500}>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="shrink-0 text-brand-500" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <Button href="#contact" className="w-full sm:w-auto">
                <span className="hidden sm:inline">Let&apos;s Build Something Amazing Together</span>
                <span className="sm:hidden">Get Started Today</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
