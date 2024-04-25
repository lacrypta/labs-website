'use client'

import { Heading } from '@/components/UI'
import Container from '../Layout/Container'

import ValueItem from './ValueItem'

import { Header, ValueProposal } from './style'
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('values')
  return (
    <ValueProposal>
      <Container>
        <Header>
          <Heading as="h2">{t('title')}...</Heading>
          {/* <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </Text> */}
        </Header>
      </Container>

      <Container>
        <ValueItem title={t('honesty')} description={t('honesty_desc')} />
        <ValueItem title={t('synergy')} description={t('synergy_desc')} />
      </Container>
      <Container>
        <ValueItem title={t('liberty')} description={t('liberty')} />
        <ValueItem
          title={t('rationality')}
          description={t('rationality_desc')}
        />
        <ValueItem title={t('modesty')} description={t('modesty_desc')} />
      </Container>
      <Container>
        <ValueItem title={t('merit')} description={t('merit_desc')} />
        <ValueItem title={t('innovation')} description={t('innovation_desc')} />
      </Container>
    </ValueProposal>
  )
}
