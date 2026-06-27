import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-cyan-400 text-surface-950 font-semibold shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:brightness-110',
  secondary:
    'bg-surface-700/80 text-white border border-white/10 hover:bg-surface-600 hover:border-white/20',
  outline:
    'border border-brand-500/40 text-brand-300 bg-brand-500/5 hover:bg-brand-500/15 hover:border-brand-400/60',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`

  if (href) {
    const isHash = href.startsWith('#')
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')

    if (!isExternal && !isHash) {
      return (
        <Link to={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
