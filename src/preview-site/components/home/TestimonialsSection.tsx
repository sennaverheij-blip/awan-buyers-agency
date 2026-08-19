import { testimonials, GOOGLE_BUSINESS } from '../../content/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { GoogleReviewsBadge } from '../ui/GoogleReviewsBadge'
import { Star } from 'lucide-react'

const featured = testimonials.slice(0, 6)

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Google reviews"
            title="What clients say on Google."
            lede={`Verified reviews for ${GOOGLE_BUSINESS.name} — ${GOOGLE_BUSINESS.rating.toFixed(1)} stars from ${GOOGLE_BUSINESS.reviewCount} Google reviews.`}
          />
          <GoogleReviewsBadge className="shrink-0" />
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {featured.map((t, i) => (
            <FadeIn key={`${t.name}-${i}`} delay={i * 50}>
              <figure>
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-gold-500 text-gold-500" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p className="mt-1 text-small text-ink-600">{t.location}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
        <p className="mt-12 text-center text-small text-ink-500">
          Read all reviews on{' '}
          <a
            href={GOOGLE_BUSINESS.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Google Business Profile
          </a>
          .
        </p>
      </div>
    </section>
  )
}
