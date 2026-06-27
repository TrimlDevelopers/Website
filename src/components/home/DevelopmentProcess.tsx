import { processSteps } from '../../data/content'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

export default function DevelopmentProcess() {
  return (
    <Section>
      <SectionHeader
        label="Process"
        title="Our Development Process"
        description="A structured, agile approach that keeps you informed and delivers results on time."
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/20 to-indigo-500/10 text-base font-bold text-brand-300 ring-1 ring-brand-500/20">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-2 hidden h-full w-px flex-1 bg-gradient-to-b from-brand-500/30 to-transparent md:block" />
                )}
              </div>
              <div className="card-hover flex-1 rounded-2xl border border-white/[0.06] glass-card p-6">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
