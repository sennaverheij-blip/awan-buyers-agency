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
    title: `Buyers Agent ${city} | ${brand}`,
    description:
      'Awan Buyers Agency searches, evaluates and negotiates on your behalf in Sydney — including off-market homes. Book a free discovery call.',
    heading: 'The unfair advantage on your side of the deal.',
    body: 'Awan Buyers Agency is a Sydney buyers agent representing property buyers — searching, evaluating and negotiating so you buy the right property at the right price.',
  },
  {
    path: '/services',
    title: `Services | ${brand} — Buyers Agent ${city}`,
    description:
      'Full search & acquisition, auction bidding, and evaluate & negotiate tiers from Awan Buyers Agency in Sydney.',
    heading: 'Your entire purchase, handled.',
    body: 'Choose full search and acquisition, auction bidding, or evaluate and negotiate — flat fee, independent representation.',
  },
  {
    path: '/how-it-works',
    title: `How It Works | ${brand} — Buyers Agent ${city}`,
    description:
      'A clear four-step buyers agency process: discovery call, strategy, search and shortlist, secure and settle. Flat agreed fee.',
    heading: 'A clear process. No surprises.',
    body: 'From a free discovery call to settlement — how Awan Buyers Agency works with Sydney buyers.',
  },
  {
    path: '/results',
    title: `Results | ${brand} — Buyers Agent ${city}`,
    description:
      'Recent property purchases secured by Awan Buyers Agency — suburbs, purchase prices and growth outcomes.',
    heading: 'Proof in the purchases.',
    body: 'Case studies and recent acquisitions across Australian markets.',
  },
  {
    path: '/about',
    title: `About | ${brand} — Buyers Agent ${city}`,
    description:
      'Meet Sohaib, founder of Awan Buyers Agency — a Sydney buyers agent built on independence and long-term outcomes.',
    heading: 'Humans buy from humans.',
    body: 'Why Awan exists and who leads the search on your behalf.',
  },
  {
    path: '/faq',
    title: `FAQ | ${brand} — Buyers Agent ${city}`,
    description:
      'Costs, process, independence and coverage — answers from Awan Buyers Agency, Sydney.',
    heading: 'Questions buyers actually ask.',
    body: 'Fees, timelines, independence and service areas.',
  },
  {
    path: '/book',
    title: `Book a Free Discovery Call | ${brand}`,
    description:
      'Book a free 20-minute discovery call with Awan Buyers Agency. Zero obligation — leave with a clear plan.',
    heading: 'Book your free discovery call.',
    body: 'Twenty minutes. Zero obligation. A clear plan either way.',
  },
  {
    path: '/guide',
    title: `Property Buyer's Playbook | ${brand}`,
    description:
      'Download the free Property Buyer’s Playbook from Awan Buyers Agency — practical guidance before you buy in Sydney.',
    heading: 'Not ready to talk? Take the Playbook.',
    body: 'A free guide for buyers who want clarity before they book a call.',
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
