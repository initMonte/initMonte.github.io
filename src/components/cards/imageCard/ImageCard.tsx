import React from 'react'
import './imageCard.css'

export const ImageCard = ({item}) => {
  return (
    <div className='container_card'>
      <img src={item.image} alt={item.description} className='card_image' />
      <h3 className='card_title'>{item.name}</h3>
      <span className='card_description'>
        {item.description}
      </span>
      <div className='div_buttons'>
        {item.live && 
          <a href={item.live} target='_blank' className='card_button' rel="noreferrer">
            Demo <i className='bx bx-right-arrow-alt card_button-icon' />
          </a>
        }
        {item.github && 
          <a href={item.github} target='_blank' className='card_button' rel="noreferrer">
            Github <i className='uil uil-github-alt card_button-icon' />
          </a>
        }
      </div>
    </div>
  )
}