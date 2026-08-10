import { Link } from 'react-router'
import { SITE } from '../../content/site'
import sohaibImg from '../../assets/sohaib-original.png'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutTeaser() {
  return (
    <section className="section-pad bg-ground">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 overflow-hidden rounded-media lg:order-1">
          <img
            src={sohaibImg}
            alt={`${SITE.founder.name}, founder of ${SITE.name}`}
            width={800}
            height={1000}
            className="aspect-[4/5] h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About"
            title={`Meet ${SITE.founder.name}.`}
            lede={`Founder of ${SITE.name} — and a property investor myself.`}
          />
          <div className="mt-6 space-y-4 text-body text-ink-600">
            <p>
              Over the past decade I have bought and held property by focusing on fundamentals,
              not hype. The hardest part for most buyers is not ambition — it is having someone
              solely on their side of the table.
            </p>
            <p>
              That is why Awan exists: licensed, independent representation so you search less,
              negotiate stronger, and settle with clarity.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex min-h-11 items-center text-small font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Meet {SITE.founder.name} →
          </Link>
        </div>
      </div>
    </section>
  )
}
