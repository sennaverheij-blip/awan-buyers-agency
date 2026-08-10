import { Helmet } from 'react-helmet-async'
import { SITE } from '../content/site'
import { PLACEHOLDER_LICENCE, PLACEHOLDER_AREAS } from '../content/placeholders'
import { getPageMeta } from '../content/seo'

type Props = {
  path: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  /** Ads funnel pages — keep out of organic index */
  noindex?: boolean
}

export function Seo({ path, jsonLd, noindex = false }: Props) {
  const meta = getPageMeta(path)
  const canonical = `${SITE.url}${path === '/' ? '' : path}`
  const org = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone.display,
    email: SITE.email.display,
    image: `${SITE.url}/og.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: 'AU',
    },
    areaServed: PLACEHOLDER_AREAS.map((a) => ({ '@type': 'Place', name: a })),
    slogan: SITE.tagline,
    identifier: PLACEHOLDER_LICENCE,
  }

  const graph = jsonLd ? [org, ...(Array.isArray(jsonLd) ? jsonLd : [jsonLd])] : [org]

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE.url}/og.png`} />
      <meta property="og:locale" content="en_AU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${SITE.url}/og.png`} />
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  )
}
