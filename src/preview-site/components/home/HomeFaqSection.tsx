import { Link } from 'preview-router'
import { homeFaqs } from '../../content/faqs'
import { SectionHeading } from '../ui/SectionHeading'
import { FaqAccordion } from '../ui/FaqAccordion'

export function HomeFaqSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="The objections that usually come last." />
        <div className="mt-12">
          <FaqAccordion items={homeFaqs.slice(0, 6)} />
        </div>
        <p className="mt-10 text-small text-ink-600">
          Investing in Australian property, or need sharia-aware support? See the{' '}
          <Link
            to="/property-investment-australia"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            investment guide
          </Link>
          ,{' '}
          <Link
            to="/muslim-property-investors"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Muslim investors page
          </Link>
          , or the{' '}
          <Link
            to="/faq"
            className="font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            full FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
