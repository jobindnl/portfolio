import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/' exact>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/contact'>Contact Me</Link>
    </div>
  )
}

export default Navigation
