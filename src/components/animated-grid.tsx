'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedGridProps {
  angle?: number
  className?: string
}

export function AnimatedGrid({ angle = 0, className }: AnimatedGridProps = {}) {
  return (
    <div
      className={cn(
        'overflow-hidden absolute bottom-0 selection:pointer-events-none w-full h-full opacity-30 [perspective:200px] scale-150 rotate-180',
        className
      )}
      style={
        {
          '--grid-angle': `${angle}deg`
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{ transform: 'rotateX(var(--grid-angle))' }}
      >
        <div
          className={cn(
            'relative animate-grid',
            '[background-repeat:repeat] [background-size:20dvw_10dvw] h-full [inset:0%_0px] [transform-origin:100%_0_0]',
            '[background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]'
          )}
        />
      </div>
      <div className="absolute z-20 top-0 inset-0 h-full bg-gradient-to-t from-background to-transparent to-90% rotate-180" />
    </div>
  )
}
