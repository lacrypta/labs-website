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
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text>
        </Header>
      </Container>

      <Container>
        <ValueItem
          // image=""
          title="Honestidad"
          description="sinceridad y transparencia en todo momento."
          url=""
        />
        <ValueItem
          // image=""
          title="Sinergia"
          description="trabajar en equipo y colaborar de manera efectiva para alcanzar metas comunes."
          url=""
        />
      </Container>
      <Container>
        <ValueItem
          // image=""
          title="Libertad"
          description="tener la capacidad de tomar decisiones y actuar de forma autónoma y responsable."
          url=""
        />
        <ValueItem
          // image=""
          title="Racionalidad"
          description="tomar decisiones basadas en la lógica."
          url=""
        />
        <ValueItem
          // image=""
          title="Humildad"
          description="ser consciente de las propias limitaciones y estar dispuesto a aprender y mejorar constantemente."
          url=""
        />
      </Container>
      <Container>
        <ValueItem
          // image=""
          title="Merito"
          description="reconocer y valorar los logros y contribuciones propias y de los demás. Premiar el esfuerzo y la excelencia."
          url=""
        />
        <ValueItem
          // image=""
          title="Innovacion"
          description="ser creativo y estar abierto a nuevas posibilidades, herramientas y caminos, con el fin de encontrar nuevas soluciones y mejorar constantemente."
          url=""
        />
      </Container>
    </ValueProposal>
  )
}
