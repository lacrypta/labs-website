import styles from './styles.module.scss'

interface ComponentProps {
  image?: string
  title: string
  description: string
  url: string
}

export default function Component(props: ComponentProps) {
  const {
    image = 'https://placehold.co/375x375',
    title,
    description,
    url = '#'
  } = props

  return (
    <div className={styles.section}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url}>Visitar proyecto</a>
      </div>
    </div>
  )
}
