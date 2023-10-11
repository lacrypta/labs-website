import Container from '../Layout/Container'

import Project from './Project'

import styles from './styles.module.scss'

export default function Component() {
  return (
    <div className={styles.section}>
      {/* Quienes somos */}
      <Container>
        <div className={styles.header}>
          <h2>Creemos en el Open-Source.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </p>
          <a href="#">Ver proyectos de la comunidad</a>
        </div>
        <Project
          // image=""
          title="LaWallet"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
      </Container>
      <Container>
        <Project
          // image=""
          title="POS"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
        <Project
          // image=""
          title="Peronio"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsum
            facilis fuga aliquam possimus rem."
          url=""
        />
      </Container>
    </div>
  )
}
