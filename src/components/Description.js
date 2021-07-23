import React from 'react'
import './Description.css'

function Description() {
  return (
    <div className='description'>
      <p>
        Hello! I am aspiring to become a Web Developer.
        I have worked with many technologies such as
        <span className='javascript'> Javascript</span>,
        <span className='html'> HTML</span>, <span className='css'> CSS</span>,
        and also the MERN stack.
      </p>
      <div className='description_images'>
        <a target="_blank" rel="noopener noreferrer"
          href="https://github.com/jobindnl">
          <img src={process.env.PUBLIC_URL + '/github.png'} alt="github" />
        </a>
        <a target="_blank" rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jobindnl/">
          <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Description
