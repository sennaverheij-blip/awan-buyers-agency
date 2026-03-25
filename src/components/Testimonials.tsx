import { useState, useEffect } from 'react'
import { Star, ArrowRight, ChevronLeft, ChevronRight, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const testimonials = [
  {
    type: 'Property Investor',
    location: 'Palmyra, WA',
    badge: '70% value increase',
    quote: "AWAN helped me acquire an investment property that has grown 70% in value through strategic renovation. Their data-driven approach identified the opportunity before the market caught on. Cashflow positive from day one with strong capital growth.",
  },
  {
    type: 'Investment Portfolio Builder',
    location: 'Beaconsfield, QLD',
    badge: '8% annual growth',
    quote: "Secured a premium property that has delivered consistent 8% growth year-on-year. The off-market access and negotiation expertise made all the difference. This is my third property with AWAN — they consistently outperform.",
  },
  {
    type: 'Strategic Investor',
    location: 'Girrawheen, WA',
    badge: '8.82% rental yield',
    quote: "Found an undervalued property with 8.82% rental yield that has grown substantially in value. AWAN's market analysis identified a high-growth pocket before it became mainstream. The ROI has exceeded all projections.",
  },
  {
    type: 'Multi-Property Investor',
    location: 'Belmont, WA',
    badge: '9.33% growth achieved',
    quote: "Achieved 9.33% growth with strong rental returns. Their renovation strategy added instant equity while maintaining positive cashflow. The dual occupancy potential they identified will unlock even more value long-term.",
  },
]

const accreditations = ['REIV', 'Licensed Agent', 'REBAA', '5-Star Rated']

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            Don't just take our word for it — hear from the investors who have built their
            portfolios through our expert guidance.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[testimonials[current], testimonials[(current + 1) % testimonials.length]].map((t, idx) => (
                  <div
                    key={`${current}-${idx}`}
                    className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      {t.badge}
                    </span>
                    <p className="text-primary/70 leading-relaxed mb-6">"{t.quote}"</p>
                    <div className="border-t border-primary/10 pt-4">
                      <p className="font-semibold text-primary">{t.type}</p>
                      <p className="text-sm text-primary/50">{t.location}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    i === current ? 'bg-accent' : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {accreditations.map((a) => (
            <div key={a} className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-primary/10">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium text-primary text-sm">{a}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-3">Ready to Join Our Success Stories?</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let us help you achieve your investment goals. Your success story could be next.
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/80 transition-colors duration-300 inline-flex items-center gap-2 font-semibold text-lg shadow-lg"
          >
            Start Your Journey Today <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
