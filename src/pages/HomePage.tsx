import Hero from '../components/home/Hero'
import ServicesOverview from '../components/home/ServicesOverview'
import ProblemsWeSolve from '../components/home/ProblemsWeSolve'
import FeaturedProduct from '../components/home/FeaturedProduct'
import TechnologyExpertise from '../components/home/TechnologyExpertise'
import DevelopmentProcess from '../components/home/DevelopmentProcess'
import ContactCTA from '../components/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProblemsWeSolve />
      <FeaturedProduct />
      <TechnologyExpertise />
      <DevelopmentProcess />
      <ContactCTA />
    </>
  )
}
