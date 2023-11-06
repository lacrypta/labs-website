'use client'

import Container from '../Layout/Container'
import { Heading, Text } from '@/components/UI'

import ValueItem from './ValueItem'

import { ValueProposal, Header } from './style'

export default function Component() {
  return (
    <ValueProposal>
      <Container>
        <Header>
          <Heading as="h2">Construimos en base a...</Heading>
          {/* <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text> */}
        </Header>
      </Container>

      <Container>
        <ValueItem
          title="Honestidad"
          description="Sinceridad y transparencia en todo momento."
        />
        <ValueItem
          title="Sinergia"
          description="Colaborar y trabajar de manera efectiva para alcanzar metas comunes."
        />
      </Container>
      <Container>
        <ValueItem
          title="Libertad"
          description="Tener la capacidad de tomar decisiones y actuar de forma autónoma y responsable."
        />
        <ValueItem
          title="Racionalidad"
          description="Tomar decisiones basadas en la lógica."
        />
        <ValueItem
          title="Humildad"
          description="Estar dispuesto a aprender y mejorar constantemente."
        />
      </Container>
      <Container>
        <ValueItem
          title="Merito"
          description="Reconocer y valorar los logros. Premiar el esfuerzo y la excelencia."
        />
        <ValueItem
          title="Innovacion"
          description="Ser creativo, estar abierto a nuevas posibilidades y mejorar constantemente."
        />
      </Container>
    </ValueProposal>
  )
}
