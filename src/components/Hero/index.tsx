'use client'

import Container from '../Layout/Container'
import { Heading } from '../UI'

import { Hero, Assets } from './style'

export default function Component() {
  return (
    <Hero>
      <Container>
        <div>
          <Heading as="h1">Una revolucion disfrazada de inversion.</Heading>
          <p>
            <strong>Somos una ONG dedicada a la educación y difusión</strong>{' '}
            del ecosistema crypto
          </p>
        </div>
      </Container>
      <Assets>
        <img src="/img/world.png" />
        <div className="circle-world">
          <div className="dot"></div>
        </div>
      </Assets>
    </Hero>
  )
}
