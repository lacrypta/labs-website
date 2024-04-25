'use client'

import Container from '../Container'

import Logo from '@/components/Logo'

import { useTranslations } from 'next-intl'
import { Navbar } from './styles'

export default function Component() {
  const t = useTranslations()

  return (
    <Navbar>
      <Container>
        {/* <Flex> */}
        <Logo size="medium" />
        {/* <LocaleSwitcher /> */}
        {/* </Flex> */}
        <ul>
          <li>
            <a href="#">{t('HOME')}</a>
          </li>
          <li>
            <a href="#">{t('ABOUT_US')}</a>
          </li>
          <li>
            <a href="#">{t('PROJECTS')}</a>
          </li>
          <li>
            <a href="#">{t('VALUES')}</a>
          </li>
        </ul>
      </Container>
    </Navbar>
  )
}
