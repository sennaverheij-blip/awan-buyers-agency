/**
 * PLACEHOLDER_* — do not invent real business facts.
 * Supply real values and clear the PLACEHOLDER_ prefix in PLACEHOLDERS.md.
 */

export const PLACEHOLDER_LICENCE = 'PLACEHOLDER_LICENCE'
export const PLACEHOLDER_ABN = 'PLACEHOLDER_ABN'
export const PLACEHOLDER_MEMBERSHIPS = [
  'PLACEHOLDER_MEMBERSHIP_REBAA',
  'PLACEHOLDER_MEMBERSHIP_PIPA',
] as const

export const PLACEHOLDER_AREAS = [
  'Parramatta',
  'Western Sydney',
  'Inner West',
  'North Shore',
  'Eastern Suburbs',
  'Hills District',
] as const

/** Trust-bar stats — replace with verified figures before launch. */
export const PLACEHOLDER_STATS = [
  { value: null as number | null, suffix: 'm+', label: 'in property purchased', display: 'PLACEHOLDER_STATS_PURCHASED' },
  { value: null as number | null, suffix: '+', label: 'homes secured', display: 'PLACEHOLDER_STATS_HOMES' },
  { value: null as number | null, suffix: 'k', label: 'average saved off asking', display: 'PLACEHOLDER_STATS_SAVED' },
] as const

export const PLACEHOLDER_REVIEWS = {
  rating: '5.0',
  count: '11',
  url: 'https://share.google/v0fbrVSdIurPAS4ho',
} as const

/** @deprecated use GOOGLE_BUSINESS from testimonials.ts — kept for TrustBar compat */
export const GOOGLE_REVIEWS = PLACEHOLDER_REVIEWS

export const PLACEHOLDER_LOGOS: { name: string; src: string }[] = []

export const FORM_ENDPOINT = 'PLACEHOLDER_FORM_ENDPOINT'
export const GUIDE_FORM_ENDPOINT = 'PLACEHOLDER_GUIDE_FORM_ENDPOINT'
/** Quiz nurture / lead POST — falls back to GUIDE_FORM_ENDPOINT if unset */
export const QUIZ_FORM_ENDPOINT = 'PLACEHOLDER_QUIZ_FORM_ENDPOINT'
export const PLACEHOLDER_ASSET_PLAYBOOK = 'PLACEHOLDER_ASSET'

export const ANALYTICS_ID = 'ANALYTICS_PLACEHOLDER'
/** Meta (Facebook) Pixel ID — required for ads funnel optimization */
export const META_PIXEL_ID = 'PLACEHOLDER_META_PIXEL_ID'

export const PLACEHOLDER_SOCIALS = {
  facebook: 'PLACEHOLDER_FACEBOOK_URL',
  instagram: 'PLACEHOLDER_INSTAGRAM_URL',
  linkedin: 'PLACEHOLDER_LINKEDIN_URL',
} as const

export const PLACEHOLDER_HERO_IMAGE = 'PLACEHOLDER_HERO_PHOTO'

/** Case-study narrative fields not in properties.ts */
export const PLACEHOLDER_CASES_NOTE =
  'Asking/guide vs purchase price and off-market flags need verification — current results use purchase price, valuation and growth from properties.ts only.'
