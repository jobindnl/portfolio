import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Description.css'

function Description() {
  return (
    <Row className='description'>
      <Col className='mt-5'>
        <p>
          Hello! I am an aspiring Web Developer.
          I have worked with many technologies such as
          Javascript, HTML, CSS, Bootstrap, and also the MERN stack.
          I enjoy solving problems, collaborating on projects, and watching
          my code come to life on a webpage. 
        </p>
      </Col>
      <Row className='description_images d-inline-flex flex-row'>
        <Col xs={2}>
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/jobindnl">
            <img src={process.env.PUBLIC_URL + '/github.png'} alt="github" />
          </a>
        </Col>
        <Col xs={2}>
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jobindnl/">
            <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="linkedin" />
          </a>
        </Col>
      </Row>
    </Row>
  )
}

export default Description
