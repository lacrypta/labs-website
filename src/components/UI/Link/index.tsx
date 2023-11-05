import { ReactNode } from 'react'
import Link from 'next/link'

import Icon from '../Icon'
import { CaretRight } from '@/components/Icons'

interface ComponentProps {
  children: ReactNode
  href: string
  target?: '_self' | '_blank'
}

export default function Component(props: ComponentProps) {
  const { children, href, target = '_self' } = props

  return (
    <Link href={href} target={target}>
      <span>{children}</span>
      <Icon>
        <CaretRight />
      </Icon>
    </Link>
  )
}
