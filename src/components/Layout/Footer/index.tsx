'use client'

import Link from 'next/link'

import Container from '../Container'
import Logo from '@/components/Logo'
import { Icon } from '@/components/UI'
import { Twitter, Discord, Instagram } from '@/components/Icons'

import { Footer } from './style'

export default function Component() {
  return (
    <Footer>
      <Container>
        <div>
          <Logo size="small" />
          <p>De Argentina para el mundo.</p>
        </div>
        <div>
          <p>Seguinos en:</p>
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
