import { Link } from 'react-router'
import { formatCurrency, type Property } from '../../data/properties'
import { cn } from '../../lib/utils'

type Props = {
  property: Property
  className?: string
}

export function CaseStudyCard({ property, className }: Props) {
  return (
    <article
      className={cn(
        'rounded-card border border-cream-100 bg-white p-6 shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      <p className="eyebrow text-gold-600">{property.state}</p>
      <h3 className="mt-2 font-display text-h3 text-ink-900">{property.location}</h3>
      <p className="mt-1 text-small text-ink-600">{property.year} · {property.strategy}</p>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-small">
        <div>
          <dt className="text-ink-600">Purchased</dt>
          <dd className="mt-1 font-medium text-ink-900">
            {formatCurrency(property.purchasePrice)}
          </dd>
        </div>
        <div>
          <dt className="text-ink-600">Valuation</dt>
          <dd className="mt-1 font-medium text-success">
            {formatCurrency(property.currentValuation)}
          </dd>
        </div>
        <div>
          <dt className="text-ink-600">Growth</dt>
          <dd className="mt-1 font-medium text-ink-900">{property.growthPercent}%</dd>
        </div>
        <div>
          <dt className="text-ink-600">Yield</dt>
          <dd className="mt-1 font-medium text-ink-900">{property.rentalYield.toFixed(1)}%</dd>
        </div>
      </dl>
    </article>
  )
}

export function CaseStudyCardLink({ property, className }: Props) {
  return (
    <Link to="/results" className="block transition-opacity hover:opacity-90">
      <CaseStudyCard property={property} className={className} />
    </Link>
  )
}
