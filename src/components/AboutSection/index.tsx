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
    animal: 'Gorila',
    color: '#BF0E1A',
    rol: 'CEO'
  },
  {
    name: 'Mariano',
    animal: 'Lechuza',
    color: '#F4941E',
    rol: 'CTO'
  },
  {
    name: 'Jota',
    animal: 'Mucuchies',
    color: '#B47841',
    rol: 'Staff Software Engineer'
  },
  {
    name: 'Rapax',
    animal: 'Pulpo',
    color: '#A252D5',
    rol: 'Community Lead'
  },
  {
    name: 'Fer',
    animal: 'Cuervo',
    color: '#4D4D4A',
    rol: 'Software Engineer'
  },
  {
    name: 'Jona',
    animal: 'Llama',
    color: '#F40075',
    rol: 'Product Engineer'
  },
  {
    name: 'Guada',
    animal: 'Pinguino',
    color: '#FFCE22',
    rol: 'Designer'
  },
  {
    name: 'Naranja',
    animal: 'Tigre',
    color: '#F25F01',
    rol: 'Video editor'
  },
  {
    name: 'Andrea',
    animal: 'Gato',
    color: '#1D3775',
    rol: 'DevRel'
  },
  {
    name: 'Fierillo',
    animal: 'Oso',
    color: '#5A4D46',
    rol: 'Community manager'
  },
  {
    name: 'Fede',
    animal: 'Tiburon',
    color: '#456B90',
    rol: 'Operations'
  },
  {
    name: 'Yayi',
    animal: 'Serpiente',
    color: '#1BA710',
    rol: 'Head of Communications'
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
