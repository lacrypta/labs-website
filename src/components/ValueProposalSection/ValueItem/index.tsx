import { Text } from '@/components/UI'

import { Value } from './style'

interface ComponentProps {
  title: string
  description: string
}

export default function Component(props: ComponentProps) {
  const { title, description } = props

  return (
    <Value>
      <Text isBold>{title}</Text>
      <Text>{description}</Text>
    </Value>
  )
}
