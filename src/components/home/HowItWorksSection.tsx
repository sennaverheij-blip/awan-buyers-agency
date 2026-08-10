import { SectionHeading } from '../ui/SectionHeading'
import { StepTimeline } from '../ui/StepTimeline'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="How it works"
            title="Four clear steps. No surprises."
            lede="The number-one booking blocker is fear of the unknown. Here is exactly what happens."
          />
          <p className="mt-8 max-w-prose text-small text-ink-600">
            Flat, agreed fee — no percentage games, no commissions from anyone else. Full details on
            your discovery call.
          </p>
          <Button
            to="/book"
            variant="navy"
            className="mt-8"
            onClick={() => track('cta_book_click', { location: 'how-it-works-band' })}
          >
            Start with step 1 — it&apos;s free
          </Button>
        </div>
        <div className="lg:col-span-7">
          <StepTimeline />
        </div>
      </div>
    </section>
  )
}
