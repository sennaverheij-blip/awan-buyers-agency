import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { Phone } from 'lucide-react'
import { SITE } from '../../content/site'
import { captureAttributionFromUrl, initMetaPixel, track, trackPageView } from '../../lib/analytics'

/** Stripped chrome for Meta ads funnel — no main nav, no sticky site CTA. */
export function FunnelLayout() {
  const location = useLocation()

  useEffect(() => {
    initMetaPixel()
    captureAttributionFromUrl()
  }, [])

  useEffect(() => {
    trackPageView(location.pathname + location.search)
    track('funnel_path', { path: location.pathname })
  }, [location.pathname, location.search])

  return (
    <div className="flex min-h-screen flex-col bg-navy-950 text-white">
      <header className="border-b border-white/10 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:h-16 sm:px-6">
          <Link to="/go" className="flex flex-col leading-none" aria-label={`${SITE.name} funnel home`}>
            <span className="font-brand text-[1.4rem] tracking-[0.04em] text-white sm:text-[1.55rem]">
              {SITE.shortName}
            </span>
            <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-white/50">
              Buyers Agency
            </span>
          </Link>
          <a
            href={SITE.phone.href}
            className="inline-flex min-h-11 items-center gap-2 text-small text-white/80 hover:text-white"
            onClick={() => track('phone_click', { location: 'funnel-header' })}
          >
            <Phone className="size-4 text-gold-400" aria-hidden />
            <span className="hidden sm:inline">{SITE.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-5 text-center text-[0.75rem] text-white/45">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5">
          <span>
            © {SITE.year} {SITE.legalName}
          </span>
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link to="/" className="hover:text-white">
            Full site
          </Link>
        </div>
      </footer>
    </div>
  )
}
