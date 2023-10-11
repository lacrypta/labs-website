import People from './People'

import styles from './styles.module.scss'

interface ComponentProps {
  children: any
}

export default function Component(props: ComponentProps) {
  const { children } = props

  return (
    <div className={styles.section}>
      <div className={styles.info}>{children}</div>
      <div className={styles.list}>
        <div>
          <People data={{ image: '', name: 'gorila' }} />
          <People data={{ image: '', name: 'guadis' }} />
          <People data={{ image: '', name: 'Jona' }} />
          <People data={{ image: '', name: 'Juan Jose' }} />
          <People data={{ image: '', name: 'mrp' }} />
          <People data={{ image: '', name: 'naranja@hodl.ar' }} />
          <People data={{ image: '', name: '.Rapax' }} />
          <People data={{ image: '', name: 'camilugz' }} />
          <People data={{ image: '', name: 'Cariddi' }} />
          <People data={{ image: '', name: 'Fer' }} />
          <People data={{ image: '', name: 'seilermica' }} />
          <People data={{ image: '', name: 'sol' }} />
        </div>
        <div>
          <People data={{ image: '', name: 'gorila' }} />
          <People data={{ image: '', name: 'guadis' }} />
          <People data={{ image: '', name: 'Jona' }} />
          <People data={{ image: '', name: 'Juan Jose' }} />
          <People data={{ image: '', name: 'mrp' }} />
          <People data={{ image: '', name: 'naranja@hodl.ar' }} />
          <People data={{ image: '', name: '.Rapax' }} />
          <People data={{ image: '', name: 'camilugz' }} />
          <People data={{ image: '', name: 'Cariddi' }} />
          <People data={{ image: '', name: 'Fer' }} />
          <People data={{ image: '', name: 'seilermica' }} />
          <People data={{ image: '', name: 'sol' }} />
        </div>
        <div>
          <People data={{ image: '', name: 'gorila' }} />
          <People data={{ image: '', name: 'guadis' }} />
          <People data={{ image: '', name: 'Jona' }} />
          <People data={{ image: '', name: 'Juan Jose' }} />
          <People data={{ image: '', name: 'mrp' }} />
          <People data={{ image: '', name: 'naranja@hodl.ar' }} />
          <People data={{ image: '', name: '.Rapax' }} />
          <People data={{ image: '', name: 'camilugz' }} />
          <People data={{ image: '', name: 'Cariddi' }} />
          <People data={{ image: '', name: 'Fer' }} />
          <People data={{ image: '', name: 'seilermica' }} />
          <People data={{ image: '', name: 'sol' }} />
        </div>
      </div>
    </div>
  )
}
