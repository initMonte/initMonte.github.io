import React from 'react'
import './listCard.css'

export const ListCard = ({title, list}) => {
  return (
        <div className='skills_content'>
          <h3 className='skills_title'>{title}</h3>
          <div className='skills_box'>
              {list.length > 0 ? (list.map(item => (
                <div key={item} className="skills_data">
                  {item.icon ? <i className={`${item.icon} skills_img`} /> : <i className='bx bx-badge-check skills_img' />}
                  <div>
                    <h3 className="skills_name">{item.name}</h3>
                    <span className="skills_description">{item.description}</span>
                  </div>
                </div>
              ))) : null}
          </div>
        </div>
  )
}