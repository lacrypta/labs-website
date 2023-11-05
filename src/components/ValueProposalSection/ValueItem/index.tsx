import { Text } from '@/components/UI'

import { Value } from './style'

interface ComponentProps {
  image?: string
  title: string
  description: string
  url: string
}

export default function Component(props: ComponentProps) {
  const {
    image = 'https://placehold.co/50x50',
    title,
    description,
    url = '#'
  } = props

  return (
    <Value>
      <img src={image} />
      <div>
        <Text isBold>{title}</Text>
        <Text>{description}</Text>
      </div>
    </Value>
  )
}
