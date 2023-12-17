import './hero.css'

import CV from '../../assets/CVespañol-MatiasMonteverde.pdf'

import { Files } from '../../assets/Files.jsx'
import { Scroll } from '../../assets/Scroll.jsx'
import { SocialLinks } from '../socialLinks/SocialLinks.jsx'

export const Hero = () => {
  return (
  <section className='hero section' id='hero'>
    <div className='hero_container container grid'>
      <div className='hero_content grid'>
        <SocialLinks vertical />
        <div className='hero_img' />
        <div className='hero_data'>
          <h1 className='hero_title'>
            Matias Monteverde
          </h1>
          <h3 className='hero_subtitle'>
            Desarrollador de Software
          </h3>
          <p className='hero_description'>
          A 1 semestre de terminar la Tecnicatura en Desarrollo
          de Software estoy en busca de mi primer empleo en el área.
          </p>
          <a download href={CV} className='button button--flex'>
            Descargar CV
            <Files />
          </a>
        </div>
      </div>
      <div className='hero_scroll'>
        <a href='#about' className='hero_scroll-button button--flex'>
        <Scroll />
        <span className="hero_scroll-name">
          Scroll <i className='uil uil-arrow-down hero_scroll-arrow' />
        </span>
      </a>
      </div>
    </div>
  </section>
  )
}