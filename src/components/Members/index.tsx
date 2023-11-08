import data from '@/data/leaderboard.json'

import People from './People'

import { Members, Info, List } from './style'
import { motion } from 'framer-motion'

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
        <motion.div
          style={{ display: 'flex', marginRight: '20px' }}
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear'
          }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
        <motion.div
          style={{ display: 'flex', marginLeft: '20px' }}
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear'
          }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
        <motion.div
          style={{ display: 'flex', marginLeft: '20px' }}
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear'
          }}
        >
          {data.map(member => (
            <People key={member.id} data={member} />
          ))}
        </motion.div>
      </List>
    </Members>
  )
}
