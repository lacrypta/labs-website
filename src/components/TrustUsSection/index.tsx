'use client'

import React from 'react'
import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

const logos = [
  { title: 'Bitfinex', url: '/img/logos/bitfinex.png', width: 380, height: 46 },
  {
    title: 'Bitcoin++',
    url: '/img/logos/bitcoinplusplus.png',
    width: 241,
    height: 46
  },
  {
    title: 'LaBitconf',
    url: '/img/logos/labitconf.png',
    width: 220,
    height: 46
  },
  {
    title: 'Rootstock',
    url: '/img/logos/rootstock.png',
    width: 257,
    height: 46
  }
]

export default function TrustUsSection() {
  return (
    <section className="overflow-x-hidden w-full py-32">
      <div className="mx-auto max-w-[900px] px-3">
        <Carousel
          className="overflow-x-hidden"
          opts={{
            loop: true,
            align: 'center',
            dragFree: false
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <div className="flex items-center w-full gap-4 mb-8">
            <div className="w-full text-center">
              <h2 className="text-xl font-bold">Confiaron en nosotros</h2>
            </div>
          </div>
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                <div className="flex justify-center items-center w-full max-w-[150px] h-full mx-auto p-4">
                  <Image
                    src={logo?.url}
                    alt={`${logo?.title} logo`}
                    width={logo?.width}
                    height={logo?.height}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
