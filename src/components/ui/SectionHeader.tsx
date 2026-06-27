interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {label && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-gray-400 sm:text-lg">
          {description}
        </p>
      )}
      {centered && <div className="section-divider mx-auto mt-8 max-w-xs" />}
    </div>
  )
}
