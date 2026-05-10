import React from 'react'
import { useTranslation } from 'react-i18next'

import './projects.css'
import { projectsData } from '../../data/ProjectsList.ts'
import { ImageCard } from '../cards/imageCard/ImageCard.tsx'
import { IconCard } from '../cards/iconCard/IconCard.tsx'
import { links } from '../../data/Links.ts'

export const Projects = () => {
  const { t } = useTranslation();

  const fromI18n = t('projects.projectsArray')
  const arrayProjects = fromI18n.map((item) => {
    const withAsset = projectsData.find((p) => p.name === item.name)
    return withAsset ? { ...item, image: withAsset.image } : item
  })

  return (
    <section className='section projects' id='projects'>
      <h2 className='section_title'>{t('projects.title')}</h2>
      <span className='section_subtitle'>{t('projects.subtitle')}</span>

      <div className='projects_container'>
        {arrayProjects.map(item => (
          <ImageCard item={item} key={item.name} />
        ))}
        <IconCard icon={'uil uil-github-alt'} goTo={links.github} title={t('projects.githubCardtitle')} buttonText={t('projects.githubCardText')} />
      </div>
    </section>
  )
} 