import Navbar from '@/components/Layout/Navbar'
import Container from '@/components/Layout/Container'

import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ValueProposalSection from '@/components/ValueProposalSection'

export default function Page() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutSection />

      <ProjectsSection />

      <ValueProposalSection />
    </>
  )
}
