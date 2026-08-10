export type ServiceTier = {
  id: string
  name: string
  promise: string
  popular?: boolean
  whoFor: string
  inclusions: string[]
  comparison: Record<string, string | boolean>
}

export const serviceTiers: ServiceTier[] = [
  {
    id: 'full-search',
    name: 'Full Search & Acquisition',
    promise: 'From brief to keys — we run the entire purchase.',
    popular: true,
    whoFor: 'Buyers who want a complete search across on-market and off-market stock, with weekly reporting and negotiation through to settlement.',
    inclusions: [
      'Discovery call & written buying brief',
      'On-market and off-market search',
      'Due diligence on every shortlisted property',
      'Negotiation or auction bidding through to settlement',
    ],
    comparison: {
      'Buying brief & strategy': true,
      'On-market search': true,
      'Off-market access': true,
      'Inspections & due diligence': true,
      'Negotiation': true,
      'Auction bidding': true,
      'Weekly reporting': true,
      'Settlement coordination': true,
    },
  },
  {
    id: 'auction',
    name: 'Auction Bidding',
    promise: 'A calm professional in the room when it counts.',
    whoFor: 'Buyers who have found the property and need an experienced bidder — strategy, limit discipline and execution on auction day.',
    inclusions: [
      'Pre-auction strategy session',
      'Comparable sales & limit setting',
      'On-the-day bidding representation',
      'Post-auction follow-up if passed in',
    ],
    comparison: {
      'Buying brief & strategy': 'Auction-focused',
      'On-market search': false,
      'Off-market access': false,
      'Inspections & due diligence': 'Review only',
      'Negotiation': 'If passed in',
      'Auction bidding': true,
      'Weekly reporting': false,
      'Settlement coordination': 'Handover support',
    },
  },
  {
    id: 'negotiate',
    name: 'Evaluate & Negotiate',
    promise: 'You found it. We stress-test it and close it.',
    whoFor: 'Buyers who have a property in mind and want independent valuation of risk, price and terms — then negotiation to secure it.',
    inclusions: [
      'Independent property evaluation',
      'Price and risk advice',
      'Negotiation with the selling agent',
      'Contract condition guidance through exchange',
    ],
    comparison: {
      'Buying brief & strategy': 'Scoped to the asset',
      'On-market search': false,
      'Off-market access': false,
      'Inspections & due diligence': true,
      'Negotiation': true,
      'Auction bidding': false,
      'Weekly reporting': false,
      'Settlement coordination': 'Handover support',
    },
  },
]

export const comparisonRows = [
  'Buying brief & strategy',
  'On-market search',
  'Off-market access',
  'Inspections & due diligence',
  'Negotiation',
  'Auction bidding',
  'Weekly reporting',
  'Settlement coordination',
] as const
