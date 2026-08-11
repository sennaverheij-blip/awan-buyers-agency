/**
 * Google Business Profile reviews — sourced from the public listing.
 * Only complete sentences visible on Google Maps are published (no invented text).
 * Source: https://share.google/v0fbrVSdIurPAS4ho
 */

export type Testimonial = {
  quote: string
  name: string
  location: string
  /** Star rating from Google (1–5) */
  rating: 5
  source: 'google'
  photo?: string
}

export const GOOGLE_BUSINESS = {
  name: 'Awan Buyers Agency Pty Ltd',
  rating: 5,
  reviewCount: 11,
  /** Short share link provided by the business */
  shareUrl: 'https://share.google/v0fbrVSdIurPAS4ho',
  mapsUrl:
    'https://www.google.com/maps/place/Awan+Buyers+Agency+Pty+Ltd/@-32.205415,136.1073692,15z/data=!4m8!3m7!1s0x6a73a5bae750bce7:0x65d7028ba25de0d6!8m2!3d-32.205415!4d136.1073692!9m1!1b1!16s%2Fg%2F11z17fgmf9',
  knowledgeGraphId: '/g/11z17fgmf9',
} as const

/** Featured Google reviews for on-site social proof */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Couldn't be happier with the guidance and service provided by Sohaib. I was struggling to decide on a location to buy my investments property and he broke it down for me and made it easy to understand. The process was smooth and Professional and I am so happy with the purchase we made!",
    name: 'Jeremy Francis',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      'I contacted Sohaib at Awan Buyers Agency and just a few months later, I secured my first investment property. As a first-time buyer, I expected the process to be stressful, but Sohaib made it incredibly smooth from start to finish.',
    name: 'Ray N',
    location: 'Google review · Local Guide',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      "There are plenty of buyers agents out there, but it's rare to come across someone like Sohaib. His mindset, attention to detail, and ability to stay across every stage of a project really sets him apart.",
    name: 'Sana Ahmed',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      "Working with Sohaib and his team was one of the best decisions I made for my property journey. They don't just help you buy — they stay with you throughout the whole process and genuinely care about the outcome.",
    name: 'Eddy Teddy',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      'Sohaib secured excellent investment properties for us, including an off-market opportunity we would never have found on our own. The purchases aligned perfectly with our budget and goals, and have shown strong growth since purchase.',
    name: 'Shayan A',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      "Sohaib was awesome. This was Mt first investment property and he helped guide me through thr whole process. The results speak for themself and he just made the whole process seemeless and exciting. Thank you Awan buyers agency, I'll be back.",
    name: 'P',
    location: 'Google review · Local Guide',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      "Sohaib helped me find a development site in QLD and honestly couldn't have asked for better guidance. He knew the zoning and council rules back to front, spotted a flood issue on one property before I wasted time on it.",
    name: 'Sid Brahmbhatt',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      "Sohaib's due diligence and ability to identify properties in high-growth streets across Australia is exceptional.",
    name: 'Adam AbuSohaib',
    location: 'Google review',
    rating: 5,
    source: 'google',
  },
  {
    quote:
      'Used Sohaib from Awan Buyers Agency for a couple of investment purchases recently and really happy with how it all turned out. He knows his stuff when it comes to the local market.',
    name: 'Chris Echeverria',
    location: 'Google review · Local Guide',
    rating: 5,
    source: 'google',
  },
]

/** Homepage / book embeds — top three */
export const featuredTestimonials = testimonials.slice(0, 3)
