import { AlertTriangle, Link2Off, Clock, BarChart3, TrendingDown, MonitorX } from 'lucide-react'
import { problems } from '../../data/content'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

const icons = [AlertTriangle, Link2Off, Clock, BarChart3, TrendingDown, MonitorX]

export default function ProblemsWeSolve() {
  return (
    <Section bordered muted>
      <SectionHeader
        label="Problems We Solve"
        title="Turn Operational Challenges Into Competitive Advantages"
        description="We identify the bottlenecks holding your business back and build intelligent solutions to eliminate them."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {problems.map((problem, index) => {
          const Icon = icons[index] ?? AlertTriangle
          return (
            <div
              key={problem.title}
              className="card-hover flex h-full gap-4 rounded-2xl border border-white/[0.06] bg-surface-950/50 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20">
                <Icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug text-white">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {problem.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
