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
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text>
          <Link href="#">Ver proyectos de la comunidad</Link>
        </Header>
        <Project
          // image=""
          title="LaWallet"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
      </Container>
      <Container>
        <Project
          // image=""
          title="POS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
        <Project
          // image=""
          title="Peronio"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
      </Container>
    </Projects>
  )
}
