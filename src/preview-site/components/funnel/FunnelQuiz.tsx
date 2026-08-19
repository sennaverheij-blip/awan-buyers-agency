import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'preview-router'
import { Seo } from '../Seo'
import { Button } from '../ui/Button'
import { funnelCopy, quizQuestions, scoreQuiz } from '../../content/funnel'
import { GUIDE_FORM_ENDPOINT, QUIZ_FORM_ENDPOINT } from '../../content/placeholders'
import { getAttribution, track } from '../../lib/analytics'
import { cn } from '../../lib/utils'

type Phase = 'quiz' | 'result'

type Props = {
  seoPath: string
  bookPath: string
  /** Analytics content name prefix */
  contentName: string
  quizIntro?: { eyebrow: string; headline: string; lede: string }
  leadSource?: string
}

export function FunnelQuiz({
  seoPath,
  bookPath,
  contentName,
  quizIntro = funnelCopy.quiz,
  leadSource = 'funnel_quiz_nurture',
}: Props) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<Phase>('quiz')
  const [leadStatus, setLeadStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const result = useMemo(() => scoreQuiz(answers), [answers])
  const question = quizQuestions[step]
  const progress = ((step + (phase === 'result' ? 1 : 0)) / (quizQuestions.length + 1)) * 100

  useEffect(() => {
    track('funnel_quiz_start', { content_name: contentName })
  }, [contentName])

  function selectOption(optionId: string) {
    if (!question) return
    const next = { ...answers, [question.id]: optionId }
    setAnswers(next)
    track('funnel_quiz_answer', {
      question: question.id,
      answer: optionId,
      step: step + 1,
      content_name: contentName,
    })

    if (step < quizQuestions.length - 1) {
      window.setTimeout(() => setStep((s) => s + 1), 180)
      return
    }

    const scored = scoreQuiz(next)
    track('funnel_quiz_complete', {
      score: scored.score,
      qualified: scored.qualified,
      has_capital: scored.hasCapital,
      segment: scored.qualified ? 'book' : 'nurture',
      content_name: contentName,
    })
    window.setTimeout(() => setPhase('result'), 180)
  }

  async function submitNurtureLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('source', leadSource)
    data.set('quiz_score', String(result.score))
    data.set('quiz_answers', JSON.stringify(result.answers))
    data.set('has_capital', String(result.hasCapital))
    const attribution = getAttribution()
    for (const [k, v] of Object.entries(attribution)) data.set(k, v)

    setLeadStatus('submitting')
    track('funnel_lead_submit', {
      segment: 'nurture',
      score: result.score,
      content_name: contentName,
    })
    track('guide_form_submit', { location: contentName })

    const endpoint =
      QUIZ_FORM_ENDPOINT && !QUIZ_FORM_ENDPOINT.startsWith('PLACEHOLDER')
        ? QUIZ_FORM_ENDPOINT
        : GUIDE_FORM_ENDPOINT && !GUIDE_FORM_ENDPOINT.startsWith('PLACEHOLDER')
          ? GUIDE_FORM_ENDPOINT
          : null

    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 500))
      setLeadStatus('success')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('fail')
      setLeadStatus('success')
    } catch {
      setLeadStatus('error')
    }
  }

  return (
    <>
      <Seo path={seoPath} noindex />
      <section className="mx-auto max-w-lg px-5 py-10 sm:py-14">
        <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gold-500 transition-[width] duration-300"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>

        {phase === 'quiz' && question && (
          <>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              {quizIntro.eyebrow} · {step + 1}/{quizQuestions.length}
            </p>
            {step === 0 && (
              <>
                <h1 className="mt-3 text-h2 font-bold text-white">{quizIntro.headline}</h1>
                <p className="mt-3 text-body text-white/65">{quizIntro.lede}</p>
              </>
            )}
            <h2 className={cn('font-bold text-white', step === 0 ? 'mt-8 text-h3' : 'mt-3 text-h2')}>
              {question.prompt}
            </h2>
            <ul className="mt-6 space-y-3">
              {question.options.map((opt) => {
                const selected = answers[question.id] === opt.id
                return (
                  <li key={opt.id}>
                    <button
                      type="button"
                      onClick={() => selectOption(opt.id)}
                      className={cn(
                        'flex w-full min-h-14 items-center rounded-btn border px-4 py-3 text-left text-[0.9375rem] font-medium transition-colors',
                        selected
                          ? 'border-gold-500 bg-gold-500/15 text-white'
                          : 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10',
                      )}
                    >
                      {opt.label}
                    </button>
                  </li>
                )
              })}
            </ul>
            {step > 0 && (
              <button
                type="button"
                className="mt-6 min-h-11 text-small text-white/50 hover:text-white"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                ← Back
              </button>
            )}
          </>
        )}

        {phase === 'result' && result.qualified && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Recommended next step
            </p>
            <h1 className="mt-3 text-h2 font-bold text-white">{funnelCopy.qualified.headline}</h1>
            <p className="mt-3 text-body text-white/70">{funnelCopy.qualified.lede}</p>
            <Button
              to={bookPath}
              variant="primary"
              className="mt-8 w-full text-base"
              onClick={() =>
                track('cta_book_click', {
                  location: `${contentName}_qualified`,
                  score: result.score,
                })
              }
            >
              {funnelCopy.qualified.cta}
            </Button>
            <p className="mt-4 text-center text-small text-white/45">
              Or{' '}
              <Link to="/guide" className="text-white/70 underline-offset-2 hover:underline">
                grab the Playbook instead
              </Link>
            </p>
          </div>
        )}

        {phase === 'result' && !result.qualified && (
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Recommended next step
            </p>
            <h1 className="mt-3 text-h2 font-bold text-white">
              {!result.hasCapital || answers.capital === 'no'
                ? 'Secure deposit capital first — then we can move fast.'
                : funnelCopy.nurture.headline}
            </h1>
            <p className="mt-3 text-body text-white/70">
              {!result.hasCapital || answers.capital === 'no'
                ? 'A strong brief still needs deposit capital (or a clear path to raise it). Take the Playbook now, organise the deposit conversation, then book a triage call when you are ready.'
                : funnelCopy.nurture.lede}
            </p>

            {leadStatus === 'success' ? (
              <div className="mt-8 rounded-card border border-white/15 bg-white/5 p-6">
                <p className="font-semibold text-white">Check your inbox.</p>
                <p className="mt-2 text-small text-white/65">
                  Want to talk sooner?{' '}
                  <Link
                    to={bookPath}
                    className="font-semibold text-gold-400 underline-offset-2 hover:underline"
                    onClick={() =>
                      track('cta_book_click', { location: `${contentName}_nurture_success` })
                    }
                  >
                    Book a triage call
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form className="mt-8 space-y-4" onSubmit={submitNurtureLead}>
                <div>
                  <label htmlFor="quiz-name" className="text-small font-medium text-white/80">
                    Name
                  </label>
                  <input
                    id="quiz-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 min-h-12 w-full rounded-btn border border-white/20 bg-white/5 px-3 text-white placeholder:text-white/35"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-email" className="text-small font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="quiz-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 min-h-12 w-full rounded-btn border border-white/20 bg-white/5 px-3 text-white placeholder:text-white/35"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-phone" className="text-small font-medium text-white/80">
                    Phone <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    id="quiz-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1.5 min-h-12 w-full rounded-btn border border-white/20 bg-white/5 px-3 text-white placeholder:text-white/35"
                  />
                </div>
                {leadStatus === 'error' && (
                  <p className="text-small text-red-300" role="alert">
                    Could not send — try again or email us directly.
                  </p>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={leadStatus === 'submitting'}
                >
                  {leadStatus === 'submitting' ? 'Sending…' : funnelCopy.nurture.cta}
                </Button>
              </form>
            )}

            <p className="mt-6 text-center text-small text-white/45">
              Ready now anyway?{' '}
              <Link
                to={bookPath}
                className="text-white/75 underline-offset-2 hover:underline"
                onClick={() => track('cta_book_click', { location: `${contentName}_nurture_alt` })}
              >
                Book a triage call
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  )
}
