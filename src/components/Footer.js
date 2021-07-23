import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      {/* beginning of editing responsive icons on footer */}
      <Container className='m-0'>
        <Row className='footer-icons pt-5 pb-5'>
          <Col className='text-center p-md-0'>
            <img src={process.env.PUBLIC_URL + '/javascript.png'} alt='javascript' />
          </Col>
          <Col className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/html.png'} alt='html' />
          </Col>
          <Col className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/css.png'} alt='css' />
          </Col>
          <Col className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/bootstrap.png'} alt='bootstrap' />
          </Col>
          {/* </Row>
        <Row className='footer-icons pt-5 pb-5'> */}
          <Col className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/mongo.png'} alt='mongo' />
          </Col>
          <Col  className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/express.png'} alt='express' />
          </Col>
          <Col  className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/react.png'} alt='react' />
          </Col>
          <Col  className='text-center p-xs-0'>
            <img src={process.env.PUBLIC_URL + '/node.png'} alt='node' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
