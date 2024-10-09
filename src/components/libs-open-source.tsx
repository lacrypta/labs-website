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

const libs = [
  {
    title: 'Nomad',
    description: 'Breve descripción de esa feature o característica',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Nomad',
    description: 'Breve descripción de esa feature o característica',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Nomad',
    description: 'Breve descripción de esa feature o característica',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  },
  {
    title: 'Nomad',
    description: 'Breve descripción de esa feature o característica',
    image: {
      url: '',
      width: 50,
      height: 50
    }
  }
]

export default function LibsOpenSource() {
  return (
    <>
      <section className="overflow-x-hidden w-full mt-8 py-16">
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
                <h3 className="text-xl font-bold">Librerias Open-Source</h3>
              </div>
              <div className="z-10 flex justify-end gap-4">
                <CarouselPrevious className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
                <CarouselNext className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
              </div>
            </div>
            <CarouselContent>
              {libs.map((lib, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col gap-4 px-4 py-5 sm:p-6 bg-border rounded-3xl">
                    <span className="inline-flex rounded-full">
                      <Image
                        className="h-10 w-10 rounded-full bg-black"
                        height={40}
                        width={40}
                        alt={lib.title}
                        src={lib.image.url}
                        loading="lazy"
                      />
                    </span>
                    <h4 className="text-sm font-semibold">{lib.title}</h4>
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
