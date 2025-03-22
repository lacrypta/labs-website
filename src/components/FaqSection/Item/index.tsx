'use client'

import { ReactNode, useState } from 'react'

// import { Icon, Heading } from '@/components/UI'

import { Item, Trigger, Body } from './styles'

interface ComponentProps {
  title: string
  description: string
  children?: ReactNode
}

export default function Component(props: ComponentProps) {
  const { description, children } = props

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Item>
      <Trigger className={open ? 'open' : ''} onClick={handleClick}>
        {/* <Heading as="h3">{title}</Heading>
        <Icon>
          <Plus />
        </Icon> */}
      </Trigger>
      <Body className={open ? 'open' : ''}>{description || children}</Body>
    </Item>
  )
}
