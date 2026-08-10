import { SectionHeading } from '../ui/SectionHeading'
import { StepTimeline } from '../ui/StepTimeline'
import { Button } from '../ui/Button'
import { track } from '../../lib/analytics'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad bg-cream-50">
      <div className="container-site">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. One clear path to settlement."
          lede="The number-one booking blocker is fear of the unknown. Here is exactly what happens."
        />
        <div className="mt-12">
          <StepTimeline />
        </div>
        <p className="mt-2 max-w-prose text-small text-ink-600">
          Flat, agreed fee — no percentage games, no commissions from anyone else. Full details on
          your discovery call.
        </p>
        <div className="mt-10 rounded-card border border-cream-100 bg-cream-100/60 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="font-display text-h3 text-ink-900">Start with step 1 — it&apos;s free</p>
          <Button
            to="/book"
            variant="primary"
            className="mt-4 sm:mt-0"
            onClick={() => track('cta_book_click', { location: 'how-it-works-band' })}
          >
            Book a Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  )
}
