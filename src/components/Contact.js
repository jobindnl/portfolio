import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
require('dotenv').config()

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_vccjnzt', 'template_oca7lss', event.target, "user_OLNXyEU1sJavhPEckBQ1A")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      }, (error) => {
        console.log('FAILED...', error)
      })
    event.target.reset()
  }

  return (
    <div className='contact'>
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' type="text" name='name' required />
        <input placeholder='Email' type="email" name='email' required />
        <textarea placeholder='Message' type="textarea" name='message' required />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Contact
