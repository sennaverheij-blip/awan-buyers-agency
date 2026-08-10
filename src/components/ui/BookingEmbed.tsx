import { useEffect, useRef, useState } from 'react'
import { BOOKING_URL } from '../../content/site'
import { track } from '../../lib/analytics'
import { Button } from './Button'
import { cn } from '../../lib/utils'

type Props = {
  className?: string
  /** If true, load Calendly immediately (e.g. /book page). */
  autoLoad?: boolean
}

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void }
  }
}

export function BookingEmbed({ className, autoLoad = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(autoLoad)

  useEffect(() => {
    if (!shouldLoad || loaded) return

    const existing = document.querySelector('script[data-calendly]')
    const init = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: BOOKING_URL,
          parentElement: containerRef.current,
        })
        setLoaded(true)
        track('booking_embed_loaded')
      }
    }

    if (existing && window.Calendly) {
      init()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendly = 'true'
    script.onload = init
    document.body.appendChild(script)

    if (!document.querySelector('link[data-calendly-css]')) {
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      link.dataset.calendlyCss = 'true'
      document.head.appendChild(link)
    }
  }, [shouldLoad, loaded])

  return (
    <div className={cn('w-full', className)}>
      {!shouldLoad && (
        <div className="flex flex-col items-center justify-center rounded-card border border-navy-800 bg-navy-900 px-6 py-16 text-center">
          <p className="text-body text-cream-100/80">
            Load the scheduling calendar when you are ready.
          </p>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => setShouldLoad(true)}
          >
            Show booking calendar
          </Button>
        </div>
      )}
      <div
        ref={containerRef}
        className={cn('calendly-inline-widget min-h-[700px]', !shouldLoad && 'hidden')}
        data-url={BOOKING_URL}
      />
    </div>
  )
}
