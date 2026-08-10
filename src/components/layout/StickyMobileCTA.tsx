import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Phone, X } from 'lucide-react'
import { SITE } from '../../content/site'
import { track } from '../../lib/analytics'
import { Button } from '../ui/Button'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const location = useLocation()
  const hideOnBook = location.pathname === '/book'

  useEffect(() => {
    if (dismissed || hideOnBook) return
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const threshold = hero ? hero.offsetHeight * 0.7 : 400
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed, hideOnBook])

  if (dismissed || hideOnBook || !visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-950/95 p-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={SITE.phone.href}
          className="flex size-11 shrink-0 items-center justify-center rounded-btn border border-navy-700 text-gold-400"
          aria-label={`Call ${SITE.phone.display}`}
          onClick={() => track('phone_click', { location: 'sticky' })}
        >
          <Phone className="size-5" />
        </a>
        <Button
          to="/book"
          variant="primary"
          className="min-h-11 flex-1"
          onClick={() => track('cta_book_click', { location: 'sticky' })}
        >
          Free discovery call
        </Button>
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-btn text-white/70"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  )
}
