import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { track } from '../../lib/analytics'
import { cn } from '../../lib/utils'
import type { FaqItem } from '../../content/faqs'

type Props = {
  items: FaqItem[]
  className?: string
}

export function FaqAccordion({ items, className }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className={cn('divide-y divide-cream-100 border-y border-cream-100', className)}>
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full min-h-11 items-center justify-between gap-4 py-5 text-left font-medium text-ink-900"
                onClick={() => {
                  const next = isOpen ? null : index
                  setOpen(next)
                  if (!isOpen) track('faq_open', { question: item.question })
                }}
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    'size-5 shrink-0 text-gold-500 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-body text-ink-600"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
