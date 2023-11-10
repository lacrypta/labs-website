import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ x: '-300%' }}
          animate={{ x: 0 }}
          exit={{ x: '0%' }}
          transition={{ duration: 400, repeat: Infinity, ease: 'linear' }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: '-700%' }}
          animate={{ x: 0 }}
          exit={{ x: '0%' }}
          transition={{ duration: 500, repeat: Infinity, ease: 'linear' }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: '-500%' }}
          animate={{ x: 0 }}
          exit={{ x: '0%' }}
          transition={{ duration: 300, repeat: Infinity, ease: 'linear' }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
      </List>
    </Members>
  )
}
