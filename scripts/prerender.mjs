#!/usr/bin/env node
/**
 * Post-build SEO prerender: copies dist/index.html into route folders and injects
 * unique title/description + static main content so crawlers see substance without JS.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const siteUrl = 'https://awanbuyersagency.com.au'

const pages = [
  {
    path: '/',
    file: 'index.html',
    title: 'Buyers Agent Sydney | Awan Buyers Agency',
    description:
      'Awan Buyers Agency searches, evaluates and negotiates on your behalf in Sydney — including off-market homes. Book a free discovery call.',
    heading: 'The unfair advantage on your side of the deal.',
    body: 'Independent Sydney buyers agent — search, evaluate, negotiate. Book a free discovery call.',
  },
  {
    path: '/services',
    file: 'services/index.html',
    title: 'Services | Awan Buyers Agency — Buyers Agent Sydney',
    description:
      'Full search & acquisition, auction bidding, and evaluate & negotiate tiers from Awan Buyers Agency in Sydney.',
    heading: 'Your entire purchase, handled.',
    body: 'Compare full search, auction bidding, and evaluate & negotiate service tiers.',
  },
  {
    path: '/how-it-works',
    file: 'how-it-works/index.html',
    title: 'How It Works | Awan Buyers Agency — Buyers Agent Sydney',
    description:
      'A clear four-step buyers agency process: discovery call, strategy, search and shortlist, secure and settle.',
    heading: 'A clear process. No surprises.',
    body: 'Discovery call, strategy & brief, search & shortlist, secure & settle.',
  },
  {
    path: '/results',
    file: 'results/index.html',
    title: 'Results | Awan Buyers Agency — Buyers Agent Sydney',
    description: 'Recent property purchases secured by Awan Buyers Agency.',
    heading: 'Proof in the purchases.',
    body: 'Case studies and recent acquisitions across Australian markets.',
  },
  {
    path: '/about',
    file: 'about/index.html',
    title: 'About | Awan Buyers Agency — Buyers Agent Sydney',
    description: 'Meet Sohaib, founder of Awan Buyers Agency.',
    heading: 'Meet Sohaib.',
    body: 'Why Awan exists — licensed, independent buyers representation in Sydney.',
  },
  {
    path: '/faq',
    file: 'faq/index.html',
    title: 'FAQ | Awan Buyers Agency — Buyers Agent Sydney',
    description: 'Costs, process, independence and coverage — FAQ from Awan Buyers Agency.',
    heading: 'Questions buyers actually ask.',
    body: 'Fees, timelines, independence and service areas.',
  },
  {
    path: '/book',
    file: 'book/index.html',
    title: 'Book a Free Discovery Call | Awan Buyers Agency',
    description: 'Book a free 20-minute discovery call with Awan Buyers Agency.',
    heading: 'Book your free discovery call.',
    body: 'Twenty minutes. Zero obligation. Leave with a clear plan.',
  },
  {
    path: '/guide',
    file: 'guide/index.html',
    title: "Property Buyer's Playbook | Awan Buyers Agency",
    description: "Download the free Property Buyer's Playbook from Awan Buyers Agency.",
    heading: 'Not ready to talk? Take the Playbook.',
    body: 'Free guide for buyers who want clarity before they book a call.',
  },
  {
    path: '/go',
    file: 'go/index.html',
    title: 'Buy with an unfair advantage | Awan Buyers Agency',
    description:
      'Sydney buyers agency — book a free triage call or take a 60-second quiz.',
    heading: 'Buy with an unfair advantage — without doing it alone.',
    body: 'Book a free triage call or take the qualifying quiz.',
  },
  {
    path: '/go/book',
    file: 'go/book/index.html',
    title: 'Book a free triage call | Awan Buyers Agency',
    description: 'Book a free 20-minute triage call with Awan Buyers Agency.',
    heading: 'Book your free triage call',
    body: 'Twenty minutes. Zero obligation. Leave with a clear plan.',
  },
  {
    path: '/go/quiz',
    file: 'go/quiz/index.html',
    title: '60-second buyers quiz | Awan Buyers Agency',
    description: 'Take a 60-second quiz to see if a Sydney buyers agent is right for you.',
    heading: 'See if a buyers agent is right for you right now',
    body: 'Four questions — then book a triage call or get the Playbook.',
  },
  {
    path: '/privacy',
    file: 'privacy/index.html',
    title: 'Privacy Policy | Awan Buyers Agency',
    description: 'Privacy policy for Awan Buyers Agency.',
    heading: 'Privacy Policy',
    body: 'How we collect and use personal information.',
  },
  {
    path: '/terms',
    file: 'terms/index.html',
    title: 'Terms of Use | Awan Buyers Agency',
    description: 'Terms of use for the Awan Buyers Agency website.',
    heading: 'Terms of Use',
    body: 'Terms governing use of this website.',
  },
]

function replaceMeta(html, attrName, value, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  const re = new RegExp(`<meta\\s+${attr}="${attrName}"\\s+content="[^"]*"\\s*/?>`, 'i')
  if (re.test(html)) {
    return html.replace(re, `<meta ${attr}="${attrName}" content="${value}" />`)
  }
  return html
}

function inject(html, page) {
  const canonical = `${siteUrl}${page.path === '/' ? '' : page.path}`
  let out = html
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  out = replaceMeta(out, 'description', page.description)
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  )
  out = replaceMeta(out, 'og:title', page.title, true)
  out = replaceMeta(out, 'og:description', page.description, true)

  const staticMain = `<header>
        <p>AWAN Buyers Agency</p>
        <nav>
          <a href="/services">Services</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/results">Results</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/book">Book a Free Call</a>
        </nav>
      </header>
      <main>
        <h1>${page.heading}</h1>
        <p>${page.body}</p>
        <p><a href="/book">Book a Free Discovery Call</a></p>
      </main>
      <footer>
        <p>+61 421 112 940 · sohaib@awanbuyersagency.com.au</p>
        <p><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></p>
      </footer>`

  const rootRe = /<div id="root">[\s\S]*?<\/div>\s*<\/body>/i
  if (!rootRe.test(out)) {
    console.error('Could not find #root in template for', page.path)
    process.exit(1)
  }
  out = out.replace(rootRe, `<div id="root">\n      ${staticMain}\n    </div>\n  </body>`)
  return out
}

if (!existsSync(join(dist, 'index.html'))) {
  console.error('dist/index.html missing — run vite build first')
  process.exit(1)
}

// Read freshly built index before we overwrite it
const template = readFileSync(join(dist, 'index.html'), 'utf8')

for (const page of pages) {
  const target = join(dist, page.file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, inject(template, page))
  console.log('prerendered', page.path)
}

writeFileSync(
  join(dist, '404.html'),
  inject(template, {
    path: '/404',
    file: '404.html',
    title: 'Page not found | Awan Buyers Agency',
    description: 'Page not found.',
    heading: 'This page is off-market.',
    body: 'The link may be outdated. Book a discovery call or head home.',
  }),
)

console.log('Prerender complete')
