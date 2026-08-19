import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { cn } from '../../lib/utils'

type Props = {
  value?: number | null
  display?: string
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

export function StatBlock({ value, display, suffix = '', prefix = '', label, className }: Props) {
  const [ref, visible] = useInView<HTMLDivElement>()
  const canCount = typeof value === 'number' && value > 0
  const counted = useCountUp(canCount ? value : 0, 1200, visible && canCount)

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <p className="font-display text-h2 text-navy-900 tabular-nums">
        {canCount ? (
          <>
            {prefix}
            {counted}
            {suffix}
          </>
        ) : (
          <span className="text-ink-600 text-body font-sans tracking-normal">
            {display ?? '—'}
          </span>
        )}
      </p>
      <p className="mt-2 text-small text-ink-600">{label}</p>
    </div>
  )
}
