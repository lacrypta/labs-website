'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { useScreenDetector } from '@/hooks/use-screen-detector'

import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import AboutSection from '@/components/AboutSection'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ValueProposalSection from '@/components/ValueProposalSection'

import { Container } from '@/components/container'
import LibsOpenSource from '@/components/libs-open-source'
import CommunicateIcon from '@/components/Icons/Communicate'
import EducateIcon from '@/components/Icons/Educate'
import IdeaIcon from '@/components/Icons/Idea'
import TrustUsSection from '@/components/TrustUsSection'
import { AnimatedGrid } from '@/components/animated-grid'
import { ScrollAnimatedImage } from '@/components/scroll-animated-image'

export default function Page() {
  const t = useTranslations()
  // const locale = useLocale()
  // const [isPending, startTransition] = useTransition()
  // function changeLanguage(nextLocale: string) {
  //   startTransition(() => {
  //     const expire = new Date(Date.now() + 86400 * 365 * 1000).toUTCString()
  //     document.cookie = `NEXT_LOCALE=${nextLocale}; expires=${expire}; path=/`
  //     window.location.reload()
  //   })
  // }

  const { isMobile } = useScreenDetector()

  return (
    <div className="pt-[60px] overflow-x-hidden">
      <Navbar />
      <div className="relative z-0">
        {/* <aside className="relative z-10 py-8 bg-black border-b border-input text-white">
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 w-full">
              <div>
                <p className="text-sm">12 de Septiembre, 21hs</p>
                <h4 className="text-xl font-bold">Cumpleanos de La Crypta</h4>
              </div>
              <Button className="hidden lg:flex" variant="outline">
                Ver evento
                <ArrowTopRight />
              </Button>
            </div>
          </Container>
        </aside> */}

        <Hero />

        <TrustUsSection />

        {/* <AnimatedGrid
          angle={isMobile ? 60 : 40}
          className="z-0 rotate-180 top-0"
        /> */}
        <AnimatedGrid angle={isMobile ? 60 : 40} className="z-0 bottom-0" />
      </div>

      {/*  */}
      <div className="relative z-20 overflow-hidden flex flex-col rounded-t-3xl lg:rounded-t-[120px] pt-64 shadow-[0 -35px -60px -15px red] bg-gradient-to-t from-transparent to-[#B3F950]/15">
        <Container className="flex flex-col gap-4 pb-32">
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              <div className="relative z-30 w-10 h-10 bg-[#4D4D4A] rounded-full border-4 border-border">
                <Image src={`/img/animal/crow.png`} alt={`Crow, Fer`} fill />
              </div>
              <div className="relative z-20 w-10 h-10 -ml-4 bg-[#D0A54D] rounded-full border-4 border-border">
                <Image
                  src={`/img/animal/scorpion.png`}
                  alt={`Scorpion, Cyber`}
                  fill
                />
              </div>
              <div className="relative z-10 w-10 h-10 -ml-4 bg-[#540885] rounded-full border-4 border-border">
                <Image
                  src={`/img/animal/ostrich.png`}
                  alt={`Ostrich, Negr0`}
                  fill
                />
              </div>
              <div className="relative z-00 w-10 h-10 -ml-4 bg-[#A86541] rounded-full border-4 border-border">
                <Image
                  src={`/img/animal/capybara.png`}
                  alt={`Capybara, Carpincho`}
                  fill
                />
              </div>
            </div>
            <p className="text-md text-muted-foreground">
              +2.400 {t('MEMBERS')}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:max-w-[500px] mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold">
              {t('community.title')}
            </h2>
            <p className="text-lg">{t('community.description')}</p>
          </div>
        </Container>
        <ScrollAnimatedImage src="/img/community.jpg" alt="Community" />
      </div>

      {/* Projects */}
      <ProjectsSection />

      <LibsOpenSource />

      <div className="w-full py-32">
        <div className="w-full max-w-[900px] mx-auto px-4">
          <div className="flex flex-col gap-8 max-w-[568px] mx-auto mb-16 text-center">
            <h3 className="text-3xl lg:text-5xl font-bold">
              {t('pillars.title')}
            </h3>
            {/* <p>{t('pillars.description')}</p> */}
          </div>
          <div className="flex flex-col md:flex-row justify-center text-xl font-bold">
            <div
              className="rotate-6 md:-rotate-6 relative md:-right-[40px] flex w-full md:max-w-[33%] min-h-[250px] shadow-2xl bg-cover bg-center  rounded-3xl duration-300 lg:hover:scale-125 lg:hover:z-10"
              style={{ backgroundImage: 'url(/img/construimos.webp)' }}
            >
              <div className="flex flex-col items-start justify-end gap-1 w-full h-auto p-4 lg:p-8 bg-gradient-to-b from-transparent to-background/80 to-30">
                <IdeaIcon />
                <span>{t('pillars.item_1')}</span>
              </div>
            </div>
            <div
              className="relative flex w-full md:max-w-[33%] min-h-[250px] rounded-3xl shadow-2xl bg-cover bg-center duration-300 lg:hover:scale-125 lg:hover:z-10"
              style={{ backgroundImage: 'url(/img/educamos.webp)' }}
            >
              <div className="flex flex-col items-start justify-end gap-1 w-full h-auto p-4 lg:p-8 bg-gradient-to-b from-transparent to-background/80 to-30">
                <EducateIcon />
                <span>{t('pillars.item_2')}</span>
              </div>
            </div>
            <div
              className="-rotate-6 md:rotate-6 relative md:-left-[40px] flex w-full md:max-w-[33%] min-h-[250px] rounded-3xl  shadow-2xl bg-cover bg-center duration-300 lg:hover:scale-125 lg:hover:z-10"
              style={{ backgroundImage: 'url(/img/convocamos.webp)' }}
            >
              <div className="flex flex-col items-start justify-end gap-1 w-full h-auto p-4 lg:p-8 bg-gradient-to-b from-transparent to-background/80 to-30">
                <CommunicateIcon />
                <span>{t('pillars.item_3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Miembros */}
      <AboutSection />

      {/* Valores */}
      <ValueProposalSection />

      {/* Participaciones */}
      {/* <div className="w-full py-32">
        <div className="flex flex-col gap-12 w-full max-w-[900px] mx-auto px-4">
          <div className="text-center">
            <h2 className="font-bold text-3xl lg:text-7xl">
              {t('events.title')}
            </h2>
          </div>
          {items?.map((item, index) => {
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-[240px,1fr]"
                key={index}
              >
                <div className="p-4">
                  <div className="sticky top-20">
                    <h3 className="font-bold text-2xl lg:text-4xl">
                      {item.title}
                    </h3>
                    <p className="text-xl text-white/70">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex-1 flex flex-col gap-4">
                    {shuffleEvents(item.elements)
                      .filter((data: any) => data?.id % 2 !== 0)
                      .map((data: any, key) => {
                        if (!data) return null
                        if (data?.title)
                          return (
                            <Card className="rounded-none" key={key}>
                              <CardContent className="px-4 py-8">
                                <h3 className="text-6xl font-bold">
                                  {data?.title}
                                </h3>
                                <p className="text-2xl">{data?.description}</p>
                              </CardContent>
                              <DotPattern
                                dotColor="#ffffff"
                                dotSize={2}
                                gap={32}
                                className="absolute inset-0 z-0 opacity-20"
                              />
                            </Card>
                          )

                        return (
                          <Card key={key}>
                            <CardContent className="relative p-0">
                              <img
                                src={`/img/events/${item.tag}/${data?.image}`}
                                className="w-full max-h-96 bg-border object-cover object-center"
                              />
                            </CardContent>
                          </Card>
                        )
                      })}
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    {shuffleEvents(item.elements)
                      .filter((data: any) => data?.id % 2 === 0)
                      .map((data: any, key) => {
                        if (!data) return null
                        if (data?.title)
                          return (
                            <Card className="rounded-none">
                              <CardContent className="px-4 py-8">
                                <h3 className="text-6xl font-bold">
                                  {data?.title}
                                </h3>
                                <p className="text-2xl">{data?.description}</p>
                              </CardContent>
                              <DotPattern
                                dotColor="#ffffff"
                                dotSize={2}
                                gap={32}
                                className="absolute inset-0 z-0 opacity-20"
                              />
                            </Card>
                          )

                        return (
                          <Card key={key}>
                            <CardContent className="relative p-0">
                              <img
                                src={`/img/events/${item.tag}/${data?.image}`}
                                className="w-full max-h-96 bg-border object-cover object-center"
                              />
                            </CardContent>
                          </Card>
                        )
                      })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
