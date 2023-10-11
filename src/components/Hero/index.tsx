import Container from '../Layout/Container'

import styles from './styles.module.scss'

export default function Component() {
  return (
    <div className={styles.hero}>
      <Container>
        {/* Hero */}
        <div>
          <h1>Una revolucion disfrazada de inversion.</h1>
          <p>
            <strong>Somos una ONG dedicada a la educación y difusión</strong>{' '}
            del ecosistema crypto
          </p>
          <img src="https://placehold.co/900x400" />
        </div>
      </Container>
    </div>
  )
}
