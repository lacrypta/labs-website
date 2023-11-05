'use client'

import { ReactNode } from 'react'
import { Flex } from './style'

interface ComponentProps {
  children: ReactNode
  gap?: 0 | 2 | 4 | 8
  direction?: 'row' | 'column'
  flex?: 0 | 1 | 'initial'
  justify?: 'start' | 'end' | 'space-between' | 'center'
  align?: 'start' | 'center' | 'end'
}

export default function Component(props: ComponentProps) {
  const {
    children,
    gap = 0,
    direction = 'row',
    flex = 'initial',
    justify = 'start',
    align = 'start'
  } = props

  return (
    <Flex
      $gap={`${gap}px`}
      $direction={direction}
      $flex={flex}
      $justify={justify}
      $align={align}
    >
      {children}
    </Flex>
  )
}
