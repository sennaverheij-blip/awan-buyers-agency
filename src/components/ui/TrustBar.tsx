import { PLACEHOLDER_LOGOS, PLACEHOLDER_STATS } from '../../content/placeholders'
import { StatBlock } from './StatBlock'
import { cn } from '../../lib/utils'

type Props = { className?: string }

export function TrustBar({ className }: Props) {
  if (PLACEHOLDER_LOGOS.length > 0) {
    return (
      <section
        className={cn('border-y border-cream-100 bg-cream-50 py-10', className)}
        aria-label="As featured in"
      >
        <div className="container-site">
          <p className="eyebrow mb-6 text-center">As featured in / trusted by</p>
          <ul className="flex flex-wrap items-center justify-center gap-10">
            {PLACEHOLDER_LOGOS.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt={logo.name} className="h-8 w-auto opacity-70" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('border-y border-cream-100 bg-cream-50 py-12', className)}>
      <div className="container-site">
        <p className="eyebrow mb-8 text-center">Outcomes worth verifying</p>
        <div className="grid gap-8 sm:grid-cols-3">
          {PLACEHOLDER_STATS.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              display={stat.display}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
        <p className="mt-6 text-center text-small text-ink-600">
          Stats marked PLACEHOLDER need your verified figures before launch — see PLACEHOLDERS.md.
        </p>
      </div>
    </section>
  )
}
