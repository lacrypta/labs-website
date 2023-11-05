'use client'

import { ReactNode, useState, useEffect } from 'react'

import { Plus } from '@/components/Icons'
import { Icon } from '@/components/UI'

import { Item, Trigger, Body } from './styles'

interface ComponentProps {
  title: string
  description: string
  children?: ReactNode
}

export default function Component(props: ComponentProps) {
  const { title, description, children } = props

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Item>
      <Trigger className={open ? 'open' : ''} onClick={handleClick}>
        <h3>{title}</h3>
        <Icon>
          <Plus />
        </Icon>
      </Trigger>
      <Body className={open ? 'open' : ''}>{description || children}</Body>
    </Item>
  )
}
