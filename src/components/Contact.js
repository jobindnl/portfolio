import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' type="text" name='name' required />
        <input  placeholder='Email' type="email" name='email' required />
        <input  placeholder='Message' type="textarea" name='message' required/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Contact
