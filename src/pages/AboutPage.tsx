import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { CTABand } from '../components/ui/CTABand'
import { testimonials } from '../content/testimonials'
import { SITE } from '../content/site'
import {
  PLACEHOLDER_LICENCE,
  PLACEHOLDER_MEMBERSHIPS,
} from '../content/placeholders'
import sohaibImg from '../assets/sohaib-original.png'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function AboutPage() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo path="/about" />
      <section className="section-pad bg-navy-950 pt-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title={`Hi, I'm ${SITE.founder.name}.`}
              tone="dark"
              lede={`Founder of ${SITE.name} — a Sydney buyers agency built so someone is finally working for you.`}
            />
          </div>
          <div className="overflow-hidden rounded-media">
            <img
              src={sohaibImg}
              alt={`${SITE.founder.name}, ${SITE.founder.title}`}
              width={800}
              height={1000}
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-50">
        <div className="container-site grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-body text-ink-600">
            <p>
              I am a property investor myself. Over more than a decade across construction,
              investing and business, I learned that the biggest barrier for buyers is not
              motivation — it is having a clear strategy, disciplined due diligence, and access
              when the right asset appears.
            </p>
            <p>
              That is why I built Awan: licensed buyers representation with a flat fee, no conflict
              from selling property, and a process designed to reduce expensive mistakes.
            </p>
            <p>
              Whether you are buying your first home, your next home, or adding to a portfolio, our
              job is the same — get you the right property at the right price, and run the fight so
              you do not have to.
            </p>
          </div>
          <aside className="rounded-card border border-cream-100 bg-white p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-h3 text-ink-900">Credentials</h2>
            <ul className="mt-4 space-y-3 text-small text-ink-600">
              <li>
                <span className="font-medium text-ink-900">Licence:</span> {PLACEHOLDER_LICENCE}
              </li>
              {PLACEHOLDER_MEMBERSHIPS.map((m) => (
                <li key={m}>{m}</li>
              ))}
              <li>Based in {SITE.address.suburb}, serving {SITE.city}</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-cream-100">
        <div className="container-site">
          <SectionHeading eyebrow="Clients" title="What buyers say" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.quote} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABand location="about" onCallback={openCallback} />
    </>
  )
}
