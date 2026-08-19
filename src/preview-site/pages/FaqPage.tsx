import { Link } from 'preview-router'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { CTABand } from '../components/ui/CTABand'
import { faqGroups } from '../content/faqs'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function FaqPage() {
  const { openCallback } = useCallbackForm()
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    ),
  }

  return (
    <>
      <Seo path="/faq" jsonLd={faqLd} />
      <section className="section-pad bg-navy-950 pt-32 sm:pt-36">
        <div className="container-site max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Questions buyers actually ask."
            tone="dark"
          />
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site max-w-3xl space-y-14">
          {faqGroups.map((group) => (
            <div key={group.theme}>
              <h2 className="font-display text-h3 text-ink-900">{group.theme}</h2>
              <div className="mt-4">
                <FaqAccordion items={group.items} />
              </div>
            </div>
          ))}
          <p className="text-small text-ink-600">
            Deep dives:{' '}
            <Link
              to="/property-investment-australia"
              className="font-semibold text-ink-900 underline-offset-4 hover:underline"
            >
              Property investment Australia
            </Link>
            {' · '}
            <Link
              to="/muslim-property-investors"
              className="font-semibold text-ink-900 underline-offset-4 hover:underline"
            >
              Muslim property investors
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand location="faq" onCallback={openCallback} />
    </>
  )
}
