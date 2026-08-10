/** Verified business facts — swap placeholders in placeholders.ts, not here. */
export const SITE = {
  name: 'Awan Buyers Agency',
  legalName: 'AWAN BUYERS AGENCY PTY LTD',
  shortName: 'AWAN',
  tagline: 'The unfair advantage on your side of the deal.',
  city: 'Sydney',
  region: 'Greater Sydney',
  founder: {
    name: 'Sohaib',
    fullName: 'Sohaib',
    title: 'Founder & Buyers Agent',
  },
  phone: {
    display: '+61 421 112 940',
    href: 'tel:+61421112940',
  },
  email: {
    display: 'sohaib@awanbuyersagency.com.au',
    href: 'mailto:sohaib@awanbuyersagency.com.au',
  },
  address: {
    line1: 'Suite 15, Level 6, 175 Macquarie Street',
    suburb: 'Parramatta',
    state: 'NSW',
    postcode: '2150',
    country: 'Australia',
  },
  bookingUrl:
    'https://calendly.com/sohaib-awanbuyersagency/30min?hide_gdpr_banner=1&primary_color=C2A15C',
  url: 'https://awanbuyersagency.com.au',
  year: new Date().getFullYear(),
} as const

export const BOOKING_URL = SITE.bookingUrl

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
] as const
