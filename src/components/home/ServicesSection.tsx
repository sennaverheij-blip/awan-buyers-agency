import { Link } from 'react-router'
import { serviceTiers } from '../../content/services'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { cn } from '../../lib/utils'

export function ServicesSection() {
  return (
    <section className="section-pad bg-navy-950">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we do"
          title="Your entire purchase, handled."
          tone="dark"
          lede="Three clear tiers. One standard of independence — we never sell property."
        />
        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {serviceTiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 60}>
              <article
                className={cn(
                  'grid gap-6 py-10 lg:grid-cols-12 lg:items-start lg:gap-10',
                  tier.popular && 'relative',
                )}
              >
                <div className="lg:col-span-4">
                  {tier.popular && (
                    <p className="eyebrow mb-3 text-gold-400">Most requested</p>
                  )}
                  <h3 className="text-h3 font-bold text-white">{tier.name}</h3>
                  <p className="mt-3 text-body text-white/60">{tier.promise}</p>
                </div>
                <ul className="space-y-2.5 lg:col-span-5">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-small text-white/70">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="lg:col-span-3 lg:justify-self-end lg:pt-1">
                  <Link
                    to="/services"
                    className="inline-flex min-h-11 items-center text-small font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
