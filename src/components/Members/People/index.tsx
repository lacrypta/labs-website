import styles from './styles.module.scss'

interface ComponentProps {
  data: {
    image: string
    name: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <div className={styles.section}>
      <img src="https://placehold.co/32x32" />
      <p>{data?.name}</p>
    </div>
  )
}
