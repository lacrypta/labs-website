import { People } from './style'

interface ComponentProps {
  data: {
    image: string
    name: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <People>
      <img src="https://placehold.co/32x32" />
      <p>{data?.name}</p>
    </People>
  )
}
