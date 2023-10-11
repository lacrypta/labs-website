import Container from '../Layout/Container'

import ValueItem from './ValueItem'

import styles from './styles.module.scss'

export default function Component() {
  return (
    <div className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>Construimos en base a...</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            omnis! Sequi ex commodi cumque hic.
          </p>
        </div>
      </Container>

      <Container>
        <ValueItem
          // image=""
          title="Honestidad"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
        <ValueItem
          // image=""
          title="Sinergia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
      </Container>
      <Container>
        <ValueItem
          // image=""
          title="Libertad"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
        <ValueItem
          // image=""
          title="Racionalidad"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
        <ValueItem
          // image=""
          title="Humildad"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
      </Container>
      <Container>
        <ValueItem
          // image=""
          title="Merito"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
        <ValueItem
          // image=""
          title="Innovacion"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores."
          url=""
        />
      </Container>
    </div>
  )
}
