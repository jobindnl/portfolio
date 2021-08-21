import React from 'react'
import { Card, Button, Col, Container, Row, Image } from 'react-bootstrap'
import './Project.css'

function Project({ title, desc, img, link, additionalDetails }) {
  return (
    <Row name='project' className='mt-5'>
      <Col md={4} lg={4} className='d-inline-flex flex-column justify-content-center'>
        <Image src={img} fluid />
      </Col>
      <Col md={8} lg={8}>
        <div className="full-details">
          <h2 className='title-details'>
            {title}
          </h2>
          <div>
            <p className='paragraph-details'>
              {additionalDetails}
            </p>
            <Col>
              <Button target='_blank' href={link} variant='warning'>Visit page</Button>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Project
