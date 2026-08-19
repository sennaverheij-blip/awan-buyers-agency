import { Seo } from '../components/Seo'
import { HomeHero } from '../components/home/HomeHero'
import { TrustBar } from '../components/ui/TrustBar'
import { ProblemSection } from '../components/home/ProblemSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { ResultsTeaser } from '../components/home/ResultsTeaser'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { AboutTeaser } from '../components/home/AboutTeaser'
import { LeadMagnetStrip } from '../components/home/LeadMagnetStrip'
import { HomeFaqSection } from '../components/home/HomeFaqSection'
import { CTABand } from '../components/ui/CTABand'
import { useCallbackForm } from '../components/layout/CallbackContext'

export default function Home() {
  const { openCallback } = useCallbackForm()

  return (
    <>
      <Seo path="/" />
      <HomeHero />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <ResultsTeaser />
      <TestimonialsSection />
      <AboutTeaser />
      <LeadMagnetStrip />
      <HomeFaqSection />
      <CTABand location="home-final" onCallback={openCallback} />
    </>
  )
}
