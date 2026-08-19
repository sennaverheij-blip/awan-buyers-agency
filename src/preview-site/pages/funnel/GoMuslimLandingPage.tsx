import { useEffect } from 'react'
import { Link } from 'preview-router'
import { Seo } from '../../components/Seo'
import { Button } from '../../components/ui/Button'
import { funnelCopy } from '../../content/funnel'
import { track } from '../../lib/analytics'
import heroImg from '../../assets/hero-architecture.jpg'

export default function GoMuslimLandingPage() {
  const copy = funnelCopy.muslim.landing

  useEffect(() => {
    track('funnel_landing_view', { content_name: 'go_muslim_landing' })
  }, [])

  return (
    <>
      <Seo path="/go/muslim" noindex />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover object-[70%_center]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/50" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-xl flex-col justify-end px-5 pb-12 pt-16 sm:justify-center sm:pb-16 sm:pt-20">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            {copy.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{copy.lede}</p>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              to="/go/muslim/book"
              variant="primary"
              className="w-full text-base"
              onClick={() =>
                track('cta_book_click', {
                  location: 'funnel_muslim_landing',
                  content_name: 'triage',
                })
              }
            >
              {copy.primaryCta}
            </Button>
            <Link
              to="/go/muslim/quiz"
              className="inline-flex min-h-12 items-center justify-center rounded-btn border border-white/35 px-5 text-[0.9375rem] font-semibold text-white hover:border-white hover:bg-white/5"
              onClick={() => track('funnel_quiz_start', { location: 'funnel_muslim_landing' })}
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <p className="mt-6 text-center text-[0.8125rem] text-white/55">{copy.trust}</p>
          <p className="mt-4 text-center text-[0.75rem] text-white/40">
            Prefer to read first?{' '}
            <Link to="/muslim-property-investors" className="text-white/70 underline-offset-2 hover:underline">
              Muslim property investors guide
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
