import { Heading, Text, Flex } from '../UI'

import { Animal } from './style'

interface ComponentProps {
  data: {
    name: string
    animal: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <Animal>
      <img src="https://placehold.co/240x240" />
      <div>
        <Heading as="h4">{data.name}</Heading>
        <Text isBold>#{data.animal}</Text>
      </div>
    </Animal>
  )
}
