import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StepTimeline } from '../components/ui/StepTimeline'
import { CTABand } from '../components/ui/CTABand'
import { useCallbackForm } from '../components/layout/CallbackContext'

const differences = [
  {
    title: 'Independent',
    body: 'We represent buyers only. No listings book. No commissions from selling agents.',
  },
  {
    title: 'Flat fee',
    body: 'Agreed in writing before we start. No percentage of purchase price. Dollar figures are shared on your Strategy Call — not published here.',
  },
  {
    title: 'Off-market access',
    body: 'Relationships that surface properties before they hit the portals — when the brief warrants it.',
  },
]

export default function HowItWorksPage() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo path="/how-it-works" />
      <section className="section-pad bg-navy-950 pt-32 sm:pt-36">
        <div className="container-site max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="Process"
            title="A clear process. No surprises."
            tone="dark"
            lede="What happens, what you do, and how long each stage typically takes."
          />
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site">
          <StepTimeline expanded />
        </div>
      </section>

      <section className="section-pad bg-ground-soft">
        <div className="container-site max-w-3xl">
          <SectionHeading
            eyebrow="Fees"
            title="Transparent philosophy. Numbers on the call."
            lede="We charge a flat, agreed fee matched to the tier you need. We do not take a cut of the purchase price and we do not accept commissions from selling agents. Exact figures depend on scope — we will put them in writing before you engage."
          />
        </div>
      </section>

      <section className="section-pad bg-navy-900">
        <div className="container-site">
          <SectionHeading eyebrow="Difference" title="What makes us different" tone="dark" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {differences.map((d) => (
              <div key={d.title}>
                <h3 className="font-display text-h3 text-white">{d.title}</h3>
                <p className="mt-3 text-body text-white/75">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        location="how-it-works"
        title="Start with step 1 — it's free."
        onCallback={openCallback}
      />
    </>
  )
}
