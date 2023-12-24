import { useTranslation } from 'react-i18next'

import './projects.css'
import { projectsData } from '../../data/ProjectsList'
import { ImageCard } from '../cards/imageCard/ImageCard'
import { IconCard } from '../cards/iconCard/IconCard'
import { links } from '../../data/Links.js'

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className='section projects' id='projects'>
      <h2 className='section_title'>{t('projects.title')}</h2>
      <span className='section_subtitle'>{t('projects.subtitle')}</span>
    
      <div className='projects_container'>
        {projectsData.map(item => (
            <ImageCard item={item} key={item.name} />
        ))}
        <IconCard icon={'uil uil-github-alt'} goTo={links.github} title={t('projects.githubCardtitle')} buttonText={t('projects.githubCardText')} />
      </div>
    </section>
  )
} 