import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/' exact><img src="logo.png" alt="logo JD" /></Link>
      <Link to='/'>About Me</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact Me</Link>
    </div>
  )
}

export default Navigation
