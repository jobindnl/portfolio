import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Container, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'
import './Navigation.css'

function Navigation() {
  return (
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand>
            <img width='60px' src={logo} alt="site logo" />
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
