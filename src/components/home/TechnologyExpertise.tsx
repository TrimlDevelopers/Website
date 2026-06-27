import { techStack } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import AnimateIn from '../ui/AnimateIn'

export default function TechnologyExpertise() {
  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Technologies We Use"
          title="Modern Technologies for Modern Solutions"
          description="We leverage industry-leading tools and frameworks to deliver robust, scalable solutions."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {techStack.map((tech, index) => (
            <AnimateIn key={tech} delay={index * 70} animation="scale-in" duration={500}>
              <div className="flex h-12 min-w-[6.5rem] flex-1 items-center justify-center rounded-xl border border-slate-200 bg-surface-light px-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-brand-50 hover:text-brand-600 hover:shadow-md sm:h-14 sm:min-w-[7rem] sm:flex-none sm:px-6">
                {tech}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
