import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'

import { IconCard } from '../cards/iconCard/IconCard'
import './contact.css'
import { Send } from '../../assets/Send'
import { links } from '../../data/Links'

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlamn5b', 'template_2md4jzm', form.current, 'XIABe-I5_u-FikS6A')
      .then((result) => {
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section_title'>{t("contact.title")}</h2>
      <span className='section_subtitle'>{t("contact.subtitle")}</span>

      <div className='contact_container container grid'>
        <div className='contact_cards'>
          <IconCard title={t("contact.card1Title")} buttonText={t("contact.card1Text")} goTo={links.linkedin} icon={'uil uil-linkedin-alt'}/>
          <IconCard title={t("contact.card2Title")} buttonText={t("contact.card2Text")} goTo={links.mailto} icon={'bx bxl-gmail'}/>
        </div>
        <div className='container_contact-form'>
          <h3 className='contact_title'>{t("contact.formTitle")}</h3>
          <form className='contact_form' ref={form} onSubmit={sendEmail}>
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
            <button className='button button--flex'>
            {t("contact.formButton")}
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}