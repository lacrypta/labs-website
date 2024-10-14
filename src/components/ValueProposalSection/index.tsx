'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { DotPattern } from '../dot-pattern'

const values = [
  'honesty',
  'synergy',
  'liberty',
  'rationality',
  'modesty',
  'merit',
  'innovation'
]

export default function Component() {
  const t = useTranslations('values')

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % values.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative py-32">
      <div className="flex flex-col gap-8 w-full max-w-[568px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden flex gap-3 h-10 text-2xl lg:text-4xl">
            <div
              className="transition-transform duration-400 ease-in-out text-end"
              style={{
                transform: `translateY(-${currentIndex * 100}%)`
              }}
            >
              {values?.map((value, index) => {
                if (!value) return null
                const title = t(value)

                return (
                  <div key={index} className="h-10 leading-none font-extrabold">
                    {title}
                  </div>
                )
              })}
            </div>
            <span className="leading-none">en cada proyecto.</span>
          </div>
        </div>

        <div className="max-w-[568px] mx-auto text-center">
          <p className="text-lg text-white/70">
            En La Crypta, cada valor impulsa nuestro enfoque en crear soluciones
            eficientes, seguras y abiertas, fundamentadas en principios que
            guían todo nuestro trabajo.
          </p>
        </div>
      </div>
      <DotPattern
        dotColor="#ffffff"
        dotSize={2}
        gap={32}
        className="absolute inset-0 z-0 opacity-20"
      />
    </div>
  )
}
