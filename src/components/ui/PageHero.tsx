import SectionHeader from './SectionHeader'

interface PageHeroProps {
  label: string
  title: string
  description: string
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <div className="hero-pattern border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeader label={label} title={title} description={description} />
      </div>
    </div>
  )
}
