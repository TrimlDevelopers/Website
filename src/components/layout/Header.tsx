import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import Button from '../ui/Button'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-surface-950/85 backdrop-blur-xl">
      <div className="mx-auto grid h-[4.25rem] max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 justify-self-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-cyan-400 to-indigo-500 text-sm font-extrabold text-surface-950 shadow-lg shadow-brand-500/20">
            T
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Tri<span className="text-brand-400">ML</span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-300'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1.125rem] h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-indigo-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <Button href="#contact">Get Started</Button>
        </div>

        <button
          type="button"
          className="col-start-3 justify-self-end rounded-xl p-2.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-surface-950 px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-300'
                      : 'text-gray-300 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5">
              <Button href="#contact" className="w-full" onClick={() => setMobileOpen(false)}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
