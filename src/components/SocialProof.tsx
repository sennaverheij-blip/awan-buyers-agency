import { Star, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { TestimonialsColumn } from './ui/testimonials-columns-1'
import type { Testimonial } from './ui/testimonials-columns-1'

const testimonials: Testimonial[] = [
  {
    text: "Secured an investment property with 7.29% growth and a strong 7.20% rental yield. AWAN's off-market network gave me access before it hit the market. Cashflow positive from settlement.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "Property Investor",
    role: "Armadale, WA",
  },
  {
    text: "Achieved 8% year-on-year growth on a property that was never publicly listed. Their market analysis and negotiation skills identified value the market hadn't recognized yet. Already seeing strong equity gains.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Growth Investor",
    role: "High Wycombe, WA",
  },
  {
    text: "AWAN identified a renovation opportunity that delivered 5.20% growth plus instant equity through strategic improvements. Third property with them — consistently exceptional results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Portfolio Builder",
    role: "Mount Lawley, WA",
  },
  {
    text: "AWAN helped me acquire an investment property that has grown 70% in value through strategic renovation. Their data-driven approach identified the opportunity before the market caught on.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    name: "Property Investor",
    role: "Palmyra, WA",
  },
  {
    text: "Secured a premium property that has delivered consistent 8% growth year-on-year. The off-market access and negotiation expertise made all the difference. This is my third property with AWAN.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    name: "Investment Portfolio Builder",
    role: "Beaconsfield, QLD",
  },
  {
    text: "Found an undervalued property with 8.82% rental yield that has grown substantially in value. AWAN's market analysis identified a high-growth pocket before it became mainstream.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    name: "Strategic Investor",
    role: "Girrawheen, WA",
  },
  {
    text: "Achieved 9.33% growth with strong rental returns. Their renovation strategy added instant equity while maintaining positive cashflow. The dual occupancy potential will unlock even more value.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    name: "Multi-Property Investor",
    role: "Belmont, WA",
  },
  {
    text: "Sohaib and his team made the entire process seamless. From strategy to settlement, everything was handled with professionalism. I felt confident every step of the way.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    name: "First-Time Investor",
    role: "Sydney, NSW",
  },
  {
    text: "The level of market knowledge is unmatched. They found me an off-market deal I never would have discovered on my own. Already planning my next acquisition with AWAN.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    name: "Repeat Client",
    role: "Perth, WA",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function SocialProof() {
  return (
    <section className="py-20 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            Google Reviews
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary mt-5 text-center">
            Trusted By Property Investors
          </h2>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary/60 text-sm font-medium">5.0 on Google</span>
          </div>

          <p className="text-center mt-3 text-primary/60 text-lg">
            Real results from real investors. See why clients keep coming back.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <a
            href="https://g.page/r/11z17fgmf9/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View all Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
