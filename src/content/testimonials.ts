/** Anonymised quotes migrated from the previous site. Photos are placeholders until real client assets are supplied. */
export type Testimonial = {
  quote: string
  name: string
  location: string
  photo?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Sohaib and his team made the entire process seamless. From strategy to settlement, everything was handled with professionalism. I felt confident every step of the way.',
    name: 'First-time investor',
    location: 'Sydney, NSW',
  },
  {
    quote:
      'The level of market knowledge is unmatched. They found me an off-market deal I never would have discovered on my own. Already planning my next acquisition with AWAN.',
    name: 'Repeat client',
    location: 'Perth, WA',
  },
  {
    quote:
      "AWAN helped me acquire an investment property that has grown substantially through strategic renovation. Their data-driven approach identified the opportunity before the market caught on.",
    name: 'Property investor',
    location: 'Palmyra, WA',
  },
]
