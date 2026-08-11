import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, SITE } from '../../content/site'
import { track } from '../../lib/analytics'
import { BrandMark } from '../ui/BrandMark'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

type Props = {
  minimal?: boolean
  overHero?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Navbar({ minimal = false, overHero = false, onOpenChange }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    onOpenChange?.(open)
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const close = () => setOpen(false)
  const solid = !overHero || scrolled || open || minimal

  const mobileMenu =
    !minimal &&
    open &&
    mounted &&
    createPortal(
      <div
        id="mobile-nav"
        className="fixed inset-0 z-[200] flex flex-col bg-navy-950 text-white lg:hidden"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5 sm:h-[4.25rem]">
          <Link to="/" onClick={close} aria-label={`${SITE.name} home`}>
            <BrandMark size="sm" subtitleClassName="text-white/60" />
          </Link>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-btn text-white"
            aria-label="Close menu"
            onClick={close}
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Single scroll column — avoids flex-1 collapse that hid links on mobile Safari */}
        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <a
            href={SITE.phone.href}
            className="flex min-h-14 items-center gap-3 border-y border-white/15 text-[1.0625rem] font-medium text-white"
            onClick={() => track('phone_click', { location: 'nav-sheet' })}
          >
            <Phone className="size-5 shrink-0 text-gold-400" aria-hidden />
            <span className="text-white">{SITE.phone.display}</span>
          </a>

          <nav className="mt-4 flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={close}
                className="flex min-h-14 items-center border-b border-white/10 text-xl font-semibold text-white"
                style={{ color: '#ffffff' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Button
              to="/book"
              variant="primary"
              className="w-full text-base"
              onClick={() => {
                close()
                track('cta_book_click', { location: 'nav-sheet' })
              }}
            >
              Book a Free Call
            </Button>
            <p className="mt-4 text-center text-small text-white/55">
              Free 20-minute Strategy Call · No obligation
            </p>
          </div>
        </div>
      </div>,
      document.body,
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300',
        solid ? 'bg-navy-950/95 shadow-[0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[4.25rem] lg:h-[4.75rem]">
        <Link to="/" onClick={close} className="group" aria-label={`${SITE.name} home`}>
          <BrandMark subtitleClassName="group-hover:text-gold-400" />
        </Link>

        {minimal ? (
          <a
            href={SITE.phone.href}
            className="inline-flex min-h-11 items-center gap-2 text-small text-white/80 hover:text-white"
            onClick={() => track('phone_click', { location: 'nav-minimal' })}
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden sm:inline">{SITE.phone.display}</span>
          </a>
        ) : (
          <>
            <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-[0.8125rem] font-medium tracking-wide text-white/85 transition-colors hover:text-white',
                    location.pathname === link.href && 'text-white',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-5 lg:flex">
              <a
                href={SITE.phone.href}
                className="text-[0.8125rem] font-medium text-white/70 hover:text-white"
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
              className="relative z-[60] flex size-11 items-center justify-center rounded-btn text-white lg:hidden"
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
      {mobileMenu}
    </header>
  )
}
