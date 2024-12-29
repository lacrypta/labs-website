'use client'

import { useTranslations } from 'next-intl'

import Container from '../Layout/Container'
import Project from './Project'
import { cn } from '@/lib/utils'

const MOCK_PROJECTS = [
  {
    image: '/img/projects/lawallet.png',
    title: 'LaWallet',
    description:
      'We create infrastructure based on Lightning Network and Nostr to speed up your integration.',
    url: 'https://lawallet.io',
    features: [
      {
        icon: '',
        title: 'Infraestructure',
        description:
          'Integrating Bitcoin should not be utopian. Build on a solid and flexible infrastructure, ensuring security and scalability.'
      },
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      }
    ]
  },
  {
    image: '/img/projects/walias.png',
    title: 'Walias',
    description:
      'Merges the power of Lightning and Nostr Makes to make Bitcoin as simple as sending an email.',
    url: 'https://walias.io/',
    features: [
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      },
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      }
    ]
  },
  {
    image: '/img/projects/halving_massacre.png',
    title: 'Halving Massacre',
    description:
      'Zap sats to boost your bolt power, survive random elimination rounds, and claim the prize pool by being the last player standing!',
    url: 'https://massacre.lawallet.io/',
    features: [
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      },
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      }
    ]
  },
  {
    image: '/img/projects/eventro.png',
    title: 'Eventro',
    description:
      'Create unforgettable events, we&apos;ll take care of the rest. Managing events and tickets has never been easier.',
    url: '',
    features: [
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      },
      {
        icon: '',
        title: 'Feature o característica',
        description: 'Breve descripción de esa feature o característica.'
      }
    ]
  }
]

export default function Component() {
  const t = useTranslations('projects')
  return (
    <div className="flex flex-col gap-16 w-full pt-64 pb-16">
      {/* Quienes somos */}
      <Container>
        <div className="flex flex-col gap-4 md:max-w-[500px] mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-bold">{t('title')}</h2>
          <p className="text-lg text-white/70">{t('description')}</p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-16">
          {MOCK_PROJECTS.map((project, index) => (
            <Project
              className={cn(
                'flex flex-col gap-8 w-full p-6 rounded-3xl bg-border',
                index % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              )}
              key={index}
              data={project}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
