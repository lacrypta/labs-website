import styles from './styles.module.scss'

interface ComponentProps {
  data: {
    name: string
    animal: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <div className={styles.animal}>
      <img src="https://placehold.co/240x240" />
      <div>
        <h4>{data.name}</h4>
        <p>#{data.animal}</p>
      </div>
    </div>
  )
}
