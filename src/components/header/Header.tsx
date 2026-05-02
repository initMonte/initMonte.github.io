import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import '../../App.css'
import './header.css'
import { LogoM } from '../../assets/LogoM.tsx'
import { useTheme } from '../../context/ThemeContext.tsx'

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const locales = {
    es: { title: 'Es' },
    en: { title: 'En' }
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <div className='nav_left'>
          <a href='#hero' className='nav_logo' aria-label={t('nav.logoHome')}><LogoM /></a>
          <select className='nav_language-selector' aria-label={t('nav.languageSelector')} defaultValue={i18n.language} onChange={e => i18n.changeLanguage(e.target.value)}>
            {Object.keys(locales).map((locale) => (
              <option className='select-items' key={locale} value={locale}>
                {locales[locale].title}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="nav_theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.themeSwitchToLight') : t('nav.themeSwitchToDark')}
            aria-pressed={theme === 'dark'}
          >
            <i className={theme === 'dark' ? 'uil uil-sun' : 'uil uil-moon'} aria-hidden />
          </button>
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

          <button
            type="button"
            className="nav_close"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={t('nav.closeMenu')}
          >
            <i className="uil uil-times" aria-hidden />
          </button>
        </div>

        <button
          type="button"
          className="nav_toggle"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={t('nav.openMenu')}
          aria-expanded={showMenu}
        >
          <i className="uil uil-apps" aria-hidden />
        </button>
      </nav>
    </header>
  )
}