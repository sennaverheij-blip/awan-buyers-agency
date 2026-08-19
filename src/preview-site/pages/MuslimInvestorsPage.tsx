import { Link } from 'preview-router'
import { Seo } from '../components/Seo'
import { Button } from '../components/ui/Button'
import { CTABand } from '../components/ui/CTABand'
import { AuthorityCitations, SeoInternalLinks } from '../components/seo/AuthorityCitations'
import { muslimInvestorSeo } from '../content/seoPages'
import { useCallbackForm } from '../components/layout/CallbackContext'
import { track } from '../lib/analytics'

export default function MuslimInvestorsPage() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo
        path={muslimInvestorSeo.path}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: muslimInvestorSeo.title,
          description: muslimInvestorSeo.description,
          about: [
            { '@type': 'Thing', name: 'Muslim property investors Australia' },
            { '@type': 'Thing', name: 'Sharia-compliant property finance' },
          ],
        }}
      />
      <section className="section-pad bg-navy-950 pt-32 sm:pt-36">
        <div className="container-site max-w-3xl">
          <p className="eyebrow text-gold-400">Muslim property investors</p>
          <h1 className="mt-4 text-h1 font-bold text-white">{muslimInvestorSeo.h1}</h1>
          <p className="mt-5 text-body text-white/70">{muslimInvestorSeo.lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              to="/go/muslim/book"
              variant="primary"
              onClick={() => track('cta_book_click', { location: 'seo-muslim' })}
            >
              Book a free triage call
            </Button>
            <Button to="/go/muslim" variant="secondary">
              Muslim investor landing
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="max-w-prose space-y-12 lg:col-span-7">
            {muslimInvestorSeo.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-h3 font-bold text-ink-900">{section.title}</h2>
                <p className="mt-3 text-body text-ink-600">{section.body}</p>
              </article>
            ))}
            <article>
              <h2 className="text-h3 font-bold text-ink-900">How to start</h2>
              <p className="mt-3 text-body text-ink-600">
                Book a triage call, or take the short quiz on our{' '}
                <Link
                  to="/go/muslim"
                  className="font-semibold text-ink-900 underline-offset-4 hover:underline"
                >
                  Muslim investor campaign page
                </Link>
                . Prefer the broader investment overview? Read{' '}
                <Link
                  to="/property-investment-australia"
                  className="font-semibold text-ink-900 underline-offset-4 hover:underline"
                >
                  property investment in Australia
                </Link>
                .
              </p>
            </article>
            <SeoInternalLinks />
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-media border border-border bg-white p-6 sm:p-8">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                Finance note
              </p>
              <p className="mt-3 text-body text-ink-600">
                We introduce clients to{' '}
                <strong className="font-semibold text-ink-900">
                  trusted sharia-compliant finance partners
                </strong>{' '}
                when that path fits the brief. Partner names are confirmed on your call — we do not
                publish unverified brands.
              </p>
            </div>
            <AuthorityCitations
              className="mt-8 rounded-media border border-border bg-white p-6 sm:p-8"
              limit={4}
            />
          </div>
        </div>
      </section>

      <CTABand
        location="seo-muslim"
        title="Ready to talk through a sharia-aware purchase plan?"
        subtitle="Free triage call. Independent buyers representation — with introductions to trusted sharia-compliant finance partners when you need them."
        onCallback={openCallback}
      />
    </>
  )
}
