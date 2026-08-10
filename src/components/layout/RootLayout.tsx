import { Outlet, useLocation } from 'react-router'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { StickyMobileCTA } from './StickyMobileCTA'
import { CallbackProvider } from './CallbackContext'

export function RootLayout() {
  const location = useLocation()
  const isBook = location.pathname === '/book'
  const overHero = location.pathname === '/'

  return (
    <CallbackProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar minimal={isBook} overHero={overHero} />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer legalOnly={isBook} />
        {!isBook && <StickyMobileCTA />}
      </div>
    </CallbackProvider>
  )
}
