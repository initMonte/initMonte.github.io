import './socialLinks.css'

export const SocialLinks = ({vertical = false, background = false}) => {
  let containerType;
  let iconType;

  if (vertical === true) {
    containerType = 'container_social vertical'
  } else {
    containerType = 'container_social'
  }

  if (background === true) {
    iconType = 'icon-background'
  } else {
    iconType = 'icon-no-background'
  }

  return (
    <div className={containerType}>
      <a href='' className={iconType} target='_blank'>
        <i className='uil uil-github-alt' />
      </a>
      <a href='' className={iconType} target='_blank'>
        <i className='uil uil-linkedin-alt' />
      </a>
    </div>
  )
}