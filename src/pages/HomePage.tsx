import Hero from '../components/home/Hero'
import ServicesOverview from '../components/home/ServicesOverview'
import IndustriesPreview from '../components/home/IndustriesPreview'
import RecentProjects from '../components/home/RecentProjects'
import WhyTriML from '../components/home/WhyTriML'
import DevelopmentProcess from '../components/home/DevelopmentProcess'
import TechnologyExpertise from '../components/home/TechnologyExpertise'
import ContactCTA from '../components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesPreview />
      <RecentProjects />
      <WhyTriML />
      <DevelopmentProcess />
      <TechnologyExpertise />
      <ContactCTA />
    </>
  )
}
