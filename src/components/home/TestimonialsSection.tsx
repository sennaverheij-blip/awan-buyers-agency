import { testimonials } from '../../content/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Client words"
          title="Outcomes you can picture."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t, i) => (
            <FadeIn key={t.quote} delay={i * 60}>
              <figure>
                <blockquote className="text-lg leading-relaxed text-ink-900">
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
      </div>
    </section>
  )
}
