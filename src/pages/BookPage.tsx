import { useEffect } from 'react'
import { Seo } from '../components/Seo'
import { BookingEmbed } from '../components/ui/BookingEmbed'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { GoogleReviewsBadge } from '../components/ui/GoogleReviewsBadge'
import { testimonials } from '../content/testimonials'
import { track } from '../lib/analytics'

export default function BookPage() {
  useEffect(() => {
    track('booking_page_view')
  }, [])

  return (
    <>
      <Seo path="/book" />
      <section className="bg-ground px-4 pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-h1 text-ink-900">Book your free discovery call</h1>
          <ul className="mt-6 flex flex-col items-center gap-2 text-body text-ink-600 sm:flex-row sm:justify-center sm:gap-6">
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
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <BookingEmbed autoLoad />
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          {testimonials.slice(0, 2).map((t) => (
            <TestimonialCard key={t.quote} {...t} />
          ))}
        </div>
      </section>
    </>
  )
}
