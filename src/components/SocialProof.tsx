import { Star, CheckCircle } from 'lucide-react'
import { motion } from 'motion/react'

const testimonials = [
  {
    type: 'Property Investor',
    location: 'Armadale, WA',
    label: 'Investment Property — 7.20% Yield',
    badge: '7.2% yield',
    quote: "Secured an investment property with 7.29% growth and a strong 7.20% rental yield. AWAN's off-market network gave me access before it hit the market. The numbers work perfectly — cashflow positive from settlement.",
  },
  {
    type: 'Growth Investor',
    location: 'High Wycombe, WA',
    label: 'Long-term Hold Strategy',
    badge: '8% growth',
    quote: "Achieved 8% year-on-year growth on a property that was never publicly listed. Their market analysis and negotiation skills identified value the market hadn't recognized yet. Already seeing strong equity gains.",
  },
  {
    type: 'Strategic Portfolio Builder',
    location: 'Mount Lawley, WA',
    label: 'Buy & Hold with Renovation',
    badge: '5.2% growth',
    quote: "AWAN identified a renovation opportunity that delivered 5.20% growth plus instant equity through strategic improvements. Their dual occupancy strategy will unlock even more value. Third property with them — consistently exceptional results.",
  },
]

const guarantees = [
  'Transparent pricing with clear fee structure',
  'Free property appraisal & market analysis',
  'Access to 1000+ off-market properties',
  'Licensed, insured & industry accredited',
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            17+ Verified Investment Properties
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Trusted By Property Investors
          </h2>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            Real results from real investment properties. Here's what our clients have achieved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-medium text-primary mb-1">{t.type}</p>
              <p className="text-sm text-primary/50 mb-2">{t.location}</p>
              <p className="text-xs text-sage font-medium mb-3">{t.label}</p>
              <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {t.badge}
              </span>
              <p className="text-primary/70 leading-relaxed text-sm">{t.quote}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {guarantees.map((g) => (
            <div key={g} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
              <CheckCircle className="w-5 h-5 text-sage shrink-0" />
              <span className="text-sm text-primary font-medium">{g}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
