import { Heading, Text, Link } from '@/components/UI'

import { Project } from './style'

interface ComponentProps {
  image?: string
  title: string
  description: string
  url: string
}

export default function Component(props: ComponentProps) {
  const {
    image = 'https://placehold.co/375x375',
    title,
    description,
    url = '#'
  } = props

  return (
    <Project>
      <img src={image} />
      <div>
        <Heading as="h3">{title}</Heading>
        <Text>{description}</Text>
        <Link href={url}>Visitar proyecto</Link>
      </div>
    </Project>
  )
}
