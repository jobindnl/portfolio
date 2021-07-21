import React from 'react'
import './Profile.css'
import { Image } from 'react-bootstrap'

function Profile() {
  return (
    <div className='profile'>
      <Image 
      className='profile_image' 
      src="headshot_professional.png" 
      alt="profile image" 
      roundedCircle />
      <h4>Jobin Daniel</h4>
      <code className='profile_code'>SOFTWARE ENGINEER</code>
    </div>
  )
}

export default Profile
