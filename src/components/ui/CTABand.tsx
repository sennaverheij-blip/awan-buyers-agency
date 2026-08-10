import { Button } from './Button'
import { cn } from '../../lib/utils'
import { track } from '../../lib/analytics'
import { useInView } from '../../hooks/useInView'

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
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={cn('section-pad bg-navy-950 fade-up', visible && 'is-visible', className)}
    >
      <div className="container-site max-w-2xl text-center">
        <h2 className="text-h2 font-bold text-white">{title}</h2>
        <p className="mt-5 text-body text-white/60">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              className="min-h-11 text-small text-white/50 underline-offset-4 hover:text-white hover:underline"
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
