'use client'

import Container from '../Layout/Container'
import { Heading } from '../UI'

import { Hero, Assets } from './style'

export default function Component() {
  return (
    <Hero>
      <Container>
        <div>
          <Heading as="h1">Una revolución disfrazada de inversión.</Heading>
          <p>
            Somos una comunidad dedicada a la educación y difusión del
            ecosistema <strong>Bitcoin en Argentina</strong>
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
