'use client'

import Container from '../Layout/Container'
import { Divider, Heading, Link, Text } from '@/components/UI'

import Animal from '../Animal'
import Members from '../Members'

import { AboutSection, Header, List, Number } from './style'

export default function Component() {
  return (
    <AboutSection>
      <Divider y={128} />
      <Container>
        <Header>
          <Heading as="h2">Somos animales de la selva cypherpunk.</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text>
          <Link href="#">Quiero saber mas</Link>
          {/* <a href="#">Quiero saber mas</a> */}
        </Header>
      </Container>
      <Divider y={24} />
      <List>
        <Animal data={{ name: 'Agus', animal: 'Gorila' }} />
        <Animal data={{ name: 'Mariano', animal: 'Lechuza' }} />
        <Animal data={{ name: 'Micaela', animal: 'Abeja' }} />
        <Animal data={{ name: 'Rapax', animal: 'Pulpo' }} />
        <Animal data={{ name: 'Fer', animal: 'Cuervo' }} />
        <Animal data={{ name: 'Jona', animal: 'Ciervo' }} />
      </List>
      <Divider y={64} />
      <Container>
        <Heading as="h3">
          Pero mas que una manada, somos una comunidad de...
        </Heading>
      </Container>
      <Divider y={24} />
      <Members>
        <Number>
          <span>+1000</span>
          <span>miembros</span>
        </Number>
      </Members>
    </AboutSection>
  )
}
