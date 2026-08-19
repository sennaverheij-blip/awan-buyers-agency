import { ANALYTICS_ID, META_PIXEL_ID } from '../content/placeholders'

type Props = Record<string, string | number | boolean | undefined>

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const

const UTM_STORAGE_KEY = 'awan_attribution'

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue?: unknown[]
      loaded?: boolean
      version?: string
    }
    _fbq?: unknown
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, options?: { props?: Props }) => void
  }
}

/** Persist first-touch UTM / click IDs from the URL for the session. */
export function captureAttributionFromUrl(search = typeof window !== 'undefined' ? window.location.search : '') {
  if (typeof window === 'undefined') return {}
  try {
    const params = new URLSearchParams(search)
    const next: Record<string, string> = {}
    for (const key of UTM_KEYS) {
      const value = params.get(key)
      if (value) next[key] = value
    }
    if (Object.keys(next).length === 0) return getAttribution()
    const existing = getAttribution()
    // First-touch wins for existing keys; add new keys from this hit
    const merged = { ...next, ...existing }
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged))
    return merged
  } catch {
    return {}
  }
}

export function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Record<string, string>
  } catch {
    return {}
  }
}

export function initMetaPixel() {
  if (typeof window === 'undefined') return
  if (!META_PIXEL_ID || META_PIXEL_ID.startsWith('PLACEHOLDER')) return
  if (typeof window.fbq === 'function') return

  const fbq = function (...args: unknown[]) {
    const self = fbq as NonNullable<Window['fbq']>
    if (self.callMethod) self.callMethod(...args)
    else self.queue?.push(args)
  } as NonNullable<Window['fbq']>

  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  const first = document.getElementsByTagName('script')[0]
  first?.parentNode?.insertBefore(script, first)

  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

export function trackPageView(path: string) {
  captureAttributionFromUrl()
  if (typeof window.fbq === 'function' && META_PIXEL_ID && !META_PIXEL_ID.startsWith('PLACEHOLDER')) {
    window.fbq('track', 'PageView')
  }
  track('page_view', { path, ...getAttribution() })
}

/**
 * Fire product analytics + Meta Pixel when configured.
 * Meta standard events used for ads optimization:
 * ViewContent, Lead, CompleteRegistration, Schedule, Contact, InitiateCheckout
 */
export function track(event: string, props?: Props) {
  const attribution = getAttribution()
  const payload = { ...attribution, ...props }

  const analyticsReady = ANALYTICS_ID && ANALYTICS_ID !== 'ANALYTICS_PLACEHOLDER'
  const metaReady = META_PIXEL_ID && !META_PIXEL_ID.startsWith('PLACEHOLDER')

  if (!analyticsReady && !metaReady && import.meta.env.DEV) {
    console.debug('[analytics]', event, payload)
  }

  const w = window

  if (typeof w.gtag === 'function' && analyticsReady) {
    w.gtag('event', event, payload)
  }
  if (typeof w.plausible === 'function') {
    w.plausible(event, { props: payload })
  }

  if (typeof w.fbq === 'function' && metaReady) {
    const metaMap: Record<string, string> = {
      funnel_landing_view: 'ViewContent',
      funnel_book_view: 'ViewContent',
      funnel_quiz_start: 'ViewContent',
      funnel_quiz_complete: 'CompleteRegistration',
      funnel_lead_submit: 'Lead',
      guide_form_submit: 'Lead',
      callback_form_submit: 'Lead',
      booking_page_view: 'Schedule',
      booking_embed_loaded: 'Schedule',
      phone_click: 'Contact',
      cta_book_click: 'InitiateCheckout',
    }
    const standard = metaMap[event]
    if (standard) {
      w.fbq('track', standard, payload)
    } else {
      w.fbq('trackCustom', event, payload)
    }
  }
}
