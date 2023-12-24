import { useTranslation } from 'react-i18next'

import './skills.css'
import { Technologies, Softskills } from '../../data/SkillsList'
import { ListCard } from '../cards/listCard/ListCard'

export const Skills = () => {
  const { t } = useTranslation();
  return(
    <section className='skills section' id='skills'>
      <h2 className='section_title'>{t('skills.title')}</h2>
      <span className='section_subtitle'>{t('skills.subtitle')}</span>

      <div className='skills_container container grid'>
        <ListCard title={t('skills.card1')} list={Technologies} />
        <ListCard title={t('skills.card2')} list={Softskills} />
      </div>
    </section>
  )
}