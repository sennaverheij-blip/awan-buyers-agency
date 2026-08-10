import { Button } from './Button'
import { cn } from '../../lib/utils'
import { track } from '../../lib/analytics'

type Props = {
  title?: string
  subtitle?: string
  location: string
  onCallback?: () => void
  className?: string
}

export function CTABand({
  title = 'Your next property is already out there. Let’s go get it.',
  subtitle = 'Free 20-minute discovery call. No pressure, no obligation — leave with a clear plan either way.',
  location,
  onCallback,
  className,
}: Props) {
  return (
    <section className={cn('section-pad bg-navy-950', className)}>
      <div className="container-site max-w-3xl text-center">
        <h2 className="font-display text-h2 text-white">{title}</h2>
        <p className="mt-4 text-body text-cream-100/75">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            to="/book"
            variant="primary"
            onClick={() => track('cta_book_click', { location })}
          >
            Book a Free Discovery Call
          </Button>
          {onCallback && (
            <button
              type="button"
              className="min-h-11 text-small text-cream-100/70 underline-offset-4 hover:text-gold-400 hover:underline"
              onClick={onCallback}
            >
              or request a callback
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
