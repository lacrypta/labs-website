import { Container } from './style'
interface ComponentProps {
  children: any
}

export default function Component(props: ComponentProps) {
  const { children } = props

  return <Container>{children}</Container>
}
