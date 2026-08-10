import { cn } from '../../lib/utils'

type Props = {
  quote: string
  name: string
  location: string
  photo?: string
  className?: string
}

export function TestimonialCard({ quote, name, location, className }: Props) {
  return (
    <figure className={cn(className)}>
      <blockquote className="text-lg leading-relaxed text-ink-900">“{quote}”</blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <p className="font-semibold text-ink-900">{name}</p>
        <p className="mt-1 text-small text-ink-600">{location}</p>
      </figcaption>
    </figure>
  )
}
