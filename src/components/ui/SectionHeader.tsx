import AnimateIn from './AnimateIn'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  dark?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <AnimateIn className={`mb-10 lg:mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {label && <p className={`section-label mb-3 ${dark ? 'text-brand-300' : ''}`}>{label}</p>}
      <h2
        className={`text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? 'text-gray-400' : 'text-slate-500'
          }`}
        >
          {description}
        </p>
      )}
    </AnimateIn>
  )
}
