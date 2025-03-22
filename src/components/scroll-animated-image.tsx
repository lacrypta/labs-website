'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollAnimatedImageProps {
  src: string
  alt: string
}

export function ScrollAnimatedImage({ src, alt }: ScrollAnimatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [, setContainerHeight] = useState(0)

  // const { isMobile } = useScreenDetector()
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [-1, 1], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
    // [isMobile ? '-20%' : '30%', isMobile ? '50%' : '-10%']
  )

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      // style={{ height: `${containerHeight}px` }}
    >
      <motion.div
        className="sticky overflow-hidden top-0 -md:top-32 aspect-video flex items-center justify-center"
        style={{
          scale,
          opacity,
          y
        }}
      >
        <motion.div className="relative overflow-hidden w-full h-full rounded-xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain md:object-cover pointer-events-none rounded-xl"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
