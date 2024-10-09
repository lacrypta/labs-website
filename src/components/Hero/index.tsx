'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Button } from '../ui/button'

const logos = [
  { url: '/img/logos/bitfinex.png', width: 380, height: 46 },
  { url: '/img/logos/bitcoinplusplus.png', width: 241, height: 46 },
  { url: '/img/logos/labitconf.png', width: 220, height: 46 },
  { url: '/img/logos/rootstock.png', width: 257, height: 46 }
]

export default function Component() {
  const t = useTranslations('hero')

  const [duplicatedLogos, setDuplicatedLogos] = useState(logos)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth
        const clientWidth = scrollRef.current.clientWidth

        if (scrollWidth <= clientWidth) {
          setDuplicatedLogos([...logos, ...logos, ...logos])
        } else {
          setDuplicatedLogos(logos)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [logos])

  return (
    <div className="flex flex-col justify-center min-h-screen text-center">
      <div className="relative w-full max-w-[900px] h-full mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h1 className="text-6xl lg:text-9xl font-bold">{t('title')}</h1>
          <p className="text-lg lg:text-2xl text-white/70">
            <span>{t('subtitle_1')}</span>
            <br className="hidden lg:flex" />
            <span className="ml-1">{t('subtitle_2')}</span>
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Contactate con nosotros</Button>
            {/* <Button size="lg" variant="secondary">
              Conocenos
            </Button> */}
          </div>
        </div>

        {/* Video */}
        {/* <div className="w-full h-[500px]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div> */}
      </div>
    </div>
  )
}
