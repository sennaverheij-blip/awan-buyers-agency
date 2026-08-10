/** Funnel quiz + landing copy for Meta ads routes under /go */

export type QuizOption = {
  id: string
  label: string
  /** Higher = more purchase-ready */
  score: number
}

export type QuizQuestion = {
  id: string
  prompt: string
  options: QuizOption[]
}

export const QUIZ_QUALIFIED_THRESHOLD = 8

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'timeline',
    prompt: 'When do you want to buy?',
    options: [
      { id: 'now', label: 'In the next 90 days', score: 3 },
      { id: 'six', label: '3–6 months', score: 2 },
      { id: 'year', label: '6–12 months', score: 1 },
      { id: 'research', label: 'Just researching for now', score: 0 },
    ],
  },
  {
    id: 'finance',
    prompt: 'Where are you with finance?',
    options: [
      { id: 'preapproved', label: 'Pre-approved / ready to offer', score: 3 },
      { id: 'broker', label: 'Speaking with a broker / bank', score: 2 },
      { id: 'cash', label: 'Cash buyer', score: 3 },
      { id: 'not_started', label: 'Not started yet', score: 0 },
    ],
  },
  {
    id: 'budget',
    prompt: 'What’s your purchase budget?',
    options: [
      { id: 'under800', label: 'Under $800k', score: 1 },
      { id: '800_12', label: '$800k – $1.2m', score: 2 },
      { id: '12_2', label: '$1.2m – $2m', score: 2 },
      { id: '2_plus', label: '$2m+', score: 3 },
      { id: 'unsure', label: 'Not sure yet', score: 0 },
    ],
  },
  {
    id: 'stage',
    prompt: 'Where are you in the process?',
    options: [
      { id: 'active', label: 'Actively inspecting / shortlisting', score: 3 },
      { id: 'found', label: 'Found a property — need help now', score: 3 },
      { id: 'missed', label: 'Missed out before — ready to try again', score: 2 },
      { id: 'early', label: 'Early stage / learning the market', score: 0 },
    ],
  },
]

export function scoreQuiz(answers: Record<string, string>): {
  score: number
  qualified: boolean
  answers: Record<string, string>
} {
  let score = 0
  for (const q of quizQuestions) {
    const optionId = answers[q.id]
    const opt = q.options.find((o) => o.id === optionId)
    if (opt) score += opt.score
  }
  return {
    score,
    qualified: score >= QUIZ_QUALIFIED_THRESHOLD,
    answers,
  }
}

export const funnelCopy = {
  landing: {
    eyebrow: 'Sydney buyers agency',
    headline: 'Buy with an unfair advantage — without doing it alone.',
    lede: 'We search, evaluate and negotiate on your behalf — including off-market homes you will never see on the portals. Licensed. Independent. We never sell property.',
    primaryCta: 'Book a free triage call',
    secondaryCta: 'Take the 60-second quiz',
    trust: 'Free 20-minute call · Flat agreed fee · No obligation',
  },
  book: {
    eyebrow: 'Triage call',
    headline: 'Book your free triage call',
    lede: 'Twenty minutes to see if we are the right fit. Leave with a clear next step either way.',
  },
  quiz: {
    eyebrow: '60-second quiz',
    headline: 'See if a buyers agent is right for you right now',
    lede: 'Four quick questions. We will point you to the best next step — a triage call or our free playbook.',
  },
  qualified: {
    headline: 'You look ready — let’s talk.',
    lede: 'Based on your answers, a short triage call is the fastest way to a clear plan.',
    cta: 'Book my free triage call',
  },
  nurture: {
    headline: 'You are early — start with the Playbook.',
    lede: 'No pressure. Get the free Property Buyer’s Playbook and book a call when the timing is right.',
    cta: 'Send me the Playbook',
  },
} as const
