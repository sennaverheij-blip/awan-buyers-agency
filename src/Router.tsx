/* eslint-disable react-refresh/only-export-components -- lazy route modules */
import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import PastResultsPage from './pages/PastResultsPage'
import AdminPage from './pages/AdminPage'
import { PreviewLayout } from './preview/PreviewLayout'
import { RootLayout as PreviewRootLayout } from './preview-site/components/layout/RootLayout'
import { FunnelLayout as PreviewFunnelLayout } from './preview-site/components/funnel/FunnelLayout'

const PreviewHome = lazy(() => import('./preview-site/pages/Home'))
const PreviewServicesPage = lazy(() => import('./preview-site/pages/ServicesPage'))
const PreviewHowItWorksPage = lazy(() => import('./preview-site/pages/HowItWorksPage'))
const PreviewResultsPage = lazy(() => import('./preview-site/pages/ResultsPage'))
const PreviewAboutPage = lazy(() => import('./preview-site/pages/AboutPage'))
const PreviewFaqPage = lazy(() => import('./preview-site/pages/FaqPage'))
const PreviewBookPage = lazy(() => import('./preview-site/pages/BookPage'))
const PreviewGuidePage = lazy(() => import('./preview-site/pages/GuidePage'))
const PreviewPrivacyPage = lazy(() => import('./preview-site/pages/PrivacyPage'))
const PreviewTermsPage = lazy(() => import('./preview-site/pages/TermsPage'))
const PreviewNotFoundPage = lazy(() => import('./preview-site/pages/NotFoundPage'))
const PreviewPropertyInvestmentPage = lazy(() => import('./preview-site/pages/PropertyInvestmentPage'))
const PreviewMuslimInvestorsPage = lazy(() => import('./preview-site/pages/MuslimInvestorsPage'))
const PreviewGoLandingPage = lazy(() => import('./preview-site/pages/funnel/GoLandingPage'))
const PreviewGoBookPage = lazy(() => import('./preview-site/pages/funnel/GoBookPage'))
const PreviewGoQuizPage = lazy(() => import('./preview-site/pages/funnel/GoQuizPage'))
const PreviewGoMuslimLandingPage = lazy(() => import('./preview-site/pages/funnel/GoMuslimLandingPage'))
const PreviewGoMuslimBookPage = lazy(() => import('./preview-site/pages/funnel/GoMuslimBookPage'))
const PreviewGoMuslimQuizPage = lazy(() => import('./preview-site/pages/funnel/GoMuslimQuizPage'))

function withPreviewSuspense(Component: ComponentType, dark = false) {
  return function Suspended() {
    return (
      <Suspense
        fallback={
          <div
            className={`flex min-h-[50vh] items-center justify-center ${
              dark ? 'bg-navy-950 text-white/70' : 'bg-ground text-ink-600'
            }`}
          >
            Loading preview…
          </div>
        }
      >
        <Component />
      </Suspense>
    )
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/past-results',
    Component: PastResultsPage,
  },
  {
    path: '/admin',
    Component: AdminPage,
  },
  {
    path: '/preview',
    Component: PreviewLayout,
    children: [
      {
        path: 'go',
        Component: PreviewFunnelLayout,
        children: [
          { index: true, Component: withPreviewSuspense(PreviewGoLandingPage, true) },
          { path: 'book', Component: withPreviewSuspense(PreviewGoBookPage, true) },
          { path: 'quiz', Component: withPreviewSuspense(PreviewGoQuizPage, true) },
          { path: 'muslim', Component: withPreviewSuspense(PreviewGoMuslimLandingPage, true) },
          { path: 'muslim/book', Component: withPreviewSuspense(PreviewGoMuslimBookPage, true) },
          { path: 'muslim/quiz', Component: withPreviewSuspense(PreviewGoMuslimQuizPage, true) },
        ],
      },
      {
        path: '',
        Component: PreviewRootLayout,
        children: [
          { index: true, Component: withPreviewSuspense(PreviewHome) },
          { path: 'services', Component: withPreviewSuspense(PreviewServicesPage) },
          { path: 'how-it-works', Component: withPreviewSuspense(PreviewHowItWorksPage) },
          { path: 'results', Component: withPreviewSuspense(PreviewResultsPage) },
          { path: 'past-results', Component: withPreviewSuspense(PreviewResultsPage) },
          { path: 'about', Component: withPreviewSuspense(PreviewAboutPage) },
          { path: 'faq', Component: withPreviewSuspense(PreviewFaqPage) },
          { path: 'book', Component: withPreviewSuspense(PreviewBookPage) },
          { path: 'guide', Component: withPreviewSuspense(PreviewGuidePage) },
          {
            path: 'property-investment-australia',
            Component: withPreviewSuspense(PreviewPropertyInvestmentPage),
          },
          {
            path: 'muslim-property-investors',
            Component: withPreviewSuspense(PreviewMuslimInvestorsPage),
          },
          { path: 'privacy', Component: withPreviewSuspense(PreviewPrivacyPage) },
          { path: 'terms', Component: withPreviewSuspense(PreviewTermsPage) },
          { path: '*', Component: withPreviewSuspense(PreviewNotFoundPage) },
        ],
      },
    ],
  },
])
