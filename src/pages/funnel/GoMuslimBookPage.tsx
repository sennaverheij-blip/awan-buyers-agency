import { useEffect } from 'react'
import { Seo } from '../../components/Seo'
import { BookingEmbed } from '../../components/ui/BookingEmbed'
import { funnelCopy } from '../../content/funnel'
import { track } from '../../lib/analytics'
import { testimonials } from '../../content/testimonials'
import { TestimonialCard } from '../../components/ui/TestimonialCard'

export default function GoMuslimBookPage() {
  const copy = funnelCopy.muslim.book

  useEffect(() => {
    track('funnel_book_view', { content_name: 'go_muslim_book' })
    track('booking_page_view', { location: 'funnel_muslim' })
  }, [])

  return (
    <>
      <Seo path="/go/muslim/book" noindex />
      <section className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
          {copy.eyebrow}
        </p>
        <h1 className="mt-3 text-h2 font-bold text-white">{copy.headline}</h1>
        <p className="mt-3 max-w-xl text-body text-white/70">{copy.lede}</p>
        <p className="mt-4 text-small text-white/55">
          Trusted sharia-compliant finance partners available when your brief needs that path.
        </p>

        <ul className="mt-6 flex flex-col gap-2 text-small text-white/60 sm:flex-row sm:gap-6">
          <li>20 minutes</li>
          <li className="hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li>Zero obligation</li>
          <li className="hidden sm:list-item" aria-hidden>
            ·
          </li>
          <li>Leave with a plan</li>
        </ul>

        <div className="mt-8 overflow-hidden rounded-card bg-white">
          <BookingEmbed autoLoad />
        </div>

        <div className="mt-10 rounded-card bg-white p-6 sm:p-8">
          <TestimonialCard {...testimonials[0]!} />
        </div>
      </section>
    </>
  )
}
