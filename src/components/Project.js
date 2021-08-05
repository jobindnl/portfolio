import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Project.css'

function Project({ title, desc, img, link }) {
  return (
    <div>
      <Card border='secondary' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Button href={link}
            target='_blank'
            variant="warning">Take me there!
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Project
