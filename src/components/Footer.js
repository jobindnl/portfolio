import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      {/* beginning of editing responsive icons on footer */}
      <Container className='m-0'>
        <Row className='footer-icons pt-5 pb-5'>
          <Col className='text-center p-0 p-md-0 d-inline-flex justify-content-around'>
            <img src={process.env.PUBLIC_URL + '/javascript.png'} alt='javascript' />
            <img src={process.env.PUBLIC_URL + '/html.png'} alt='html' />
            <img src={process.env.PUBLIC_URL + '/css.png'} alt='css' />
            <img src={process.env.PUBLIC_URL + '/bootstrap.png'} alt='bootstrap' />
          </Col>
          <Col className='text-center p-0 p-md-0 d-inline-flex justify-content-around'>
            <img src={process.env.PUBLIC_URL + '/mongo.png'} alt='mongo' />
            <img src={process.env.PUBLIC_URL + '/express.png'} alt='express' />
            <img src={process.env.PUBLIC_URL + '/react.png'} alt='react' />
            <img src={process.env.PUBLIC_URL + '/node.png'} alt='node' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
