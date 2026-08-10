import { useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { StickyMobileCTA } from './StickyMobileCTA'
import { CallbackProvider } from './CallbackContext'

export function RootLayout() {
  const location = useLocation()
  const isBook = location.pathname === '/book'
  const overHero = location.pathname === '/'
  const [navOpen, setNavOpen] = useState(false)

  return (
    <CallbackProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar minimal={isBook} overHero={overHero} onOpenChange={setNavOpen} />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer legalOnly={isBook} />
        {!isBook && !navOpen && <StickyMobileCTA />}
      </div>
    </CallbackProvider>
  )
}
