import './skills.css'
import { Technologies, Softskills } from '../../data/SkillsList'
import { ListCard } from '../cards/listCard/ListCard'

export const Skills = () => {
  return(
    <section className='skills section' id='skills'>
      <h2 className='section_title'>Skills</h2>
      <span className='section_subtitle'>Lorem lorem</span>

      <div className='skills_container container grid'>
        <ListCard title='Klklkl' list={Technologies} />
        <ListCard title='Klklkl' list={Softskills} />
      </div>
    </section>
  )
}