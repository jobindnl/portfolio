import React from 'react'
import projectIcon from '../assets/projectIcon.png'
import { Image, Container, Row, Col } from 'react-bootstrap'
import './ProjectIntro.css'

function ProjectIntro() {
  return (
    <Container name='project' className='project-intro d-flex align-items-center mt-5'>
      <div>
        <h1>
          My Projects
        </h1>
        <p>
          Here are some of the projects that I have worked on
        </p>
      </div>
      <img src={projectIcon} alt='projectIcon' />
    </Container>
  )
}

export default ProjectIntro
