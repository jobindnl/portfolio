import React from 'react'
import './Profile.css'
import { Image } from 'react-bootstrap'
import profilePic from './headshot_professional.png'

function Profile() {
  return (
    <div className='profile'>
      <Image 
      className='profile_image' 
      src={profilePic} 
      alt="profile image" 
      roundedCircle />
      <h1>Jobin Daniel</h1>
      <code className='profile_code'>SOFTWARE ENGINEER</code>
    </div>
  )
}

export default Profile
