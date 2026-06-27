import SectionHeader from './SectionHeader'

interface PageHeroProps {
  label: string
  title: string
  description: string
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/5 grid-bg">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl animate-pulse-glow" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeader label={label} title={title} description={description} />
      </div>
    </div>
  )
}
