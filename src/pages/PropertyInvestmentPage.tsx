import { Link } from 'react-router'
import { Seo } from '../components/Seo'
import { Button } from '../components/ui/Button'
import { CTABand } from '../components/ui/CTABand'
import { AuthorityCitations, SeoInternalLinks } from '../components/seo/AuthorityCitations'
import { investmentSeo } from '../content/seoPages'
import { useCallbackForm } from '../components/layout/CallbackContext'
import { track } from '../lib/analytics'

export default function PropertyInvestmentPage() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo
        path={investmentSeo.path}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: investmentSeo.title,
          description: investmentSeo.description,
          about: {
            '@type': 'Thing',
            name: 'Property investment in Australia',
          },
        }}
      />
      <section className="section-pad bg-navy-950 pt-32 sm:pt-36">
        <div className="container-site max-w-3xl">
          <p className="eyebrow text-gold-400">Property investment Australia</p>
          <h1 className="mt-4 text-h1 font-bold text-white">{investmentSeo.h1}</h1>
          <p className="mt-5 text-body text-white/70">{investmentSeo.lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              to="/book"
              variant="primary"
              onClick={() => track('cta_book_click', { location: 'seo-investment' })}
            >
              Book a free Strategy Call
            </Button>
            <Button to="/go/quiz" variant="secondary">
              Take the investor quiz
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="max-w-prose space-y-12 lg:col-span-7">
            {investmentSeo.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-h3 font-bold text-ink-900">{section.title}</h2>
                <p className="mt-3 text-body text-ink-600">{section.body}</p>
              </article>
            ))}
            <article>
              <h2 className="text-h3 font-bold text-ink-900">Off-market and on-market search</h2>
              <p className="mt-3 text-body text-ink-600">
                Investors who only watch the portals miss stock that never lists publicly. We combine
                on-market coverage with relationship-led off-market access, then negotiate as your
                exclusive representative — never as a selling agent.{' '}
                <Link to="/services" className="font-semibold text-ink-900 underline-offset-4 hover:underline">
                  See service tiers
                </Link>{' '}
                or{' '}
                <Link
                  to="/how-it-works"
                  className="font-semibold text-ink-900 underline-offset-4 hover:underline"
                >
                  how the process works
                </Link>
                .
              </p>
            </article>
            <article>
              <h2 className="text-h3 font-bold text-ink-900">Muslim investors</h2>
              <p className="mt-3 text-body text-ink-600">
                Looking for sharia-aware support alongside independent representation? Visit our guide
                for{' '}
                <Link
                  to="/muslim-property-investors"
                  className="font-semibold text-ink-900 underline-offset-4 hover:underline"
                >
                  Muslim property investors in Australia
                </Link>
                .
              </p>
            </article>
            <SeoInternalLinks />
          </div>
          <div className="lg:col-span-5">
            <AuthorityCitations className="rounded-media border border-border bg-white p-6 sm:p-8" />
            <p className="mt-6 text-small text-ink-500">
              Educational references only — not financial, tax or legal advice. Confirm decisions with
              your licensed advisers.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        location="seo-investment"
        title="Ready to invest with a clearer process?"
        subtitle="Book a free Strategy Call. We will map your brief, budget and timeline — then tell you honestly if we are the right fit."
        onCallback={openCallback}
      />
    </>
  )
}
