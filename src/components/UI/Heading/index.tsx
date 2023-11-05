import { fontPrimary } from '@/style/fonts'

interface ComponentProps {
  children: any
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Component(props: ComponentProps) {
  const { children, as = 'h1' } = props

  const TagName = as || 'div'

  return <TagName className={fontPrimary.className}>{children}</TagName>
}
