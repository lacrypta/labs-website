import { ReactNode } from 'react'

import { Icon } from './style'

interface ComponentProps {
  children: ReactNode
}

export default function Component(props: ComponentProps) {
  const { children } = props

  return <Icon>{children}</Icon>
}
