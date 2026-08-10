/* eslint-disable react-refresh/only-export-components -- lazy route modules */
import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter, Navigate } from 'react-router'
import { RootLayout } from './components/layout/RootLayout'

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

function withSuspense(Component: ComponentType) {
  return function Suspended() {
    return (
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center bg-cream-50 text-ink-600">
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
      { path: 'privacy', Component: withSuspense(PrivacyPage) },
      { path: 'terms', Component: withSuspense(TermsPage) },
      { path: '*', Component: withSuspense(NotFoundPage) },
    ],
  },
])
