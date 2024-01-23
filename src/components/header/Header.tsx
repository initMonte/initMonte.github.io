import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import '../../App.css'
import './header.css'
import { LogoM } from '../../assets/LogoM.tsx'

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const locales = {
    es: { title: 'Es' },
    en: { title: 'En' }
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <div className='nav_left'>
          <a href='#hero' className='nav_logo' aria-label="Click the Logo to go home"><LogoM /></a>
          <select className='nav_language-selector' defaultValue={i18n.language} onChange={e => i18n.changeLanguage(e.target.value)}>
            {Object.keys(locales).map((locale) => (
              <option className='select-items' key={locale} value={locale}>
                {locales[locale].title}
              </option>
            ))}
          </select>
        </div>
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