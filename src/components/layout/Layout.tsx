import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Header />
      <main className="flex-1 pt-[4.25rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
