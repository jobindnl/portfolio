import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
  return (
    <div>
      <Navbar expand='sm'>
        <Container>
          <Navbar.Brand>
            <img width='80px' src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
          </Navbar.Brand>
          <Nav>
            <Link to='/'>About</Link>
            {/* <Link to='/projects'>Projects</Link> */}
            <Link to='contact'>Contact me</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
