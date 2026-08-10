import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, SITE } from '../../content/site'
import { track } from '../../lib/analytics'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

type Props = {
  minimal?: boolean
  overHero?: boolean
}

export function Navbar({ minimal = false, overHero = false }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const solid = !overHero || scrolled || open || minimal
  const barClass = solid
    ? 'bg-navy-900 shadow-[var(--shadow-soft)]'
    : 'bg-transparent'

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-300', barClass)}>
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          to="/"
          onClick={close}
          className="group flex flex-col leading-none"
          aria-label={`${SITE.name} home`}
        >
          <span className="font-display text-2xl tracking-wide text-white">
            {SITE.shortName}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold-400">
            Buyers Agency
          </span>
        </Link>

        {minimal ? (
          <a
            href={SITE.phone.href}
            className="inline-flex min-h-11 items-center gap-2 text-small text-cream-100 hover:text-gold-400"
            onClick={() => track('phone_click', { location: 'nav-minimal' })}
          >
            <Phone className="size-4" aria-hidden />
            {SITE.phone.display}
          </a>
        ) : (
          <>
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-small font-medium text-cream-100/85 transition-colors hover:text-white',
                    location.pathname === link.href && 'text-gold-400',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={SITE.phone.href}
                className="text-small text-cream-100/80 hover:text-gold-400"
                onClick={() => track('phone_click', { location: 'nav' })}
              >
                {SITE.phone.display}
              </a>
              <Button
                to="/book"
                variant="primary"
                onClick={() => track('cta_book_click', { location: 'nav' })}
              >
                Book a Free Call
              </Button>
            </div>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-btn text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </>
        )}
      </div>

      {!minimal && open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-navy-900 lg:hidden"
        >
          <a
            href={SITE.phone.href}
            className="flex min-h-14 items-center gap-3 border-b border-navy-800 px-4 text-body text-cream-100"
            onClick={() => track('phone_click', { location: 'nav-sheet' })}
          >
            <Phone className="size-5 text-gold-400" aria-hidden />
            {SITE.phone.display}
          </a>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close}
                className="flex min-h-12 items-center rounded-btn px-4 text-lg text-white hover:bg-navy-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-navy-800 p-4">
            <Button
              to="/book"
              variant="primary"
              className="w-full"
              onClick={() => {
                close()
                track('cta_book_click', { location: 'nav-sheet' })
              }}
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
