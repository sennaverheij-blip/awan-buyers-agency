import { testimonials } from '../../content/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'
import { FadeIn } from '../ui/FadeIn'

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-cream-50">
      <div className="container-site">
        <SectionHeading
          eyebrow="Client words"
          title="Outcomes you can picture."
          lede="Anonymised quotes from the previous site. Supply real names and photos when cleared — see PLACEHOLDERS.md."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.quote} delay={i * 60}>
              <TestimonialCard {...t} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
