import React from 'react';
import { useTranslation } from 'react-i18next'

import './skills.css'
import { ListCard } from '../cards/listCard/ListCard.tsx'

export const Skills = () => {
  const { t } = useTranslation();

  const arrayFrontTechs = t('skills.card1Array');
  const arrayBackTechs = t('skills.card2Array');

  return (
    <section className='skills section' id='skills'>
      <h2 className='section_title'>{t('skills.title')}</h2>
      <span className='section_subtitle'>{t('skills.subtitle')}</span>

      <div className='skills_container container grid'>
        <ListCard title={t('skills.card1')} list={arrayFrontTechs} />
        <ListCard title={t('skills.card2')} list={arrayBackTechs} />
      </div>
    </section>
  )
}