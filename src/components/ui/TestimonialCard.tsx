import { cn } from '../../lib/utils'

type Props = {
  quote: string
  name: string
  location: string
  photo?: string
  className?: string
}

export function TestimonialCard({ quote, name, location, photo, className }: Props) {
  return (
    <figure
      className={cn(
        'rounded-card border border-cream-100 bg-white p-8 shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      <blockquote className="text-body text-ink-900">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        {photo ? (
          <img
            src={photo}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex size-12 items-center justify-center rounded-full bg-navy-900 font-display text-lg text-gold-400"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-ink-900">{name}</p>
          <p className="text-small text-ink-600">{location}</p>
        </div>
      </figcaption>
    </figure>
  )
}
