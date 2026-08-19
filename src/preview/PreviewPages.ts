export type PreviewPageLink = {
  label: string
  path: string
  group: 'Main site' | 'Funnel'
}

export const PREVIEW_PAGES: PreviewPageLink[] = [
  { group: 'Main site', label: 'Home', path: '/preview' },
  { group: 'Main site', label: 'Services', path: '/preview/services' },
  { group: 'Main site', label: 'How it works', path: '/preview/how-it-works' },
  { group: 'Main site', label: 'Results', path: '/preview/results' },
  { group: 'Main site', label: 'About', path: '/preview/about' },
  { group: 'Main site', label: 'FAQ', path: '/preview/faq' },
  { group: 'Main site', label: 'Book', path: '/preview/book' },
  { group: 'Main site', label: 'Guide', path: '/preview/guide' },
  {
    group: 'Main site',
    label: 'Property investment',
    path: '/preview/property-investment-australia',
  },
  { group: 'Main site', label: 'Muslim investors', path: '/preview/muslim-property-investors' },
  { group: 'Main site', label: 'Privacy', path: '/preview/privacy' },
  { group: 'Main site', label: 'Terms', path: '/preview/terms' },
  { group: 'Funnel', label: 'Ads landing', path: '/preview/go' },
  { group: 'Funnel', label: 'Ads book', path: '/preview/go/book' },
  { group: 'Funnel', label: 'Ads quiz', path: '/preview/go/quiz' },
  { group: 'Funnel', label: 'Muslim ads landing', path: '/preview/go/muslim' },
  { group: 'Funnel', label: 'Muslim ads book', path: '/preview/go/muslim/book' },
  { group: 'Funnel', label: 'Muslim ads quiz', path: '/preview/go/muslim/quiz' },
]
