import SectionHeader from './SectionHeader'

interface PageHeroProps {
  label: string
  title: string
  description: string
  centered?: boolean
}

export default function PageHero({
  label,
  title,
  description,
  centered = false,
}: PageHeroProps) {
  return (
    <div className="hero-pattern border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SectionHeader
          label={label}
          title={title}
          description={description}
          centered={centered}
          className={`mb-0 ${centered ? 'max-w-3xl' : 'max-w-2xl'}`}
        />
      </div>
    </div>
  )
}
