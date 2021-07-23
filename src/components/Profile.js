import React from 'react'
import './Profile.css'
import { Image, Col, Row } from 'react-bootstrap'

function Profile() {
  return (
    <Row className='profile d-inline-flex flex-column'>
      <Col>
        <Image
          className='profile_image'
          src={process.env.PUBLIC_URL + '/headshot_professional.png'}
          alt="profile image"
          roundedCircle />
      </Col>
      <Col>
        <h1>Jobin Daniel</h1>
      </Col>
      <Col>
        <code className='profile_code'>SOFTWARE ENGINEER</code>
      </Col>
    </Row>
    // <div className='profile'>
    //   <Image 
    //   className='profile_image' 
    //   src={process.env.PUBLIC_URL + '/headshot_professional.png'} 
    //   alt="profile image" 
    //   roundedCircle />
    //   <h1>Jobin Daniel</h1>
    //   <code className='profile_code'>SOFTWARE ENGINEER</code>
    // </div>
  )
}

export default Profile
