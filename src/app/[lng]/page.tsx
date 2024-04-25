'use client'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'

import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ValueProposalSection from '@/components/ValueProposalSection'

export default function Page() {
  // const locale = useLocale()
  // const t = useTranslations()
  // const [isPending, startTransition] = useTransition()
  // function changeLanguage(nextLocale: string) {
  //   startTransition(() => {
  //     const expire = new Date(Date.now() + 86400 * 365 * 1000).toUTCString()
  //     document.cookie = `NEXT_LOCALE=${nextLocale}; expires=${expire}; path=/`
  //     window.location.reload()
  //   })
  // }

  return (
    <>
      <Navbar />

      <Hero />

      {/* <button
        onClick={() => {
          if (locale !== 'en') changeLanguage('en')
        }}
      >
        ingles
      </button>

      <button
        onClick={() => {
          if (locale !== 'es') changeLanguage('es')
        }}
      >
        español
      </button> */}

      <AboutSection />

      <ProjectsSection />

      <ValueProposalSection />

      <FaqSection />

      <Footer />
    </>
  )
}
