import {
  ArrowRight,
  Award,
  Clock,
  Headphones,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { whyTriML } from '../../data/content'
import AnimateIn from '../ui/AnimateIn'
import Button from '../ui/Button'
import WhyTriMLVisual from '../ui/WhyTriMLVisual'

const iconMap = {
  users: Users,
  sparkles: Sparkles,
  trending: TrendingUp,
  clock: Clock,
  headphones: Headphones,
  award: Award,
} as const

export default function WhyTriML() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <AnimateIn animation="fade-right" className="order-2 lg:order-1">
            <WhyTriMLVisual />
          </AnimateIn>

          <AnimateIn animation="fade-left" delay={100} className="order-1 lg:order-2">
            <p className="section-label mb-2">Why TriML Technologies?</p>
            <h2 className="text-2xl font-bold leading-snug text-navy-900 sm:text-3xl lg:text-4xl">
              Your Trusted{' '}
              <span className="text-brand-500">Technology Partner</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              We combine deep technical expertise with a client-first approach to deliver solutions
              that drive measurable business results.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {whyTriML.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Users
                return (
                  <AnimateIn
                    key={item.title}
                    delay={160 + index * 60}
                    animation="fade-up"
                    duration={500}
                    className="h-full"
                  >
                    <div className="group flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-brand-500/30 hover:shadow-md hover:shadow-brand-500/5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon size={17} />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-sm font-semibold leading-snug text-navy-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>

            <div className="mt-8">
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
