export type FaqItem = { question: string; answer: string }

export type FaqGroup = { theme: string; items: FaqItem[] }

export const homeFaqs: FaqItem[] = [
  {
    question: 'What does a buyers agent cost?',
    answer:
      'We work on a flat, agreed fee — not a percentage of the purchase price. You know the number before we start. Exact figures are shared on your free Strategy Call so we can match scope to your brief.',
  },
  {
    question: "Isn't that just an extra fee on top of everything else?",
    answer:
      'A buyers agent is paid to protect your downside and improve your outcome — better shortlist, stronger negotiation, fewer expensive mistakes. Most clients find the fee is absorbed by a sharper purchase price and the time they get back. We never take commissions from selling agents.',
  },
  {
    question: 'Who do you represent?',
    answer:
      'You only. We are an independent buyers agency: we do not sell property and we do not accept commissions or referral fees from selling agents. Our incentives stay aligned with yours.',
  },
  {
    question: 'How long does it take?',
    answer:
      'It depends on your brief, budget and how competitive the segment is. Some clients secure within weeks; others need a longer search for the right asset. On the Strategy Call we give you a realistic timeframe for your criteria.',
  },
  {
    question: "What if you don't find anything?",
    answer:
      'The Strategy Call is where we qualify fit first — brief, budget, timeline and whether our process is the right move for you. If we are not the right fit, we say so before you engage. Once engaged, we work to your written brief and agree terms upfront; we will not push you into a poor purchase.',
  },
  {
    question: 'Do you cover my area?',
    answer:
      'We are Sydney-based and work across Greater Sydney. Geographic coverage beyond that is confirmed on the Strategy Call against your brief — we will tell you honestly if we are the right agent for the suburbs you have in mind.',
  },
  {
    question: 'Do you help with property investment in Australia?',
    answer:
      'Yes. A large share of our work is investment acquisition — clear brief, yield and growth trade-offs, due diligence and negotiation. Start with our property investment overview or book a Strategy Call.',
  },
  {
    question: 'Can you help Muslim investors who need sharia-compliant finance?',
    answer:
      'Yes. We provide independent buyers representation and can introduce you to trusted sharia-compliant finance partners when that path fits your brief. We do not lend money and we never sell property.',
  },
]

export const faqGroups: FaqGroup[] = [
  {
    theme: 'Cost & fees',
    items: [
      homeFaqs[0],
      homeFaqs[1],
      {
        question: 'Do you publish your fee schedule online?',
        answer:
          'No. Fees depend on the service tier (full search, or evaluate & negotiate) and the complexity of your brief. We explain the flat fee clearly on the Strategy Call — before any commitment.',
      },
      {
        question: 'When is the fee payable?',
        answer:
          'Payment structure is set out in your engagement agreement. We walk through timing and milestones on the call so there are no surprises.',
      },
    ],
  },
  {
    theme: 'Process',
    items: [
      homeFaqs[3],
      homeFaqs[4],
      {
        question: 'What happens on the Strategy Call?',
        answer:
          'Twenty minutes. We cover your goals, budget, suburbs, timeline and constraints. You leave with a clear sense of whether a buyers agent is the right move — and what working together would look like. Zero obligation.',
      },
      {
        question: 'Will you bid at auction for me?',
        answer:
          'When a purchase goes to auction as part of a full search or evaluate & negotiate engagement, yes — we prepare a bidding strategy, attend on the day, and keep emotion out of the paddles. We do not offer auction bidding as a standalone service.',
      },
    ],
  },
  {
    theme: 'Trust & independence',
    items: [
      homeFaqs[2],
      {
        question: 'Are you a licensed buyers agent?',
        answer:
          'Yes — we operate as a licensed buyers agency. Licence details appear in the site footer (replace PLACEHOLDER_LICENCE with your public licence number).',
      },
      {
        question: 'Why should I trust you with the biggest purchase of my life?',
        answer:
          'Because our incentives align with yours: we only represent buyers, we charge a flat fee, and our reputation is built on secured properties and referrals — not listings volume.',
      },
    ],
  },
  {
    theme: 'Coverage',
    items: [
      homeFaqs[5],
      {
        question: 'Do you help first-home buyers and investors?',
        answer:
          'Both. The process is the same discipline — clear brief, rigorous due diligence, strong negotiation — whether you are buying to live in or to hold as an investment. See our property investment Australia guide for investor-focused detail.',
      },
      {
        question: 'Do I need deposit capital ready before we work together?',
        answer:
          'You should have deposit capital ready, or a clear ability to raise it, before we enter a competitive campaign. We qualify this on the Strategy Call and in our short quiz so we do not waste your time — or ours.',
      },
      {
        question: 'Can you help if I have already found a property?',
        answer:
          'Yes. Our Evaluate & Negotiate tier is built for that: we stress-test the asset, the price and the contract risk, then negotiate or bid on your behalf.',
      },
      {
        question: 'Do you work with Muslim property investors?',
        answer:
          'Yes. We offer independent buyers representation and introductions to trusted sharia-compliant finance partners. Read the Muslim property investors page or book a triage call.',
      },
    ],
  },
]
