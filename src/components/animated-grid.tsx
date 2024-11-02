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
        'overflow-hidden absolute right-0 selection:pointer-events-none w-full h-full opacity-100 [perspective:600px]',
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
            '[background-repeat:repeat] [background-size:8dvw_4dvw] [width:200vw] [height:300vh] [inset:0%_0px] [margin-left:-51%] mx-auto',
            '[background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]'
          )}
        />
      </div>
      <div className="absolute z-20 bottom-0 inset-0 h-full bg-gradient-to-t from-background/50 to-background to-60%" />
    </div>
  )
}
