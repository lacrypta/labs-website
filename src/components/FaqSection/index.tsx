'use client'

import Container from '../Layout/Container'
import { Text, Heading } from '@/components/UI'

import Item from './Item'

import { Faq, List } from './style'

export default function Component() {
  return (
    <Faq>
      <Container>
        <div>
          <Heading as="h2">Preguntas frecuentes</Heading>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </p> */}
        </div>
        <List>
          <Item
            title="¿Qué es La Crypta?"
            description="Somos una comunidad dedicada a la educación, desarrollo y difusión del ecosistema Bitcoin. Nos enfocamos en proporcionar independencia y autonomía a la comunidad."
          />
          <Item
            title="¿Por qué valores?"
            description="Valoramos mucho estos conceptos porque creemos que son aspectos claves para que nuestra comunidad sea lo que aspiramos y continue creciendo."
          />
          <Item title="¿Qué eventos y actividades organizan?" description="">
            <Text>
              Nos encanta mantener una comunicación constante y cercana con
              nuestra comunidad. Es por eso que organizamos estas actividades
              regularmente:
            </Text>
            <ul>
              <li>
                <strong>Community Calls: </strong>Todos los martes a las 18hs en
                Discord y Twitch, donde nos reunimos para charlar y compartir.
                Un momento a la semana donde hablamos de nuestros proyectos,
                eventos, conocemos a los nuevos integrantes, debatimos ideas y
                demás yerbas.
              </li>
              <li>
                <strong>Space y Workshops educativos: </strong>Cada miércoles a
                las 17hs aprendemos algo nuevo, lo transmitimos en vivo por
                Twitch y Nostr.
              </li>
              <li>
                Además, una vez al mes, organizamos un
                <strong> evento presencial</strong>, donde finalmente
                compartimos en persona.
              </li>
            </ul>
            <Text>
              Te invitamos a unirte a nosotros en estas actividades y ser parte
              de nuestra comunidad.
            </Text>
          </Item>
          <Item
            title="¿Qué beneficios tiene ser parte de la comunidad de La Crypta"
            description=""
          >
            <ul>
              <li>Aprender sobre Bitcoin, Lightning y Nostr.</li>
              <li>
                Networking con otros Bitcoiners, desarrolladores y personas del
                mundo crypto web3.
              </li>
              <li>Desarrollar productos colaborativos con la comunidad.</li>
              <li>Estar al día sobre los últimas novedades sobre Bitcoin.</li>
            </ul>
          </Item>
          <Item title="¿Cómo puedo colaborar?" description="">
            <Text>
              Juntos llegamos más lejos. Apreciamos y valoramos muchísimo la
              colaboración de los integrantes de la comunidad en nuestros
              proyectos. Para ser voluntari@ de La Crypta podés sumarte a
              nuestro Discord en __(link)___
            </Text>
          </Item>
          <Item
            title="¿Cómo puedo donar a la comunidad de la Crypta?"
            description=""
          >
            <Text>
              Podes hacerlo enviando satoshis a{' '}
              <strong>pozo@lacrypta.ar</strong> a traves de tu billetera de
              Bitcoin Lightning.
            </Text>
          </Item>
          <Item
            title="¿Por qué debería unirme al canal de Discord?"
            description=""
          >
            <Text>
              La comunidad de La Crypta vive prácticamente en el Discord. Es ahí
              donde organizamos todas nuestras actividades y donde charlamos a
              diario. Además en esa plataforma tenemos una radio colaborativa,
              un bot para enviar satoshis, zapathons, distintos tipos de
              méritos, la famosa 💩 y mucho más… Podes unirte en ____(link)_____
            </Text>
          </Item>
        </List>
      </Container>
    </Faq>
  )
}
