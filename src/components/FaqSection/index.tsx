'use client'

import { Heading, Text } from '@/components/UI'
import Container from '../Layout/Container'

import Item from './Item'

import { useTranslations } from 'next-intl'
import { Faq, List } from './style'

export default function Component() {
  const t = useTranslations()
  return (
    <Faq>
      <Container>
        <div>
          <Heading as="h2">{t('faq.title')}</Heading>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </p> */}
        </div>
        <List>
          <Item
            title={t('faq.question_1.title')}
            description={t('faq.question_1.desc')}
          />
          <Item
            title={t('faq.question_2.title')}
            description={t('faq.question_2.desc')}
          />
          <Item title={t('faq.question_3.title')} description="">
            <Text>{t('faq.question_3.desc_1')}</Text>
            <ul>
              <li>
                <strong>{t('COMMUNITY_CALLS')}: </strong>{' '}
                {t('faq.question_3.desc_2')}
              </li>
              <li>
                <strong>{t('SPACE_AND_WORKSHOPS')}: </strong>
                {t('faq.question_3.desc_3')}
              </li>
              <li>{t('faq.question_3.desc_4')}</li>
            </ul>
            <Text>{t('faq.question_3.desc_5')}</Text>
          </Item>
          <Item title={t('faq.question_4.title')} description="">
            <ul>
              <li>{t('faq.question_4.desc_1')}</li>
              <li>{t('faq.question_4.desc_2')}</li>
              <li>{t('faq.question_4.desc_3')}</li>
              <li>{t('faq.question_4.desc_4')}</li>
            </ul>
          </Item>
          <Item title={t('faq.question_5.title')} description="">
            <Text>{t('faq.question_5.desc')}</Text>
          </Item>
          <Item title={t('faq.question_6.title')} description="">
            <Text>{t('faq.question_6.desc')}</Text>
          </Item>
          <Item title={t('faq.question_7.title')} description="">
            <Text>{t('faq.question_7.desc')}</Text>
          </Item>
        </List>
      </Container>
    </Faq>
  )
}
