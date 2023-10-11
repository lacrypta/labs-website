import Container from '../Container'

import Logo from '@/components/Logo'

import styles from './styles.module.scss'

export default function Component() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Logo />
        <ul>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Que hacemos</a>
          </li>
          <li>
            <a href="#">Como lo hacemos</a>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
