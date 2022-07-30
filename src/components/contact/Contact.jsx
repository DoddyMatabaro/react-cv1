import React, {useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9lh4cd', 'template_ti184w6', form.current, '_9scy6D4lNhVOCAk-');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>EMail</h4>
              <h5>matabarododdy@gmail.com</h5>
              <a href='mailto:matabarododdy@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option' >
              <RiMessengerLine  className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Doddy Matabaro</h5>
              <a href='https://m.me/fr'>Send a message</a>
          </article>
          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsaap</h4> 
              <h5>matabarododdy@gmail.com</h5>
              <a href='mailto:matabarododdy@gmail.com'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text'name="name" palceholder="Your full name" required />
          <input type='mail'name="email" palceholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact