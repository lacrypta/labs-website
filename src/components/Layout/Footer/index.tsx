'use client'

import Container from '../Container'
import Logo from '@/components/Logo'

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
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Discord</li>
          </ul>
        </div>
      </Container>
    </Footer>
  )
}
