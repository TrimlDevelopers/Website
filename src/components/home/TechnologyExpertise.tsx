import { techStack } from '../../data/content'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const categories: { key: keyof typeof techStack; label: string; accent: string }[] = [
  { key: 'frontend', label: 'Frontend', accent: 'from-cyan-500/10 to-transparent ring-cyan-500/20' },
  { key: 'backend', label: 'Backend', accent: 'from-emerald-500/10 to-transparent ring-emerald-500/20' },
  { key: 'database', label: 'Database', accent: 'from-amber-500/10 to-transparent ring-amber-500/20' },
  { key: 'cloud', label: 'Cloud & DevOps', accent: 'from-blue-500/10 to-transparent ring-blue-500/20' },
  { key: 'ai', label: 'AI & Analytics', accent: 'from-purple-500/10 to-transparent ring-purple-500/20' },
]

export default function TechnologyExpertise() {
  return (
    <Section bordered muted>
      <SectionHeader
        label="Technology"
        title="Built With Modern, Proven Technologies"
        description="We leverage industry-leading tools and frameworks to deliver robust, scalable, and future-proof solutions."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`flex h-full flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-b ${cat.accent} p-5 ring-1`}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-300">
              {cat.label}
            </h3>
            <div className="flex flex-1 flex-wrap content-start gap-2">
              {techStack[cat.key].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-surface-950/70 px-2.5 py-1.5 text-xs font-medium text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
