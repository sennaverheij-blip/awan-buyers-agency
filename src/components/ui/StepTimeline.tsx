import { processSteps } from '../../content/process'
import { cn } from '../../lib/utils'
import { useInView } from '../../hooks/useInView'

type Props = {
  expanded?: boolean
  className?: string
}

function Step({
  step,
  index,
  expanded,
}: {
  step: (typeof processSteps)[number]
  index: number
  expanded?: boolean
}) {
  const [ref, visible] = useInView<HTMLLIElement>()
  return (
    <li
      ref={ref}
      className={cn('fade-up relative', visible && 'is-visible')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <span className="flex size-11 items-center justify-center rounded-btn border border-gold-500 font-display text-lg text-gold-600">
            {step.number}
          </span>
          {index < processSteps.length - 1 && (
            <span className="mt-2 w-px flex-1 bg-cream-100" aria-hidden />
          )}
        </div>
        <div className="pb-10">
          <h3 className="font-display text-h3 text-ink-900">{step.title}</h3>
          <p className="mt-2 text-body text-ink-600">{step.summary}</p>
          {expanded && (
            <div className="mt-4 space-y-2 text-small text-ink-600">
              <p>{step.detail}</p>
              <p>
                <span className="font-medium text-ink-900">You:</span> {step.clientDoes}
              </p>
              <p>
                <span className="font-medium text-ink-900">Timing:</span> {step.timeframe}
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export function StepTimeline({ expanded, className }: Props) {
  return (
    <ol className={cn('max-w-3xl', className)}>
      {processSteps.map((step, index) => (
        <Step key={step.title} step={step} index={index} expanded={expanded} />
      ))}
    </ol>
  )
}
