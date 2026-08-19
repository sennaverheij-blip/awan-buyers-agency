import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'

type Props = {
  quote: string
  name: string
  location: string
  photo?: string
  rating?: number
  className?: string
}

export function TestimonialCard({ quote, name, location, rating = 5, className }: Props) {
  return (
    <figure className={cn(className)}>
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-gold-500 text-gold-500" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-3 text-lg leading-relaxed text-ink-900">“{quote}”</blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <p className="font-semibold text-ink-900">{name}</p>
        <p className="mt-1 text-small text-ink-600">{location}</p>
      </figcaption>
    </figure>
  )
}
