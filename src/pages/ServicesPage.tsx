import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { serviceTiers, comparisonRows } from '../content/services'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { CTABand } from '../components/ui/CTABand'
import { useCallbackForm } from '../components/layout/CallbackContext'
import { cn } from '../lib/utils'

export default function ServicesPage() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo path="/services" />
      <section className="section-pad bg-navy-950 pt-28">
        <div className="container-site max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="Your entire purchase, handled."
            tone="dark"
            lede="Three tiers. Compare inclusions, then book a call already knowing which fit is yours."
            as="h1"
          />
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site space-y-16">
          {serviceTiers.map((tier) => (
            <article key={tier.id} id={tier.id} className="scroll-mt-28">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-display text-h2 text-ink-900">{tier.name}</h2>
                {tier.popular && <span className="eyebrow">Most popular</span>}
              </div>
              <p className="mt-3 max-w-prose text-body text-ink-600">{tier.promise}</p>
              <p className="mt-4 max-w-prose text-small text-ink-600">
                <span className="font-medium text-ink-900">Who it is for:</span> {tier.whoFor}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {tier.inclusions.map((item) => (
                  <li key={item} className="text-body text-ink-900">
                    <span className="text-gold-500" aria-hidden>
                      ·{' '}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 max-w-xl">
                <FaqAccordion
                  items={[
                    {
                      question: `Is ${tier.name} right for me?`,
                      answer: tier.whoFor,
                    },
                  ]}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-ground-soft">
        <div className="container-site">
          <h2 className="font-display text-h2 text-ink-900">Compare tiers</h2>
          <p className="mt-3 max-w-prose text-body text-ink-600">
            Self-select before the call — we will confirm fit on discovery.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-small">
              <thead>
                <tr className="border-b border-border bg-navy-900 text-white">
                  <th className="px-4 py-3 font-medium">Inclusion</th>
                  {serviceTiers.map((t) => (
                    <th key={t.id} className="px-4 py-3 font-medium">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row} className="border-b border-border bg-white">
                    <th scope="row" className="px-4 py-3 font-medium text-ink-900">
                      {row}
                    </th>
                    {serviceTiers.map((t) => {
                      const val = t.comparison[row]
                      return (
                        <td key={t.id} className="px-4 py-3 text-ink-600">
                          {typeof val === 'boolean' ? (
                            <span className={cn(val ? 'text-success' : 'text-ink-600/40')}>
                              {val ? 'Yes' : '—'}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABand location="services" onCallback={openCallback} />
    </>
  )
}
