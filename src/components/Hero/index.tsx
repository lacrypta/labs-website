'use client'

import { useTranslations } from 'next-intl'
import Container from '../Layout/Container'
import { Heading } from '../UI'

import { Hero, Assets } from './style'

export default function Component() {
  const t = useTranslations('hero')
  return (
    <Hero>
      <Container>
        <div>
          <Heading as="h1">{t('title')}</Heading>
          <p>
            {t('subtitle_1')} <strong>{t('subtitle_2')}</strong>
          </p>
        </div>
      </Container>
      <Assets>
        <img src="/img/world.png" />
        <div className="circle-world">
          <div className="dot"></div>
        </div>
      </Assets>
    </Hero>
  )
}
