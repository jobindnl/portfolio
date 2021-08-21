import React from 'react'
import { Link } from 'react-scroll';
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
              {/* <HashLink smooth to='/'>About</HashLink> */}
              <Link duration={300} activeClass='active' smooth={true} to='project'>Projects</Link>
              <Link duration={500} activeClass='active' smooth={true} to='contactID'>Contact me</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation
