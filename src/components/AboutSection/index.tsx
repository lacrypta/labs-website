import Container from '../Layout/Container'

import Animal from '../Animal'
import Members from '../Members'
import Divider from '../UI/Divider'

import styles from './styles.module.scss'

export default function Component() {
  return (
    <div className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Somos animales de la selva cypherpunk.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </p>
          <a href="#">Quiero saber mas</a>
        </div>
      </Container>
      <Divider y={24} />
      <div className={styles.list}>
        <Animal data={{ name: 'Agus', animal: 'Gorila' }} />
        <Animal data={{ name: 'Mariano', animal: 'Lechuza' }} />
        <Animal data={{ name: 'Micaela', animal: 'Abeja' }} />
        <Animal data={{ name: 'Rapax', animal: 'Pulpo' }} />
        <Animal data={{ name: 'Fer', animal: 'Cuervo' }} />
        <Animal data={{ name: 'Jona', animal: 'Ciervo' }} />
      </div>
      <Divider y={48} />
      <Container>
        <h3>Pero mas que una manada, somos una comunidad de...</h3>
      </Container>
      <Divider y={24} />
      <Members>
        <div className={styles.number}>
          <span>+1000</span>
          <span>miembros</span>
        </div>
      </Members>
    </div>
  )
}
