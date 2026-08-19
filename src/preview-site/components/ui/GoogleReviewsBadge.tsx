import { Star } from 'lucide-react'
import { GOOGLE_BUSINESS } from '../../content/testimonials'
import { cn } from '../../lib/utils'

type Props = {
  className?: string
  tone?: 'light' | 'dark'
}

export function GoogleReviewsBadge({ className, tone = 'light' }: Props) {
  const dark = tone === 'dark'
  return (
    <a
      href={GOOGLE_BUSINESS.shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-3 rounded-btn border px-4 py-3 transition-colors',
        dark
          ? 'border-white/15 bg-white/5 text-white hover:border-white/30'
          : 'border-border bg-white text-ink-900 hover:border-navy-900/30',
        className,
      )}
      aria-label={`Rated ${GOOGLE_BUSINESS.rating} out of 5 from ${GOOGLE_BUSINESS.reviewCount} Google reviews`}
    >
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-gold-500 text-gold-500" />
        ))}
      </span>
      <span className="text-small font-semibold">
        {GOOGLE_BUSINESS.rating.toFixed(1)} · {GOOGLE_BUSINESS.reviewCount} Google reviews
      </span>
    </a>
  )
}
