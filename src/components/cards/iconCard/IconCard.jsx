import './iconCard.css'

export const IconCard = ({icon, title, buttonText, goTo}) => {
  return (
    <div className='container_iconCard'>
      {icon ? <i className={`${icon} iconCard_icon`} /> : <i className='bx bx-badge-check iconCard_icon' />}
      <h3 className='iconCard_title'>{title}</h3>
      <a href={goTo} target='_blank' className='iconCard_button' rel="noreferrer">
        {buttonText}
        <i className='uil uil-arrow-right iconCard_button-icon' />
      </a>
    </div>
  )
}