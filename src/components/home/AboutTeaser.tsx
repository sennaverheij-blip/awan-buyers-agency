import { Link } from 'react-router'
import { SITE } from '../../content/site'
import sohaibImg from '../../assets/sohaib-original.png'
import { SectionHeading } from '../ui/SectionHeading'
import { PLACEHOLDER_LICENCE } from '../../content/placeholders'

export function AboutTeaser() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-media">
          <img
            src={sohaibImg}
            alt={`${SITE.founder.name}, founder of ${SITE.name}`}
            width={800}
            height={1000}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About"
            title={`Meet ${SITE.founder.name}.`}
            lede={`I'm the founder of ${SITE.name} — and a property investor myself.`}
          />
          <div className="mt-6 space-y-4 text-body text-ink-600">
            <p>
              Over the past decade I have bought and held property by focusing on fundamentals,
              not hype. The hardest part for most buyers is not ambition — it is having someone
              solely on their side of the table.
            </p>
            <p>
              That is why Awan exists: licensed, independent representation so you search less,
              negotiate stronger, and settle with clarity. Licence: {PLACEHOLDER_LICENCE}.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex min-h-11 items-center text-small font-medium text-navy-900 underline-offset-2 hover:underline"
          >
            Meet {SITE.founder.name} →
          </Link>
        </div>
      </div>
    </section>
  )
}
