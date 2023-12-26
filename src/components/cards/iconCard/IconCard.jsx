import './iconCard.css'

export const IconCard = ({icon, title, buttonText, goTo}) => {
  return (
    <a href={goTo} target='_blank' className='iconCard_button' rel="noreferrer">
      {icon ? <i className={`${icon} iconCard_icon`} /> : <i className='bx bx-badge-check iconCard_icon' />}
      <h3 className='iconCard_title'>{title}</h3>      
      <p className='iconCard_p'>
        {buttonText}
        <i className='uil uil-arrow-right iconCard_button-icon' />
      </p>
    </a>
  )
}