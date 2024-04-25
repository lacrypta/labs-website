'use client'

import { Divider, Flex, Heading } from '@/components/UI'
import Container from '../Layout/Container'

import Animal from '../Animal'
import Members from '../Members'

import { fontPrimary } from '@/style/fonts'
import { useTranslations } from 'next-intl'
import { AboutSection, Header, List, Number } from './style'

const animals = [
  {
    name: 'Agus',
    animal: 'Gorila',
    color: '#BF0E1A'
  },
  {
    name: 'Mariano',
    animal: 'Lechuza',
    color: '#F4941E'
  },
  {
    name: 'Cami',
    animal: 'Panda',
    color: '#F5F4EB'
  },
  {
    name: 'Mica',
    animal: 'Abeja',
    color: '#FFD000'
  },
  {
    name: 'Rapax',
    animal: 'Pulpo',
    color: '#A252D5'
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
  const t = useTranslations()
  return (
    <AboutSection>
      <Divider y={128} />
      <Container>
        <Header>
          <Heading as="h2">{t('about.title')}</Heading>
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
            {t('about.subtitle_1')}, <br /> {t('about.subtitle_2')}...
          </Heading>
        </Flex>
      </Container>
      <Divider y={24} />
      <Members>
        <Number>
          <span className={fontPrimary.className}>+1000</span>
          <span className={fontPrimary.className}>
            {t('MEMBERS').toLowerCase()}
          </span>
        </Number>
      </Members>
    </AboutSection>
  )
}
