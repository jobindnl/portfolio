import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, Navbar } from 'react-bootstrap'
import './Navigation.css'

function Navigation() {
  return (
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand>
            <img width='80px' src={process.env.PUBLIC_URL + '/logo.png'} alt="site logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to='/'>About</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='contact'>Contact me</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation
