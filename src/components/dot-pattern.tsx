'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface DotPatternProps {
  dotColor?: string
  backgroundColor?: string
  dotSize?: number
  gap?: number
  className?: string
}

export function DotPattern({
  dotColor = 'currentColor',
  backgroundColor = 'transparent',
  dotSize = 1,
  gap = 16,
  className
}: DotPatternProps) {
  // Calculate the size of the SVG based on the dot size and gap
  const svgSize = gap

  // Create the SVG for a single dot
  const dotSvg = encodeURIComponent(`
    <svg width="${svgSize}" height="${svgSize}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${svgSize / 2}" cy="${svgSize / 2}" r="${
        dotSize / 2
      }" fill="${dotColor}" />
    </svg>
  `)

  return (
    <div
      className={cn('w-full h-full', className)}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url("data:image/svg+xml,${dotSvg}")`,
        backgroundSize: `${svgSize}px ${svgSize}px`
      }}
    />
  )
}
