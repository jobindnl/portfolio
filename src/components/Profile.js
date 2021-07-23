import React from 'react'
import './Profile.css'
import { Image } from 'react-bootstrap'

function Profile() {
  return (
    <div className='profile'>
      <Image 
      className='profile_image' 
      src={process.env.PUBLIC_URL + '/headshot_professional.png'} 
      alt="profile image" 
      roundedCircle />
      <h1>Jobin Daniel</h1>
      <code className='profile_code'>SOFTWARE ENGINEER</code>
    </div>
  )
}

export default Profile
