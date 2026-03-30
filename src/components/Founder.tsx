import { ArrowRight, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import sohaibImg from '../assets/sohaib-original.png'

export default function Founder() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sohaibImg}
                alt="Sohaib - Founder of AWAN Buyers Agency"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-accent text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">$8M+ Portfolio Built</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              Meet Your Buyers Agent
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Hi, I'm Sohaib.
            </h2>

            <p className="text-lg text-primary/70 mb-4">
              I'm the founder of AWAN Buyers Agency and a property investor myself.
            </p>
            <p className="text-lg text-primary/70 mb-4">
              Over the past decade, I've built a multi-million-dollar property portfolio by focusing on strategic
              acquisitions, strong fundamentals, and long-term growth. Through this journey, I learned that the
              biggest challenge for many investors isn't ambition — it's having the right strategy, guidance, and
              access to opportunities.
            </p>
            <p className="text-xl font-bold text-accent mb-4">
              That's why I created AWAN Buyers Agency.
            </p>
            <p className="text-lg text-primary/70 mb-4">
              With more than 10 years of experience across construction, property investing, and business, I bring
              practical insight into how properties are built, valued, and positioned for growth. My goal is to help
              investors make informed decisions and secure properties that support long-term portfolio growth.
            </p>
            <p className="text-lg text-primary/70 mb-8">
              Whether you're purchasing your first investment property or expanding an existing portfolio, our role
              is to guide you through the entire acquisition process with clarity and confidence.
            </p>

            <button
              onClick={scrollToBooking}
              className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent transition-colors duration-300 flex items-center gap-2 font-semibold text-lg shadow-lg"
            >
              Book a Call <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
