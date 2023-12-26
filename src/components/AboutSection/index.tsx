'use client'

import Container from '../Layout/Container'
import { Divider, Heading, Link, Text, Flex } from '@/components/UI'

import Animal from '../Animal'
import Members from '../Members'

import { fontPrimary } from '@/style/fonts'
import { AboutSection, Header, List, Number } from './style'

const animals = [
  {
    name: 'Agus',
    animal: 'Gorila',
    color: '#D00003'
  },
  {
    name: 'Mariano',
    animal: 'Lechuza',
    color: '#FF8D00'
  },
  {
    name: 'Cami',
    animal: 'Panda',
    color: '#F5F4EA'
  },
  {
    name: 'Mica',
    animal: 'Abeja',
    color: '#FFCE00'
  },
  {
    name: 'Rapax',
    animal: 'Pulpo',
    color: '#AD4BDB'
  },
  {
    name: 'Naranja',
    animal: 'Tigre',
    color: '#F25F01'
  },
  {
    name: 'Guada',
    animal: 'Pinguino',
    color: '#FFCE22'
  },
  {
    name: 'JJ',
    animal: 'Mucuchies',
    color: '#B47841'
  },
  {
    name: 'Fer',
    animal: 'Cuervo',
    color: '#4D4D4A'
  },
  {
    name: 'Jona',
    animal: 'Llama',
    color: '#F40075'
  }
]

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
        {animals.map((animal, index) => (
          <Animal key={index} data={animal} />
        ))}
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
