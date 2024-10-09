'use client'

import { useTranslations } from 'next-intl'

import Container from '../Layout/Container'
import Project from './Project'

const MOCK_PROJECTS = [
  {
    image: '/img/projects/pos.png',
    title: 'Lorem ipsum dolor',
    description: 'Descripción del proyecto.',
    url: 'https://github.com',
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
    image: '/img/projects/pos.png',
    title: 'Lorem ipsum dolor',
    description: 'Descripción del proyecto.',
    url: 'https://github.com',
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
    <div className="flex flex-col gap-12 w-full py-32">
      {/* Quienes somos */}
      <Container>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl lg:text-7xl font-bold">{t('title')}</h2>
          <p className="text-lg text-white/70">
            <span>{t('description_1')}</span>
            <br className="hidden lg:flex" />
            <span className="ml-1">{t('description_2')}</span>
          </p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-16">
          {MOCK_PROJECTS.map((project, index) => (
            <Project key={index} data={project} />
          ))}
        </div>
      </Container>
    </div>
  )
}
