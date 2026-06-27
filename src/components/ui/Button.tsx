import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white'

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
    'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/25',
  secondary: 'bg-navy-800 text-white hover:bg-navy-700',
  outline:
    'border-2 border-brand-500 text-brand-500 bg-transparent hover:bg-brand-50',
  white:
    'border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${className}`

  if (href) {
    const isHash = href.startsWith('#')
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')

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
