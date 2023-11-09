import data from '@/data/leaderboard.json'

import People from './People'

import { Members, Info, List } from './style'

interface ComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <People key={member.id} data={member} />
          ))}
        </div>

        <div>
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </div>

        <div>
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </div>
      </List>
    </Members>
  )
}
