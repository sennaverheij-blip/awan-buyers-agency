import { Seo } from '../components/Seo'
import { SITE } from '../content/site'
import { CTABand } from '../components/ui/CTABand'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function PrivacyPage() {
  const { openCallback } = useCallbackForm()
  return (
    <>
      <Seo path="/privacy" />
      <article className="section-pad bg-ground pt-28">
        <div className="container-site max-w-prose">
          <h1 className="font-display text-h1 text-ink-900">Privacy Policy</h1>
          <p className="mt-4 text-small text-ink-600">Last updated: {SITE.year}</p>
          <div className="mt-8 space-y-4 text-body text-ink-600">
            <p>
              {SITE.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This page explains
              how we collect and use personal information when you use {SITE.url} or contact us.
            </p>
            <h2 className="font-display text-h3 text-ink-900">What we collect</h2>
            <p>
              Contact details you submit (name, phone, email), booking information via our
              scheduling provider, and basic analytics if configured. We do not sell your data.
            </p>
            <h2 className="font-display text-h3 text-ink-900">How we use it</h2>
            <p>
              To respond to enquiries, deliver requested guides, schedule Strategy Calls, and
              improve our services. Form submissions are processed by the provider configured in
              our form endpoints.
            </p>
            <h2 className="font-display text-h3 text-ink-900">Contact</h2>
            <p>
              Questions:{' '}
              <a className="underline" href={SITE.email.href}>
                {SITE.email.display}
              </a>
              .
            </p>
          </div>
        </div>
      </article>
      <CTABand location="privacy" onCallback={openCallback} />
    </>
  )
}
