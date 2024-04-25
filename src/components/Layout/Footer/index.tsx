'use client'

import Link from 'next/link'

import Container from '../Container'
import Logo from '@/components/Logo'
import { Icon } from '@/components/UI'
import { Twitter, Discord, Instagram, Github } from '@/components/Icons'

import { Footer } from './style'
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('footer')
  return (
    <Footer>
      <Container>
        <div>
          <Logo size="small" />
          <p>{t('FROM_ARG_TO_WORLD')}</p>
        </div>
        <div>
          <p>{t('FOLLOW_IN')}:</p>
          <ul>
            <li>
              <Link href="https://twitter.com/LaCryptaOk" target="_blank">
                <Icon>
                  <Twitter />
                </Icon>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/lacryptaok/"
                target="_blank"
              >
                <Icon>
                  <Instagram />
                </Icon>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/lacrypta" target="_blank">
                <Icon>
                  <Github />
                </Icon>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/QESv76truh" target="_blank">
                <Icon>
                  <Discord />
                </Icon>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Footer>
  )
}
