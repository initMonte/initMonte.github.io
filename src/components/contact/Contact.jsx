import { IconCard } from '../cards/iconCard/IconCard'
import './contact.css'

import { Send } from '../../assets/Send'

export const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section_title'>ASD</h2>
      <span className='section_subtitle'>Contactame</span>

      <div className='contact_container container grid'>
        <div className='contact_cards'>
          <IconCard title={"AsD"} buttonText={"dfgdg"} />
          <IconCard title={"dSAdasd"} buttonText={"lklkl"} />
        </div>
        <div className='container_contact-form'>
          <h3 className='contact_title'>asdasd</h3>
          <form className='contact_form'>
            <div className='contact_form-div'>
              <label className='contact_form-tag'>Nombre/Empresa</label>
              <input 
                type='text'
                name='name'
                className='contact_form-input'
                placeholder='Tu nombre o empresa...'
              />
            </div>
            <div className='contact_form-div'>
              <label className='contact_form-tag'>E-mail</label>
              <input 
                type='email'
                name='email'
                className='contact_form-input'
                placeholder='Tu email...'
              />
            </div>
            <div className='contact_form-div contact_form-area'>
              <label className='contact_form-tag'>Mensaje</label>
              <textarea
                className='contact_form-input'
                name='message'
                cols={30}
                rows={10}
                placeholder='Mensaje...'
              />
            </div>
            <a download href='' className='button button--flex'>
              Enviar mensaje
              <Send />
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}