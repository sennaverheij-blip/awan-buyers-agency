import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks, SITE } from '../../content/site'
import { track } from '../../lib/analytics'
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

  const close = () => setOpen(false)
  const solid = !overHero || scrolled || open || minimal

  const mobileMenu =
    !minimal &&
    open &&
    mounted &&
    createPortal(
      <div
        id="mobile-nav"
        className="fixed inset-0 z-[100] flex flex-col bg-navy-950 pt-[env(safe-area-inset-top)] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="container-site flex h-16 shrink-0 items-center justify-between sm:h-[4.25rem]">
          <Link
            to="/"
            onClick={close}
            className="flex flex-col leading-none"
            aria-label={`${SITE.name} home`}
          >
            <span className="font-brand text-[1.55rem] tracking-[0.04em] text-white">
              {SITE.shortName}
            </span>
            <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Buyers Agency
            </span>
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
        <a
          href={SITE.phone.href}
          className="flex min-h-14 shrink-0 items-center gap-3 border-y border-white/10 px-5 text-body text-white"
          onClick={() => track('phone_click', { location: 'nav-sheet' })}
        >
          <Phone className="size-5 text-gold-400" aria-hidden />
          {SITE.phone.display}
        </a>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              className="flex min-h-12 items-center rounded-btn px-4 text-lg font-medium text-white hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="shrink-0 border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
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
        <Link
          to="/"
          onClick={close}
          className="group flex flex-col leading-none"
          aria-label={`${SITE.name} home`}
        >
          <span className="font-brand text-[1.55rem] tracking-[0.04em] text-white sm:text-[1.75rem] lg:text-[1.9rem]">
            {SITE.shortName}
          </span>
          <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-white/55 group-hover:text-gold-400 sm:text-[0.625rem] sm:tracking-[0.2em]">
            Buyers Agency
          </span>
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
      {mobileMenu}
    </header>
  )
}
