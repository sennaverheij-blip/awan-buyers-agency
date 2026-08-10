import { useSearchParams } from 'react-router'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { LeadMagnetForm } from '../components/home/LeadMagnetStrip'
import { Button } from '../components/ui/Button'
import { track } from '../lib/analytics'
import { PLACEHOLDER_ASSET_PLAYBOOK } from '../content/placeholders'

const takeaways = [
  'What to decide before you book a single inspection',
  'How to read a selling campaign without getting played',
  'A simple framework for walk-away price',
  'When a buyers agent pays for itself — and when DIY is fine',
]

export default function GuidePage() {
  const [params] = useSearchParams()
  const sent = params.get('sent') === '1'

  return (
    <>
      <Seo path="/guide" />
      <section className="section-pad bg-navy-950 pt-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Free guide"
              title="Property Buyer's Playbook"
              tone="dark"
              lede="Practical clarity for buyers who are not ready to talk yet — and a straight path to a discovery call when you are."
            />
            <ul className="mt-8 space-y-3">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-body text-cream-100/80">
                  <span className="text-gold-400" aria-hidden>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-small text-cream-100/50">Asset: {PLACEHOLDER_ASSET_PLAYBOOK}</p>
          </div>

          <div className="rounded-card border border-navy-800 bg-navy-900 p-8">
            {sent ? (
              <div>
                <h2 className="font-display text-h3 text-white">It is on its way.</h2>
                <p className="mt-3 text-body text-cream-100/75">
                  While it lands in your inbox — want to skip ahead?
                </p>
                <Button
                  to="/book"
                  variant="primary"
                  className="mt-6"
                  onClick={() => track('cta_book_click', { location: 'guide-post-submit' })}
                >
                  Book a Free Discovery Call
                </Button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-h3 text-white">Send me the guide</h2>
                <p className="mt-2 text-small text-cream-100/70">
                  Enter your email. No spam — just the Playbook.
                </p>
                <LeadMagnetForm variant="page" />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cover mockup */}
      <section className="bg-cream-50 py-16" aria-hidden>
        <div className="container-site flex justify-center">
          <div className="aspect-[3/4] w-full max-w-xs rounded-media bg-navy-900 p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Awan Buyers Agency</p>
            <p className="mt-8 font-display text-h2 text-white">Property Buyer&apos;s Playbook</p>
            <p className="mt-4 text-small text-cream-100/60">Sydney edition</p>
          </div>
        </div>
      </section>
    </>
  )
}
