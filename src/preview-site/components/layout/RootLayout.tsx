import { useEffect, useState } from 'react'
import { Outlet, useLocation, stripPreviewBase } from 'preview-router'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { StickyMobileCTA } from './StickyMobileCTA'
import { CallbackProvider } from './CallbackContext'
import { captureAttributionFromUrl, initMetaPixel } from '../../lib/analytics'

export function RootLayout() {
  const location = useLocation()
  const previewPathname = stripPreviewBase(location.pathname)
  const isBook = previewPathname === '/book'
  const overHero = previewPathname === '/'
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    initMetaPixel()
    captureAttributionFromUrl()
  }, [])

  useEffect(() => {
    captureAttributionFromUrl(location.search)
  }, [location.search])

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
