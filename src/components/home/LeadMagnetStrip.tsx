import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { GUIDE_FORM_ENDPOINT } from '../../content/placeholders'
import { track } from '../../lib/analytics'
import { Button } from '../ui/Button'

type Props = {
  variant?: 'strip' | 'page'
}

export function LeadMagnetForm({ variant = 'strip' }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const navigate = useNavigate()

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('submitting')
    track('guide_form_submit')

    if (!GUIDE_FORM_ENDPOINT || GUIDE_FORM_ENDPOINT.startsWith('PLACEHOLDER')) {
      await new Promise((r) => setTimeout(r, 500))
      setStatus('success')
      if (variant === 'page') navigate('/guide?sent=1')
      return
    }

    try {
      const res = await fetch(GUIDE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('fail')
      setStatus('success')
      if (variant === 'page') navigate('/guide?sent=1')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success' && variant === 'strip') {
    return (
      <p className="text-body text-cream-100">
        Check your inbox — and{' '}
        <a href="/book" className="text-gold-400 underline-offset-2 hover:underline">
          book a discovery call
        </a>{' '}
        if you want to skip ahead.
      </p>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        variant === 'strip'
          ? 'flex w-full flex-col gap-3 sm:flex-row sm:items-stretch'
          : 'mt-8 space-y-4'
      }
    >
      <div className={variant === 'strip' ? 'flex-1' : undefined}>
        <label htmlFor="guide-email" className="sr-only">
          Email
        </label>
        <input
          id="guide-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className="min-h-11 w-full rounded-btn border border-navy-700 bg-navy-900 px-4 text-white placeholder:text-cream-100/40"
        />
      </div>
      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send me the guide'}
      </Button>
      {status === 'error' && (
        <p className="text-small text-red-300" role="alert">
          Could not send — try again or email us directly.
        </p>
      )}
    </form>
  )
}

export function LeadMagnetStrip() {
  return (
    <section className="bg-navy-900 py-12">
      <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-h3 text-white">Not ready to talk? Take the Playbook.</h2>
          <p className="mt-2 text-small text-cream-100/70">
            Free Property Buyer&apos;s Playbook — what to decide before you inspect, bid or exchange.
            PDF: PLACEHOLDER_ASSET.
          </p>
        </div>
        <div className="w-full max-w-md">
          <LeadMagnetForm />
        </div>
      </div>
    </section>
  )
}
