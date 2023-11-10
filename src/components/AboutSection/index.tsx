'use client'

import Container from '../Layout/Container'
import { Divider, Heading, Link, Text, Flex } from '@/components/UI'

import Animal from '../Animal'
import Members from '../Members'

import { fontPrimary } from '@/style/fonts'
import { AboutSection, Header, List, Number } from './style'

export default function Component() {
  return (
    <AboutSection>
      <Divider y={128} />
      <Container>
        <Header>
          <Heading as="h2">Somos animales de la selva cypherpunk.</Heading>
          {/* <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text>
          <Link href="#">Quiero saber mas</Link> */}
        </Header>
      </Container>
      <Divider y={24} />
      <List>
        <Animal data={{ name: 'Agus', animal: 'gorila', color: '#D00003' }} />
        <Animal
          data={{ name: 'Mariano', animal: 'lechuza', color: '#FF8D00' }}
        />
        <Animal data={{ name: 'Mica', animal: 'abeja', color: '#FFCE00' }} />
        <Animal data={{ name: 'Cami', animal: 'panda', color: '#F5F4EA' }} />
        <Animal data={{ name: 'Rapax', animal: 'pulpo', color: '#AD4BDB' }} />
        {/* <Animal data={{ name: 'Fer', animal: 'cuervo', color: '#' }} /> */}
        {/* <Animal data={{ name: 'Jona', animal: 'ciervo', color: '#' }} /> */}
      </List>
      <Divider y={64} />
      <Container>
        <Flex justify="center">
          <Heading as="h3">
            Pero mas que una manada, <br /> somos una comunidad de...
          </Heading>
        </Flex>
      </Container>
      <Divider y={24} />
      <Members>
        <Number>
          <span className={fontPrimary.className}>+1000</span>
          <span className={fontPrimary.className}>miembros</span>
        </Number>
      </Members>
    </AboutSection>
  )
}
