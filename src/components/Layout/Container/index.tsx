import styles from './styles.module.scss'

interface ComponentProps {
  children: any
}

export default function Component(props: ComponentProps) {
  const { children } = props

  return <div className={styles.container}>{children}</div>
}
