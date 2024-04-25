import ImageNext from 'next/image'

import { Heading, Text } from '../UI'

import { Animal, Image } from './style'

interface ComponentProps {
  data: {
    name: string
    animal: string
    color: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <Animal>
      <Image $background={data.color}>
        <ImageNext
          src={`/img/animal/${data.animal.toLowerCase()}.png`}
          width={120}
          height={120}
          alt={`${data.name}, ${data.animal}`}
        />
      </Image>
      <div>
        <Heading as="h4">{data.name}</Heading>
        <Text isBold>
          #{data.animal.charAt(0).toUpperCase() + data.animal.slice(1)}
        </Text>
      </div>
    </Animal>
  )
}
