import { PLACEHOLDER_LOGOS, PLACEHOLDER_STATS } from '../../content/placeholders'
import { cn } from '../../lib/utils'

type Props = { className?: string }

export function TrustBar({ className }: Props) {
  if (PLACEHOLDER_LOGOS.length > 0) {
    return (
      <section
        className={cn('border-y border-border bg-white py-10', className)}
        aria-label="As featured in"
      >
        <div className="container-site">
          <p className="mb-6 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
            As featured in
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-10">
            {PLACEHOLDER_LOGOS.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt={logo.name} className="h-7 w-auto opacity-60" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  const labels = [
    'Independent — we never sell',
    'Flat agreed fee',
    'On- and off-market access',
  ]

  return (
    <section className={cn('border-y border-border bg-white py-8', className)}>
      <div className="container-site">
        <ul className="flex flex-col items-stretch justify-center gap-0 text-center sm:flex-row sm:items-center sm:gap-0 md:gap-0">
          {labels.map((label) => (
            <li
              key={label}
              className="border-b border-border px-4 py-3 text-small font-medium text-ink-600 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-0 sm:last:border-r-0 md:px-8"
            >
              {label}
            </li>
          ))}
        </ul>
        {/* Stats stay in PLACEHOLDER_STATS for later — not shown until verified */}
        <span className="sr-only">{PLACEHOLDER_STATS.map((s) => s.label).join(', ')}</span>
      </div>
    </section>
  )
}
