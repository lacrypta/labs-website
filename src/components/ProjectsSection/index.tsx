'use client'

import { useTranslations } from 'next-intl'
import Container from '../Layout/Container'
import { Heading } from '../UI'

import Project from './Project'

import { Header, Projects } from './style'

export default function Component() {
  const t = useTranslations('projects')
  return (
    <Projects>
      {/* Quienes somos */}
      <Container>
        <Header>
          <Heading as="h2">{t('title')}...</Heading>
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
