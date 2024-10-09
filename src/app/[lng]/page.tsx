'use client'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'

import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ValueProposalSection from '@/components/ValueProposalSection'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import LibsOpenSource from '@/components/libs-open-source'

import CommunicateIcon from '@/components/Icons/Communicate'
import EducateIcon from '@/components/Icons/Educate'
import IdeaIcon from '@/components/Icons/Idea'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { shuffle } from '@/lib/utils'
import TrustUsSection from '@/components/TrustUsSection'

const colors = [
  '#BF0E1A',
  '#F4941E',
  '#B47841',
  '#A252D5',
  '#4D4D4A',
  '#F40075',
  '#FFCE22',
  '#F25F01',
  '#1D3775',
  '#5A4D46',
  '#456B90',
  '#1ba710'
]

const items = [
  {
    title: 'Bitcoin++',
    description: 'Arg, 2024',
    elements: [
      {
        id: 1,
        title: '+5k',
        description: 'Tarjetas entregadas.',
        image: ''
      },
      {
        id: 2,
        title: '+40',
        description: 'Tatuajes vendidos.',
        image: ''
      },
      {
        id: 5,
        title: '',
        description: '.',
        image: '/placeholder.svg'
      },
      {
        id: 6,
        title: '',
        description: '.',
        image: '/placeholder.svg'
      }
    ]
  },
  {
    title: 'LaBitconf',
    description: 'Arg, 2023',
    elements: [
      {
        id: 1,
        title: '+5k',
        description: 'Tarjetas entregadas.',
        image: ''
      },
      {
        id: 2,
        title: '+40',
        description: 'Tatuajes vendidos.',
        image: ''
      },
      {
        id: 3,
        title: '+3K',
        description: 'Transacciones realizadas.',
        image: ''
      },
      {
        id: 4,
        title: '+5K',
        description: 'Tarjetas entregadas.',
        image: ''
      },
      {
        id: 5,
        title: '',
        description: '.',
        image: '/placeholder.svg'
      },
      {
        id: 6,
        title: '',
        description: '.',
        image: '/placeholder.svg'
      }
    ]
  }
]

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

  const randomColor = () => {
    const number = Math.floor(Math.random() * colors.length)

    return colors[number]
  }

  const shuffleEvents = (data: any) => {
    const value = shuffle(data)
    return value
  }

  return (
    <div className="pt-[60px]">
      <Navbar />

      <aside className="bg-black text-white py-8">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 w-full">
            <div>
              <p className="text-sm">12 de Septiembre, 21hs</p>
              <h4 className="text-xl font-bold">Cumpleanos de La Crypta</h4>
              {/* <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                cupiditate?
              </p> */}
            </div>
            <Button className="hidden lg:flex" size="lg" variant="ghost">
              Ver evento
            </Button>
          </div>
        </Container>
      </aside>

      <Hero />

      <TrustUsSection />

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

      {/*  */}
      <div className="relative overflow-hidden rounded-t-3xl lg:rounded-t-[120px] py-32">
        <div className="absolute top-0 z-0 w-full">
          <div className="max-w-[900px] h-[200px] mx-auto bg-[#B3F950] rounded-full blur-[400px]" />
        </div>
        <Container>
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              <Avatar className="border-4 border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="ml-[-16px] border-4 border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="ml-[-16px] border-4 border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-md">+15 miembros</p>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Imaginamos un mundo
              <br className="hidden lg:flex" /> donde Bitcoin es la norma
            </h2>
            <p className="text-lg">
              Permitiendo a cada individuo tener control total sobre su riqueza
              y privacidad,
              <br className="hidden lg:flex" /> sin depender de gobiernos ni
              corporaciones.
            </p>
            <Image
              src="/img/community.png"
              alt="Community"
              width={1127}
              height={662}
            />
          </div>
        </Container>
      </div>

      {/* Projects */}
      <ProjectsSection />

      <LibsOpenSource />

      <div className="w-full py-32">
        <div className="w-full max-w-[900px] mx-auto px-4">
          <div className="flex flex-col gap-8 max-w-[568px] mx-auto mb-16 text-center">
            <h3 className="text-3xl lg:text-5xl font-bold">
              ¿Qué es lo que hacemos?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center text-xl font-bold">
            <div className="relative -bottom-[40px] md:bottom-0 md:-right-[40px] flex flex-col items-start gap-4 w-full md:max-w-[33%] min-h-[250px] p-4 lg:p-8 bg-border rounded-3xl -rotate-6 shadow-2xl">
              <div className="inline-flex w-auto p-2 rounded-full bg-background">
                <IdeaIcon />
              </div>
              <span>Construimos</span>
            </div>
            <div className="relative flex flex-col items-start gap-4 w-full md:max-w-[33%] min-h-[250px] p-4 lg:p-8 bg-border rounded-3xl shadow-2xl">
              <div className="inline-flex w-auto p-2 rounded-full bg-background">
                <EducateIcon />
              </div>
              <span>Educamos</span>
            </div>
            <div className="relative -top-[40px] md:top-0 md:-left-[40px] flex flex-col items-start gap-4 w-full md:max-w-[33%] min-h-[250px] p-4 lg:p-8 bg-border rounded-3xl rotate-6 shadow-2xl">
              <div className="inline-flex w-auto p-2 rounded-full bg-background">
                <CommunicateIcon />
              </div>
              <span>Convocamos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <ValueProposalSection />

      {/* Miembros */}
      <AboutSection />

      {/* Participaciones */}
      <div className="w-full py-32">
        <div className="flex flex-col gap-12 w-full max-w-[900px] mx-auto px-4">
          <div className="text-center">
            <h2 className="font-bold text-3xl lg:text-7xl">Participaciones</h2>
          </div>
          {items?.map((item: any) => {
            return (
              <div className="grid grid-cols-1 md:grid-cols-[240px,1fr]">
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
                      .map((data: any) => {
                        if (!data) return null
                        if (data?.title)
                          return (
                            <Card
                              className="bg-border"
                              // style={{
                              //   backgroundColor: randomColor()
                              // }}
                            >
                              <CardContent className="px-4 py-8">
                                <h3 className="text-6xl font-bold">
                                  {data?.title}
                                </h3>
                                <p className="text-2xl">{data?.description}</p>
                              </CardContent>
                            </Card>
                          )

                        return (
                          <Card>
                            <CardContent className="p-0">
                              <img
                                src={data?.image}
                                className="w-full h-96 object-cover bg-red-500"
                              />
                            </CardContent>
                          </Card>
                        )
                      })}
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    {shuffleEvents(item.elements)
                      .filter((data: any) => data?.id % 2 === 0)
                      .map((data: any) => {
                        if (!data) return null
                        if (data?.title)
                          return (
                            <Card
                              className="bg-border"
                              // style={{
                              //   backgroundColor: randomColor()
                              // }}
                            >
                              <CardContent className="px-4 py-8">
                                <h3 className="text-6xl font-bold">
                                  {data?.title}
                                </h3>
                                <p className="text-2xl">{data?.description}</p>
                              </CardContent>
                            </Card>
                          )

                        return (
                          <Card>
                            <CardContent className="p-0">
                              <img
                                src="/placeholder.svg"
                                className="w-full h-96 object-cover bg-red-500"
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
