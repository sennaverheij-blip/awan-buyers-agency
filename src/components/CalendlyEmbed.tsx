import { useEffect } from 'react'
import { Clock, Shield, Star } from 'lucide-react'
import { motion } from 'motion/react'

const trustItems = [
  { icon: Clock, stat: '30 min', label: 'Free Strategy Call' },
  { icon: Shield, stat: 'No Obligation', label: 'Just Expert Advice' },
  { icon: Star, stat: '98%', label: 'Client Satisfaction' },
]

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Book Your Free Consultation
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Ready To Stop Overpaying?
          </h2>
          <p className="mt-4 text-lg text-primary/60 max-w-3xl mx-auto">
            Schedule a free 30-minute strategy call to discuss your investment goals and discover
            how we can save you $50K-$200K+ on your next property.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--background)] rounded-2xl p-4 border border-primary/10 mb-12"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sohaib-awanbuyersagency/30min?hide_gdpr_banner=1&primary_color=C1A35F"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--background)] rounded-2xl p-6 text-center border border-primary/10"
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">{item.stat}</p>
              <p className="text-primary/60">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
