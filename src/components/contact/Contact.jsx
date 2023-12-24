import { useTranslation } from 'react-i18next'

import { IconCard } from '../cards/iconCard/IconCard'
import './contact.css'

import { Send } from '../../assets/Send'

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='contact section' id='contact'>
      <h2 className='section_title'>{t("contact.title")}</h2>
      <span className='section_subtitle'>{t("contact.subtitle")}</span>

      <div className='contact_container container grid'>
        <div className='contact_cards'>
          <IconCard title={"AsD"} buttonText={"dfgdg"} />
          <IconCard title={"dSAdasd"} buttonText={"lklkl"} />
        </div>
        <div className='container_contact-form'>
          <h3 className='contact_title'>asdasd</h3>
          <form className='contact_form'>
            <div className='contact_form-div'>
              <label className='contact_form-tag'>{t("contact.formName")}</label>
              <input 
                type='text'
                name='name'
                className='contact_form-input'
                placeholder={t("contact.formNamePlaceholder")}
              />
            </div>
            <div className='contact_form-div'>
              <label className='contact_form-tag'>{t("contact.formEmail")}</label>
              <input 
                type='email'
                name='email'
                className='contact_form-input'
                placeholder={t("contact.formEmailPlaceholder")}
              />
            </div>
            <div className='contact_form-div contact_form-area'>
              <label className='contact_form-tag'>{t("contact.formMessage")}</label>
              <textarea
                className='contact_form-input'
                name='message'
                cols={30}
                rows={10}
                placeholder={t("contact.formMessagePlaceholder")}
              />
            </div>
            <a href='' className='button button--flex'>
            {t("contact.formButton")}
              <Send />
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}