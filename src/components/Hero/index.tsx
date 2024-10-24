'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { getBlocks, getBtcPrice } from '@/lib/utils/bitcoin'

const logos = [
  { url: '/img/logos/bitfinex.png', width: 380, height: 46 },
  { url: '/img/logos/bitcoinplusplus.png', width: 241, height: 46 },
  { url: '/img/logos/labitconf.png', width: 220, height: 46 },
  { url: '/img/logos/rootstock.png', width: 257, height: 46 }
]

export default function Component({ className }: any) {
  const t = useTranslations('hero')

  const [duplicatedLogos, setDuplicatedLogos] = useState(logos)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [btcPrice, setBtcPrice] = useState<number | null>(null)
  const [lastBlock, setLastBlock] = useState<number | null>(null)

  useEffect(() => {
    async function fetchData() {
      const price = await getBtcPrice()
      setBtcPrice(price)

      const block = await getBlocks()
      setLastBlock(block)
    }

    fetchData()
  }, [])

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
    <div
      className={cn(
        'relative z-10 flex flex-col justify-center min-h-screen text-center',
        className
      )}
    >
      <div className="relative w-full max-w-[900px] h-full mx-auto px-4 py-16">
        <div className="inline-flex gap-2 mx-auto p-1 bg-border rounded-full">
          <p className="flex items-center gap-1 py-1 px-4 bg-primary-foreground text-primary rounded-full">
            <span className="text-sm text-primary">U$D</span>
            <strong className="text-md">
              {btcPrice !== null
                ? btcPrice.toLocaleString('de-DE')
                : t('loading')}
            </strong>
          </p>
          <p className="flex items-center pr-4">
            <span className="text-sm text-muted-foreground">#</span>
            <span className="text-md">
              {lastBlock !== null
                ? lastBlock.toLocaleString('de-DE')
                : t('loading')}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:gap-12">
          <h1 className="text-6xl lg:text-9xl font-bold">{t('title')}</h1>
          <p className="text-lg lg:text-2xl text-white/70">
            <span>{t('subtitle')}</span>
          </p>
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
