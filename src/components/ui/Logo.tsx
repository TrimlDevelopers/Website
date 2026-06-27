import { useId } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
}

export default function Logo({ light = false }: LogoProps) {
  const gradId = useId()

  return (
    <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="8" fill={`url(#${gradId})`} />
        <path
          d="M10 24V12h4.5l3 6 3-6H25v12h-3.5v-7l-3.5 6h-2l-3.5-6v7H10z"
          fill="white"
        />
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="36" y2="36">
            <stop stopColor="#007bff" />
            <stop offset="1" stopColor="#0056b3" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`truncate text-base font-bold tracking-tight sm:text-lg ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        Tri<span className="text-brand-500">ML</span>{' '}
        <span
          className={`hidden font-semibold sm:inline ${
            light ? 'text-gray-300' : 'text-slate-600'
          }`}
        >
          Technologies
        </span>
      </span>
    </Link>
  )
}
