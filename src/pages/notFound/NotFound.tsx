import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../App.css'
import './notFound.css'

import { LogoM } from '../../assets/LogoM.tsx'
import { useTheme } from '../../context/ThemeContext.tsx'

export function NotFound() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const logoColor = theme === 'dark' ? 'var(--primary-color)' : '#333333';

  return (
    <>
      <main className='main'>
        <div className='notFound_container'>
          <a href='/' className='notFound_logo'>
            <LogoM outlineColor={logoColor} />
          </a>
          <h1 className='notFound_title'>{t('notFound.title')}</h1>
          <p>{t('notFound.text')}</p>
        </div>
      </main>
    </>
  )
}