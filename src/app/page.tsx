import Navbar from '@/components/Layout/Navbar'
import Container from '@/components/Layout/Container'
import Footer from '@/components/Layout/Footer'

import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ValueProposalSection from '@/components/ValueProposalSection'
import FaqSection from '@/components/FaqSection'

export default function Page() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutSection />

      <ProjectsSection />

      <ValueProposalSection />

      <FaqSection />
      <Footer />
    </>
  )
}
