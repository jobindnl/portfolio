import React from 'react'
import './Profile.css'
import headshot from '../assets/headshot_professional.jpg'
import { Image, Col, Row } from 'react-bootstrap'

function Profile() {
  return (
    <Row className='profile d-inline-flex flex-column'>
      <Col>
        <Image
          className='profile_image'
          src={headshot}
          alt="profile image"
          roundedCircle 
        />
      </Col>
      <Col>
        <h1>Jobin Daniel</h1>
      </Col>
      <Col>
        <code className='profile_code'>SOFTWARE ENGINEER</code>
      </Col>
    </Row>
  )
}

export default Profile
