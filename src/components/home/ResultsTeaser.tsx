import { Link } from 'react-router'
import { properties, formatCurrency } from '../../data/properties'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'

const featured = [...properties].sort((a, b) => b.growthPercent - a.growthPercent).slice(0, 3)

export function ResultsTeaser() {
  return (
    <section className="section-pad bg-ground-soft">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Results"
            title="Proof in the purchases."
            lede="A sample of properties we have helped secure — from our records."
          />
          <Link
            to="/results"
            className="inline-flex min-h-11 shrink-0 items-center text-small font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            All results →
          </Link>
        </div>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <article className="grid gap-4 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <div className="sm:col-span-5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {p.state} · {p.year}
                  </p>
                  <h3 className="mt-2 text-h3 font-bold text-ink-900">{p.location}</h3>
                  <p className="mt-1 text-small text-ink-600">{p.strategy}</p>
                </div>
                <dl className="mt-1 grid grid-cols-1 gap-3 sm:col-span-7 sm:mt-0 sm:grid-cols-3 sm:justify-items-end sm:gap-4">
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/80 pb-2 sm:block sm:border-0 sm:pb-0">
                    <dt className="text-[0.6875rem] uppercase tracking-wider text-ink-400">
                      Purchased
                    </dt>
                    <dd className="font-semibold text-ink-900 sm:mt-1">
                      {formatCurrency(p.purchasePrice)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/80 pb-2 sm:block sm:border-0 sm:pb-0">
                    <dt className="text-[0.6875rem] uppercase tracking-wider text-ink-400">
                      Valuation
                    </dt>
                    <dd className="font-semibold text-success sm:mt-1">
                      {formatCurrency(p.currentValuation)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 sm:block">
                    <dt className="text-[0.6875rem] uppercase tracking-wider text-ink-400">
                      Growth
                    </dt>
                    <dd className="font-semibold text-ink-900 sm:mt-1">{p.growthPercent}%</dd>
                  </div>
                </dl>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
