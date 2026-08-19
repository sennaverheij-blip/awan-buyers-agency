import { Seo } from '../components/Seo'
import { SITE } from '../content/site'
import { CTABand } from '../components/ui/CTABand'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function TermsPage() {
  const { openCallback } = useCallbackForm()
  return (
    <>
      <Seo path="/terms" />
      <article className="section-pad bg-ground pt-28">
        <div className="container-site max-w-prose">
          <h1 className="font-display text-h1 text-ink-900">Terms of Use</h1>
          <p className="mt-4 text-small text-ink-600">Last updated: {SITE.year}</p>
          <div className="mt-8 space-y-4 text-body text-ink-600">
            <p>
              By using the {SITE.name} website you agree to these terms. Content is general
              information only and is not financial, legal or property advice tailored to your
              circumstances.
            </p>
            <h2 className="font-display text-h3 text-ink-900">Services</h2>
            <p>
              Engagement as a buyers agent is governed by a separate written agreement. Website
              forms and booking tools do not create a client relationship until that agreement is
              signed.
            </p>
            <h2 className="font-display text-h3 text-ink-900">Liability</h2>
            <p>
              To the extent permitted by Australian law, we are not liable for decisions made solely
              on the basis of website content. Case studies reflect past outcomes and are not a
              guarantee of future results.
            </p>
            <h2 className="font-display text-h3 text-ink-900">Contact</h2>
            <p>
              <a className="underline" href={SITE.email.href}>
                {SITE.email.display}
              </a>
            </p>
          </div>
        </div>
      </article>
      <CTABand location="terms" onCallback={openCallback} />
    </>
  )
}
