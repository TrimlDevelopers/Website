import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../../data/content'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="header-enter fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                  isActive ? 'text-brand-500' : 'text-slate-600 hover:text-brand-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="#contact">
            <span className="hidden xl:inline">Get in Touch</span>
            <span className="xl:hidden">Contact</span>
            <ArrowRight size={16} />
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/30 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3.5 text-base font-medium ${
                      isActive ? 'bg-brand-50 text-brand-500' : 'text-slate-700 active:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 border-t border-slate-100 pt-4">
                <Button href="#contact" className="w-full" onClick={() => setMobileOpen(false)}>
                  Get in Touch
                  <ArrowRight size={16} />
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
