import { Link } from 'react-router'
import { formatCurrency, type Property } from '../../data/properties'
import { cn } from '../../lib/utils'

type Props = {
  property: Property
  className?: string
}

export function CaseStudyCard({ property, className }: Props) {
  return (
    <article className={cn('border-b border-border py-6', className)}>
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
        {property.state} · {property.year}
      </p>
      <h3 className="mt-2 text-h3 font-bold text-ink-900">{property.location}</h3>
      <p className="mt-1 text-small text-ink-600">{property.strategy}</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 text-small sm:grid-cols-4">
        <div>
          <dt className="text-ink-400">Purchased</dt>
          <dd className="mt-1 font-semibold text-ink-900">
            {formatCurrency(property.purchasePrice)}
          </dd>
        </div>
        <div>
          <dt className="text-ink-400">Valuation</dt>
          <dd className="mt-1 font-semibold text-success">
            {formatCurrency(property.currentValuation)}
          </dd>
        </div>
        <div>
          <dt className="text-ink-400">Growth</dt>
          <dd className="mt-1 font-semibold text-ink-900">{property.growthPercent}%</dd>
        </div>
        <div>
          <dt className="text-ink-400">Yield</dt>
          <dd className="mt-1 font-semibold text-ink-900">
            {property.rentalYield.toFixed(1)}%
          </dd>
        </div>
      </dl>
    </article>
  )
}

export function CaseStudyCardLink({ property, className }: Props) {
  return (
    <Link to="/results" className="block transition-opacity hover:opacity-80">
      <CaseStudyCard property={property} className={className} />
    </Link>
  )
}
