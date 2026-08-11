import { Helmet } from 'react-helmet-async'
import { SITE } from '../content/site'
import { PLACEHOLDER_LICENCE, PLACEHOLDER_AREAS } from '../content/placeholders'
import { getPageMeta } from '../content/seo'
import { GOOGLE_BUSINESS, featuredTestimonials } from '../content/testimonials'

type Props = {
  path: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  /** Ads funnel pages — keep out of organic index */
  noindex?: boolean
}

const OG_IMAGE = `${SITE.url}/og.png`
const OG_IMAGE_ALT = `${SITE.name} — ${SITE.tagline}`

export function Seo({ path, jsonLd, noindex = false }: Props) {
  const meta = getPageMeta(path)
  const canonical = `${SITE.url}${path === '/' ? '' : path}`

  const org: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone.display,
    email: SITE.email.display,
    image: [OG_IMAGE, `${SITE.url}/icon-512.png`],
    logo: `${SITE.url}/icon-512.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Office: Parramatta — approximate for LocalBusiness (not the Maps pin centroid)
      latitude: -33.8151,
      longitude: 151.0011,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Greater Sydney' },
      { '@type': 'Country', name: 'Australia' },
      ...PLACEHOLDER_AREAS.map((a) => ({ '@type': 'Place', name: a })),
    ],
    slogan: SITE.tagline,
    priceRange: '$$',
    sameAs: [GOOGLE_BUSINESS.mapsUrl, GOOGLE_BUSINESS.shareUrl],
    identifier: PLACEHOLDER_LICENCE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(GOOGLE_BUSINESS.rating),
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(GOOGLE_BUSINESS.reviewCount),
    },
    review: featuredTestimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: t.name,
      },
    })),
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: meta.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-AU',
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-AU',
  }

  const extras = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
  const graph = [org, website, webpage, ...extras]

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="keywords"
        content="buyers agent Sydney, property investment Australia, buyers advocate, off-market property, Muslim property investors, sharia compliant finance, Awan Buyers Agency, Parramatta buyers agent"
      />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="author" content={SITE.name} />
      <meta name="theme-color" content="#0B1420" />
      <meta name="application-name" content={SITE.name} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  )
}
