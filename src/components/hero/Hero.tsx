import React from 'react'
import { useTranslation } from 'react-i18next'
import './hero.css'
import i18n from '../../i18n.ts'

import CVes from '../../assets/CVespañol-MatiasMonteverde.pdf'
import CVen from '../../assets/CVenglish-MatiasMonteverde.pdf'
import profileImg from '../../assets/FotoCV.webp'

import { Files } from '../../assets/Files.tsx'
import { Scroll } from '../../assets/Scroll.tsx'
import { SocialLinks } from '../socialLinks/SocialLinks.tsx'

export const Hero = () => {
  const { t } = useTranslation();

  const CV = () => {
    const currentLanguage = i18n.language;
    switch (currentLanguage) {
      case ('es'): return CVes;
      case ('en'): return CVen;
      default: return CVen;
    }
  }

  return (
    <section className='hero section' id='hero'>
      <div className='hero_container container grid'>
        <div className='hero_content grid'>
          <SocialLinks vertical />
          <img className='hero_img' src={profileImg} alt={t('hero.title')} />
          <div className='hero_data'>
            <h1 className='hero_title'>
              {t('hero.title')}
            </h1>
            <h2 className='hero_subtitle'>
              {t('hero.subtitle')}
            </h2>
            <p className='hero_description'>
              {t('hero.description')}
            </p>
            <a download href={CV()} className='button button--flex'>
              {t('hero.button')}
              <Files />
            </a>
          </div>
        </div>
        <div className='hero_scroll'>
          <a href='#skills' className='hero_scroll-button button--flex'>
            <Scroll />
            <span className="hero_scroll-name">
              {t('hero.scroll')} <i className='uil uil-arrow-down hero_scroll-arrow' />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}