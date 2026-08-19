/**
 * High-authority external references for E-E-A-T citations.
 * These are outbound links to trusted sources — not fabricated inbound backlinks.
 * Inbound link acquisition (directories, press, partners) is listed in PLACEHOLDERS.md.
 */
export const authorityLinks = [
  {
    id: 'moneysmart-property',
    label: 'ASIC MoneySmart — Investing in property',
    href: 'https://moneysmart.gov.au/investing/investing-in-property',
    blurb: 'Independent government guidance on property investment risks and considerations.',
  },
  {
    id: 'ato-rental',
    label: 'Australian Taxation Office — Rental properties',
    href: 'https://www.ato.gov.au/individuals-and-families/investments-and-assets/property-and-land/rental-properties',
    blurb: 'Official ATO information for investors holding Australian rental property.',
  },
  {
    id: 'abs-housing',
    label: 'Australian Bureau of Statistics — Housing',
    href: 'https://www.abs.gov.au/statistics/industry/building-and-construction',
    blurb: 'Official Australian housing and building statistics.',
  },
  {
    id: 'rba',
    label: 'Reserve Bank of Australia',
    href: 'https://www.rba.gov.au/',
    blurb: 'Monetary policy and financial-stability context for Australian buyers and investors.',
  },
  {
    id: 'fair-trading-nsw',
    label: 'NSW Fair Trading — Buying property',
    href: 'https://www.nsw.gov.au/housing-and-construction/buying-and-selling-property',
    blurb: 'Consumer protections and process guidance for buying property in NSW.',
  },
  {
    id: 'asic',
    label: 'Australian Securities and Investments Commission',
    href: 'https://asic.gov.au/',
    blurb: 'Australia’s corporate, markets and financial services regulator.',
  },
] as const

export type AuthorityLink = (typeof authorityLinks)[number]
