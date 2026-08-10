import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { FORM_ENDPOINT } from '../../content/placeholders'
import { track } from '../../lib/analytics'
import { Button } from './Button'
import { cn } from '../../lib/utils'

const budgets = [
  'Under $800k',
  '$800k – $1.2m',
  '$1.2m – $2m',
  '$2m – $3m',
  '$3m+',
]

const stages = [
  'Just researching',
  'Actively looking',
  'Found a property',
  'Missed out before',
]

type Props = {
  open: boolean
  onClose: () => void
}

export function CallbackForm({ open, onClose }: Props) {
  const titleId = useId()
  const firstField = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (open) {
      track('callback_form_open')
      setStatus('idle')
      const t = window.setTimeout(() => firstField.current?.focus(), 50)
      return () => window.clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('submitting')
    track('callback_form_submit')

    if (!FORM_ENDPOINT || FORM_ENDPOINT.startsWith('PLACEHOLDER')) {
      // Demo success until endpoint is wired
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('submit failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-950/70 p-4 sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-card bg-ground p-6 shadow-[var(--shadow-soft)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="font-display text-h3 text-ink-900">
              Request a callback
            </h2>
            <p className="mt-2 text-small text-ink-600">
              Prefer a phone call? Leave your details and we will be in touch within one business day.
            </p>
          </div>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-btn text-ink-600 hover:bg-ground-soft"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="mt-8 rounded-card border border-success/30 bg-white p-6">
            <p className="font-medium text-ink-900">Thanks — we have your details.</p>
            <p className="mt-2 text-body text-ink-600">
              Expect a call within one business day. Prefer not to wait?{' '}
              <a href="/book" className="text-navy-900 underline underline-offset-2">
                Book a discovery call
              </a>
              .
            </p>
            <Button variant="navy" className="mt-6" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <Field label="Name" name="name" required>
              <input
                ref={firstField}
                id="cb-name"
                name="name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>
            <Field label="Phone" name="phone" required>
              <input
                id="cb-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
              />
            </Field>
            <Field label="Email" name="email" required>
              <input
                id="cb-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>
            <Field label="Budget range" name="budget" required>
              <select id="cb-budget" name="budget" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Buying stage" name="stage" required>
              <select id="cb-stage" name="stage" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select stage
                </option>
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            {status === 'error' && (
              <p className="text-small text-red-700" role="alert">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
            <Button type="submit" variant="primary" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Request callback'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

const inputClass = cn(
  'mt-1.5 w-full rounded-btn border border-border bg-white px-3 py-3 text-base text-ink-900',
  'min-h-11 focus:border-gold-500',
)

function Field({
  label,
  name,
  children,
}: {
  label: string
  name: string
  required?: boolean
  children: ReactNode
}) {
  const id = `cb-${name}`
  return (
    <div>
      <label htmlFor={id} className="text-small font-medium text-ink-900">
        {label}
      </label>
      {children}
    </div>
  )
}
