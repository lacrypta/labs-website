import Image from 'next/image'

import { Text } from '@/components/UI'

import { People } from './style'

interface ComponentProps {
  data: any
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <People>
      <Image
        src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=128`}
        alt={data.username}
        width={32}
        height={32}
      />
      <Text>{data?.username}</Text>
    </People>
  )
}
