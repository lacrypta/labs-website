import data from '@/data/leaderboard.json'

import People from './People'

import { Members, Info, List } from './style'

interface ComponentProps {
  children: any
}

export default function Component(props: ComponentProps) {
  const { children } = props

  return (
    <Members>
      <Info>{children}</Info>
      <List>
        <div>
          {data.map(member => (
            <People data={member} />
          ))}
        </div>
        <div>
          {data.map(member => (
            <People data={member} />
          ))}
        </div>
        <div>
          {data.map(member => (
            <People data={member} />
          ))}
        </div>
      </List>
    </Members>
  )
}
