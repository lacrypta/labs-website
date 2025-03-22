'use client'

import { useTranslations } from 'next-intl'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import Animal from '../Animal'

const animals = [
  {
    name: 'Agus',
    animal: 'Gorilla',
    color: '#BF0E1A',
    rol: 'CEO',
    image: 'agus',
    links: [
      {
        type: 'twitter',
        url: 'https://x.com/agustin_kassis'
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/agustinkassis'
      }
    ]
  },
  {
    name: 'Mariano',
    animal: 'Own',
    color: '#F4941E',
    rol: 'CTO',
    image: 'mariano',
    links: []
  },
  {
    name: 'Jota',
    animal: 'Mucuchies',
    color: '#B47841',
    rol: 'Staff Software Engineer',
    image: 'jota',
    links: [
      {
        type: 'website',
        url: 'https://juan.hodl.ar/'
      }
    ]
  },
  {
    name: 'Rapax',
    animal: 'Octopus',
    color: '#A252D5',
    rol: 'Full-stack Developer',
    image: 'rapax',
    links: [
      {
        type: 'website',
        url: 'https://rapax.dev/'
      }
    ]
  },
  // {
  //   name: 'Fer',
  //   animal: 'Cuervo',
  //   color: '#4D4D4A',
  //   rol: 'Software Engineer',
  //   image: ''
  // },
  {
    name: 'Jona',
    animal: 'Llama',
    color: '#F40075',
    rol: 'Product Engineer',
    image: 'jona',
    links: [
      {
        type: 'twitter',
        url: 'https://x.com/unllamas'
      },
      {
        type: 'website',
        url: 'https://jonallamas.com/'
      }
    ]
  },
  {
    name: 'Guada',
    animal: 'Penguin',
    color: '#FFCE22',
    rol: 'Designer',
    image: 'guada',
    links: [
      {
        type: 'website',
        url: 'https://guadita.com/'
      }
    ]
  },
  {
    name: 'Naranja',
    animal: 'Tiger',
    color: '#F25F01',
    rol: 'Video editor',
    image: 'naranja',
    links: [
      {
        type: 'twitter',
        url: 'https://x.com/dimenaranja'
      }
    ]
  },
  {
    name: 'Andrea',
    animal: 'Cat',
    color: '#1D3775',
    rol: 'DevRel',
    image: 'andrea',
    links: [
      {
        type: 'twitter',
        url: 'https://x.com/andreadcorreia'
      },
      {
        type: 'instagram',
        url: 'https://instagram.com/andreadiazcorreia'
      }
    ]
  },
  {
    name: 'Fierillo',
    animal: 'Bear',
    color: '#5A4D46',
    rol: 'Community manager',
    image: 'fierillo',
    links: [
      {
        type: 'twitter',
        url: 'https://x.com/fierillo'
      }
    ]
  },
  {
    name: 'Fede',
    animal: 'Shark',
    color: '#456B90',
    rol: 'Operations',
    image: 'fede',
    links: [
      {
        type: 'instagram',
        url: 'https://instagram.com/federey22'
      }
    ]
  }
]

export default function Component() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden w-full py-32">
      <div className="mx-auto max-w-[900px] px-3">
        <Carousel
          opts={{
            loop: false,
            align: 'start'
          }}
        >
          <div className="flex items-center w-full gap-4 mb-12">
            <div className="w-full">
              <h3 className="text-3xl lg:text-7xl font-bold">
                {t('about.title')}
              </h3>
            </div>
            <div className="z-10 flex justify-end gap-4">
              <CarouselPrevious className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
              <CarouselNext className="relative transform-none top-0 left-0 right-0 w-14 h-14" />
            </div>
          </div>
          <CarouselContent id="test">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {animals.map((animal: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Animal data={animal} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
