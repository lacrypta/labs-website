import styles from './styles.module.scss'

interface ComponentProps {
  image?: string
  title: string
  description: string
  url: string
}

export default function Component(props: ComponentProps) {
  const {
    image = 'https://placehold.co/50x50',
    title,
    description,
    url = '#'
  } = props

  return (
    <div className={styles.section}>
      <img src={image} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
