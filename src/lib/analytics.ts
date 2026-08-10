import { ANALYTICS_ID } from '../content/placeholders'

type Props = Record<string, string | number | boolean | undefined>

export function track(event: string, props?: Props) {
  if (!ANALYTICS_ID || ANALYTICS_ID === 'ANALYTICS_PLACEHOLDER') {
    if (import.meta.env.DEV) {
      console.debug('[analytics]', event, props ?? {})
    }
    return
  }

  // Wire GA4 / Plausible here when ANALYTICS_ID is configured.
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, options?: { props?: Props }) => void
  }

  if (typeof w.gtag === 'function') {
    w.gtag('event', event, props)
  }
  if (typeof w.plausible === 'function') {
    w.plausible(event, { props })
  }
}
