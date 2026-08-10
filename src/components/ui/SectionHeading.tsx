import { cn } from '../../lib/utils'

type Props = {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className,
  as: Tag = 'h2',
}: Props) {
  return (
    <div
      className={cn(
        'max-w-prose',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag
        className={cn(
          'text-h2 font-display',
          tone === 'dark' ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </Tag>
      {lede && (
        <p
          className={cn(
            'mt-4 text-body',
            tone === 'dark' ? 'text-cream-100/75' : 'text-ink-600',
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
