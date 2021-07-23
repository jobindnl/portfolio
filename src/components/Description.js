import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Description.css'

function Description() {
  return (
    <Row className='description'>
      <Col>
        <p>
          Hello! I am aspiring to become a Web Developer.
          I have worked with many technologies such as
          <span className='javascript'> Javascript</span>,
          <span className='html'> HTML</span>, <span className='css'> CSS</span>,
          and also the MERN stack.
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
