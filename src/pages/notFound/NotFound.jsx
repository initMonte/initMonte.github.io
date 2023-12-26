import { useTranslation } from 'react-i18next';

import '../../App.css'
import './notFound.css'

import { LogoM } from '../../assets/LogoM'

export function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <main className='main'>
        <div className='notFound_container'>
          <a href='/' className='notFound_logo'>
            <LogoM color='#333333' className='notFound_logo'/>
          </a>
          <h1 className='notFound_title'>{t('notFound.title')}</h1>
          <p>{t('notFound.text')}</p>
        </div>
      </main>
    </>
  )
}