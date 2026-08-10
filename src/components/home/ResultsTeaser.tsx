import { Link } from 'react-router'
import { properties } from '../../data/properties'
import { SectionHeading } from '../ui/SectionHeading'
import { CaseStudyCard } from '../ui/CaseStudyCard'
import { FadeIn } from '../ui/FadeIn'

const featured = [...properties].sort((a, b) => b.growthPercent - a.growthPercent).slice(0, 3)

export function ResultsTeaser() {
  return (
    <section className="section-pad bg-cream-100">
      <div className="container-site">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Results"
            title="Proof in the purchases."
            lede="A sample of properties we have helped secure. Numbers from our records — not invented savings."
          />
          <Link
            to="/results"
            className="inline-flex min-h-11 shrink-0 items-center text-small font-medium text-navy-900 underline-offset-2 hover:underline"
          >
            All results →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <CaseStudyCard property={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
