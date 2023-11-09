'use client'

import Container from '../Layout/Container'
import { Heading, Text, Link } from '../UI'

import Project from './Project'

import { Projects, Header } from './style'

export default function Component() {
  return (
    <Projects>
      {/* Quienes somos */}
      <Container>
        <Header>
          <Heading as="h2">Creemos en el Open-Source.</Heading>
          {/* <Text>Todos nuestros proyectos son completamente libres para </Text>
          <Link href="#">Ver proyectos de la comunidad</Link> */}
        </Header>
      </Container>
      <Container>
        <Project
          image="/img/projects/wallet.png"
          title="LaWallet"
          description=""
          url=""
        />
        <Project
          image="/img/projects/pos.png"
          title="POS"
          description=""
          url=""
        />
      </Container>
    </Projects>
  )
}
