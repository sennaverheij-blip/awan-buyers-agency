import { useMemo, useState } from 'react'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CaseStudyCard } from '../components/ui/CaseStudyCard'
import { CTABand } from '../components/ui/CTABand'
import { properties } from '../data/properties'
import { PLACEHOLDER_CASES_NOTE } from '../content/placeholders'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function ResultsPage() {
  const { openCallback } = useCallbackForm()
  const states = useMemo(
    () => ['All', ...Array.from(new Set(properties.map((p) => p.state))).sort()],
    [],
  )
  const [state, setState] = useState('All')

  const filtered = state === 'All' ? properties : properties.filter((p) => p.state === state)

  return (
    <>
      <Seo path="/results" />
      <section className="section-pad bg-navy-950 pt-32 sm:pt-36">
        <div className="container-site max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="Results"
            title="Proof in the purchases."
            tone="dark"
            lede="Real acquisitions from our records. Asking/guide comparisons need your verification before we claim “saved off asking”."
          />
        </div>
      </section>

      <section className="section-pad bg-ground">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="state-filter" className="text-small font-medium text-ink-900">
              Filter by state
            </label>
            <select
              id="state-filter"
              className="min-h-11 rounded-btn border border-border bg-white px-3 text-base"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <p className="mt-4 text-small text-ink-600">{PLACEHOLDER_CASES_NOTE}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <CaseStudyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABand location="results" onCallback={openCallback} />
    </>
  )
}
