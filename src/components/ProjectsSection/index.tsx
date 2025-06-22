'use client'

import { useTranslations } from 'next-intl'

import Container from '../Layout/Container'
import Project from './Project'
import { cn } from '@/lib/utils'

const PROJECTS_SKELETON = [
  {
    id: 'lawallet',
    image: '/img/projects/lawallet.png',
    url: 'https://lawallet.io',
    featureCount: 2
  },
  {
    id: 'walias',
    image: '/img/projects/walias.png',
    url: 'https://walias.io/',
    featureCount: 2
  },
  {
    id: 'halving_massacre',
    image: '/img/projects/halving_massacre.png',
    url: 'https://massacre.lawallet.io/',
    featureCount: 2
  }
]

export default function Component() {
  const t = useTranslations('projects')

  return (
    <div className="flex flex-col gap-16 w-full pt-64 pb-16">
      <Container>
        <div className="flex flex-col gap-4 md:max-w-[500px] mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-bold">{t('title')}</h2>
          <p className="text-lg text-white/70">{t('description')}</p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-16">
          {PROJECTS_SKELETON.map((project, index) => {
            const projectData = {
              image: project.image,
              url: project.url,
              title: t(`items.${project.id}.title`),
              description: t(`items.${project.id}.description`),
              features: Array.from({ length: project.featureCount }).map(
                (_, featureIndex) => ({
                  icon: '',
                  title: t(
                    `items.${project.id}.features.${featureIndex}.title`
                  ),
                  description: t(
                    `items.${project.id}.features.${featureIndex}.description`
                  )
                })
              )
            }
            return (
              <Project
                className={cn(
                  'flex flex-col gap-8 w-full p-6 rounded-3xl bg-border',
                  index % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
                key={project.id}
                data={projectData}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}
