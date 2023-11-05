'use client'

import Container from '../Container'

import Logo from '@/components/Logo'

import { Navbar } from './styles'

export default function Component() {
  return (
    <Navbar>
      <Container>
        <Logo size="medium" />
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Valores</a>
          </li>
        </ul>
      </Container>
    </Navbar>
  )
}
