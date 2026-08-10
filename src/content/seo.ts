export type PageMeta = {
  path: string
  title: string
  description: string
  heading: string
  body: string
}

const city = 'Sydney'
const brand = 'Awan Buyers Agency'

export const pageMeta: PageMeta[] = [
  {
    path: '/',
    title: `Buyers Agent Sydney | 5.0★ Google Reviews | Awan Buyers Agency`,
    description:
      'Independent buyers agent in Sydney for property investors and home buyers across Australia. Rated 5.0 on Google (11 reviews). Search, evaluate, negotiate — including off-market. Book a free discovery call.',
    heading: 'The unfair advantage on your side of the deal.',
    body: 'Awan Buyers Agency is a Sydney buyers agent representing property buyers and investors — searching, evaluating and negotiating so you buy the right property at the right price.',
  },
  {
    path: '/services',
    title: `Buyers Agent Services ${city} | Investment Acquisition | ${brand}`,
    description:
      'Full search & acquisition, auction bidding, and evaluate & negotiate for Sydney and Australian property investors. Flat fee, independent buyers agency.',
    heading: 'Your entire purchase, handled.',
    body: 'Choose full search and acquisition, auction bidding, or evaluate and negotiate — flat fee, independent representation for buyers and investors.',
  },
  {
    path: '/how-it-works',
    title: `How a Buyers Agent Works | Property Investment Process | ${brand}`,
    description:
      'Four-step buyers agency process for Australian property investment: discovery, strategy, search and shortlist, secure and settle. Flat agreed fee.',
    heading: 'A clear process. No surprises.',
    body: 'From a free discovery call to settlement — how Awan Buyers Agency works with Sydney buyers and investors.',
  },
  {
    path: '/results',
    title: `Property Investment Results Australia | ${brand}`,
    description:
      'Real property purchases secured for clients — suburbs, purchase prices and growth outcomes from Awan Buyers Agency.',
    heading: 'Proof in the purchases.',
    body: 'Case studies and recent acquisitions across Australian markets for property investors and owner-occupiers.',
  },
  {
    path: '/about',
    title: `About ${brand} | Buyers Agent & Property Investor`,
    description:
      'Meet Sohaib, founder of Awan Buyers Agency — a Sydney buyers agent and property investor focused on independent representation.',
    heading: 'Humans buy from humans.',
    body: 'Why Awan exists and who leads the search on your behalf for Australian property purchases.',
  },
  {
    path: '/faq',
    title: `Buyers Agent FAQ | Property Investment Australia | ${brand}`,
    description:
      'Costs, process, independence, investors vs first-home buyers — FAQ from Awan Buyers Agency, Sydney.',
    heading: 'Questions buyers actually ask.',
    body: 'Fees, timelines, independence, investment purchases and service areas.',
  },
  {
    path: '/book',
    title: `Book a Free Discovery Call | Property Buyers Agent ${city}`,
    description:
      'Book a free 20-minute discovery call with Awan Buyers Agency. For home buyers and property investors across Australia.',
    heading: 'Book your free discovery call.',
    body: 'Twenty minutes. Zero obligation. A clear plan either way.',
  },
  {
    path: '/guide',
    title: `Property Buyer's Playbook Australia | ${brand}`,
    description:
      'Free Property Buyer’s Playbook from Awan Buyers Agency — practical guidance before you buy or invest in Australian property.',
    heading: 'Not ready to talk? Take the Playbook.',
    body: 'A free guide for buyers and investors who want clarity before they book a call.',
  },
  {
    path: '/property-investment-australia',
    title: `Property Investment Australia | Buyers Agent for Investors | ${brand}`,
    description:
      'Independent buyers agent for property investment in Australia. Search, due diligence and negotiation for Sydney and interstate investors — including off-market.',
    heading: 'Property investment in Australia — with someone on your side of the deal.',
    body: 'How Awan helps property investors buy with a clear brief, rigorous evaluation and strong negotiation.',
  },
  {
    path: '/muslim-property-investors',
    title: `Muslim Property Investors Australia | Sharia-Aware Buyers Agent | ${brand}`,
    description:
      'Buyers agent for Muslim property investors in Australia. Independent search and negotiation, with introductions to trusted sharia-compliant finance partners.',
    heading: 'Property investment for Muslim Australians — clear process, sharia-aware support.',
    body: 'Independent buyers representation for Muslim investors, with trusted sharia-compliant finance partners when needed.',
  },
  {
    path: '/go',
    title: `Buy with an unfair advantage | ${brand}`,
    description:
      'Sydney buyers agency — book a free triage call or take a 60-second quiz. Licensed, independent, we never sell property.',
    heading: 'Buy with an unfair advantage — without doing it alone.',
    body: 'Meta ads landing: book a triage call or take the qualifying quiz.',
  },
  {
    path: '/go/book',
    title: `Book a free triage call | ${brand}`,
    description: 'Book a free 20-minute triage call with Awan Buyers Agency. Zero obligation.',
    heading: 'Book your free triage call',
    body: 'Direct booking path for Meta ads — Calendly triage call.',
  },
  {
    path: '/go/quiz',
    title: `60-second buyers quiz | ${brand}`,
    description:
      'Take a 60-second quiz to see if a Sydney buyers agent is right for you — then book a call or get the Playbook.',
    heading: 'See if a buyers agent is right for you right now',
    body: 'Qualifying quiz funnel with segmented outcomes.',
  },
  {
    path: '/go/muslim',
    title: `Muslim investor landing | ${brand}`,
    description: 'Sharia-aware property investment support — book a triage call or take the quiz.',
    heading: 'Invest in Australian property — with sharia-aware support.',
    body: 'Meta ads landing for Muslim property investors.',
  },
  {
    path: '/go/muslim/book',
    title: `Book triage call — Muslim investors | ${brand}`,
    description: 'Book a free triage call for Muslim property investors in Australia.',
    heading: 'Book your free triage call',
    body: 'Direct booking for Muslim investor Meta campaigns.',
  },
  {
    path: '/go/muslim/quiz',
    title: `Muslim investor quiz | ${brand}`,
    description: '60-second quiz for Muslim property investors — then book or get the Playbook.',
    heading: 'See if now is the right time to invest',
    body: 'Qualifying quiz for Muslim investor funnel.',
  },
  {
    path: '/privacy',
    title: `Privacy Policy | ${brand}`,
    description: 'Privacy policy for Awan Buyers Agency.',
    heading: 'Privacy Policy',
    body: 'How we collect and use personal information.',
  },
  {
    path: '/terms',
    title: `Terms of Use | ${brand}`,
    description: 'Terms of use for the Awan Buyers Agency website.',
    heading: 'Terms of Use',
    body: 'Terms governing use of this website.',
  },
]

export function getPageMeta(path: string): PageMeta {
  return pageMeta.find((p) => p.path === path) ?? pageMeta[0]!
}
