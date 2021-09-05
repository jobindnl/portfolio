import React from 'react'
import ResumePDF from '../assets/Resume.pdf'
import './Resume.css'

function Resume() {
  return (
    <button className='downloadPDF'>
      <a href={ResumePDF} download='Resume'>Download</a>
    </button>
  )
}

export default Resume
