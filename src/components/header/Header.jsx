import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../App.css'
import './header.css'

export const Header = () => {
  const { t, i18n } = useTranslation();
  const[showMenu, setShowMenu] = useState(false);

  const locales = {
    es: {title: 'Es'},
    en: {title: 'En'}
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>{t('nav.name')}</a>
        <ul>
          {Object.keys(locales).map((locale) => (
            <li key={locale}><button type='submit' onClick={() => i18n.changeLanguage(locale)}>
              {locales[locale].title}
            </button></li>
          ))}
        </ul>
        
        <div className={showMenu ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href='#hero' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-estate nav_icon' /> {t('nav.home')}
              </a>
            </li>
            <li className='nav_item'>
              <a href='#skills' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-file-alt nav_icon' /> {t('nav.skills')}
              </a>
            </li>
            <li className='nav_item'>
              <a href='#projects' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-scenery nav_icon' /> {t('nav.projects')}
              </a>
            </li>
            <li className='nav_item'>
              <a href='#contact' className='nav_link active-link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-message nav_icon' /> {t('nav.contact')}
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav_close' onClick={() => setShowMenu(!showMenu)} />
        </div>
        
        <div className='nav_toggle' onClick={() => setShowMenu(!showMenu)}>
          <i className='uil uil-apps' />
        </div>
      </nav>
    </header>
  )
}