import styles from './styles.module.scss'

interface ComponentProps {
  x?: number
  y?: number
}

export default function Component(props: ComponentProps) {
  const { x = 0, y = 0 } = props

  return <div className={styles.divider} style={{ minHeight: `${y}px` }} />
}
