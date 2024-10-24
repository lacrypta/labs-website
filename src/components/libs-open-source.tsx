'use client'

import React from 'react'
import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from './ui/button'
import ArrowTopRight from './Icons/ArrowTopRight'
import { useTranslations } from 'next-intl'

const libs = [
  {
    title: 'Nomad',
    description: 'The Nomad Virtual Machine reference implementation.',
    url: 'https://github.com/lacrypta/nomad',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Opentimestamps',
    description: 'An OpenTimestamps client written in TypeScript.',
    url: 'https://github.com/lacrypta/typescript-opentimestamps',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Hodl',
    description:
      'Your Nostr and Lightning Provider. Just set up environment and start.',
    url: 'https://github.com/lacrypta/hodl-ar',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Linghting Bot',
    description: 'Integrate Bitcoin payments into your Discord server.',
    url: 'https://github.com/cuervoshi/lawallet-discord-bot',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  }
]

export default function LibsOpenSource() {
  const t = useTranslations('libraries')

  return (
    <>
      <section className="overflow-x-hidden w-full mt-8 pt-0 pb-16">
        <div className="mx-auto max-w-[900px] px-3">
          <Carousel
            className="overflow-x-hidden"
            opts={{
              loop: false,
              align: 'start'
            }}
            // plugins={[
            //   Autoplay({
            //     delay: 2000
            //   })
            // ]}
          >
            <div className="flex items-center w-full gap-4 mb-8">
              <div className="w-full">
                <h3 className="text-xl font-bold">{t('title')}</h3>
              </div>
              <div className="z-10 flex justify-end gap-4">
                <CarouselPrevious className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
                <CarouselNext className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
              </div>
            </div>
            <CarouselContent>
              {libs.map((lib, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col gap-1 h-full px-4 py-5 sm:p-6 bg-border rounded-3xl">
                    {/* <span className="inline-flex rounded-full">
                      <Image
                        className="h-10 w-10 rounded-full bg-black"
                        height={40}
                        width={40}
                        alt={lib.title}
                        src={lib.image.url}
                        loading="lazy"
                      />
                    </span> */}
                    <div className="flex items-center justify-between gap-8">
                      <h4 className="text-lg font-semibold">{lib.title}</h4>
                      <Button size="icon" variant="outline" asChild>
                        <Link target="_blank" href={lib?.url}>
                          <ArrowTopRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    <p className="flex-1">{lib.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  )
}
