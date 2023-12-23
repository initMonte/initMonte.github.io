import './projects.css'
import { projectsData } from '../../data/ProjectsList'
import { ImageCard } from '../cards/imageCard/ImageCard'
import { IconCard } from '../cards/iconCard/IconCard'
import { links } from '../../data/Links.js'

export const Projects = () => {
  return (
    <section className='section projects' id='projects'>
      <h2 className='section_title'>Projectos</h2>
      <span className='section_subtitle'>Algunas de las cosas que hice:</span>
    
      <div className='projects_container'>
        {projectsData.map(item => (
            <ImageCard item={item} key={item.name} />
        ))}
        <IconCard icon={'uil uil-github-alt'} goTo={links.github} title={'¿Quieres ver mas?'} buttonText={'Mirá mi GitHub'} />
      </div>
    </section>
  )
} 