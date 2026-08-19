import { SITE } from '../../content/site'
import { cn } from '../../lib/utils'

type Props = {
  className?: string
  subtitleClassName?: string
  showSubtitle?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'text-[1.55rem]',
  md: 'text-[1.55rem] sm:text-[1.75rem] lg:text-[1.9rem]',
  lg: 'text-3xl',
} as const

/** Pre-rebuild gold-W wordmark — no brand experiments without Sohaib approval. */
export function BrandMark({
  className,
  subtitleClassName,
  showSubtitle = true,
  size = 'md',
}: Props) {
  return (
    <span className={cn('flex flex-col leading-none', className)}>
      <span className={cn('font-brand tracking-[0.04em] text-white', sizeClass[size])}>
        A<span className="text-gold-500">W</span>AN
      </span>
      {showSubtitle ? (
        <span
          className={cn(
            'text-[0.5625rem] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-[0.625rem] sm:tracking-[0.2em]',
            subtitleClassName,
          )}
        >
          Buyers Agency
        </span>
      ) : null}
      <span className="sr-only">{SITE.name}</span>
    </span>
  )
}
