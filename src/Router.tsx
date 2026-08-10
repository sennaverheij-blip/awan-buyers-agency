/* eslint-disable react-refresh/only-export-components -- lazy route modules */
import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter, Navigate } from 'react-router'
import { RootLayout } from './components/layout/RootLayout'
import { FunnelLayout } from './components/funnel/FunnelLayout'

const Home = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const ResultsPage = lazy(() => import('./pages/ResultsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const BookPage = lazy(() => import('./pages/BookPage'))
const GuidePage = lazy(() => import('./pages/GuidePage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PropertyInvestmentPage = lazy(() => import('./pages/PropertyInvestmentPage'))
const MuslimInvestorsPage = lazy(() => import('./pages/MuslimInvestorsPage'))
const GoLandingPage = lazy(() => import('./pages/funnel/GoLandingPage'))
const GoBookPage = lazy(() => import('./pages/funnel/GoBookPage'))
const GoQuizPage = lazy(() => import('./pages/funnel/GoQuizPage'))
const GoMuslimLandingPage = lazy(() => import('./pages/funnel/GoMuslimLandingPage'))
const GoMuslimBookPage = lazy(() => import('./pages/funnel/GoMuslimBookPage'))
const GoMuslimQuizPage = lazy(() => import('./pages/funnel/GoMuslimQuizPage'))

function withSuspense(Component: ComponentType) {
  return function Suspended() {
    return (
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center bg-ground text-ink-600">
            Loading…
          </div>
        }
      >
        <Component />
      </Suspense>
    )
  }
}

function withFunnelSuspense(Component: ComponentType) {
  return function Suspended() {
    return (
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center bg-navy-950 text-white/60">
            Loading…
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
    path: '/go',
    Component: FunnelLayout,
    children: [
      { index: true, Component: withFunnelSuspense(GoLandingPage) },
      { path: 'book', Component: withFunnelSuspense(GoBookPage) },
      { path: 'quiz', Component: withFunnelSuspense(GoQuizPage) },
      { path: 'muslim', Component: withFunnelSuspense(GoMuslimLandingPage) },
      { path: 'muslim/book', Component: withFunnelSuspense(GoMuslimBookPage) },
      { path: 'muslim/quiz', Component: withFunnelSuspense(GoMuslimQuizPage) },
    ],
  },
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: withSuspense(Home) },
      { path: 'services', Component: withSuspense(ServicesPage) },
      { path: 'how-it-works', Component: withSuspense(HowItWorksPage) },
      { path: 'results', Component: withSuspense(ResultsPage) },
      { path: 'past-results', element: <Navigate to="/results" replace /> },
      { path: 'about', Component: withSuspense(AboutPage) },
      { path: 'faq', Component: withSuspense(FaqPage) },
      { path: 'book', Component: withSuspense(BookPage) },
      { path: 'guide', Component: withSuspense(GuidePage) },
      {
        path: 'property-investment-australia',
        Component: withSuspense(PropertyInvestmentPage),
      },
      {
        path: 'muslim-property-investors',
        Component: withSuspense(MuslimInvestorsPage),
      },
      { path: 'privacy', Component: withSuspense(PrivacyPage) },
      { path: 'terms', Component: withSuspense(TermsPage) },
      { path: '*', Component: withSuspense(NotFoundPage) },
    ],
  },
])
