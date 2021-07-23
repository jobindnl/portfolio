import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img src={process.env.PUBLIC_URL + "/javascript.png"} alt="javascript" />
      <img src={process.env.PUBLIC_URL + "/html.png"} alt="html" />
      <img src={process.env.PUBLIC_URL + "/css.png"} alt="css" />
      <img src={process.env.PUBLIC_URL + "/mongo.png"} alt="mongo" />
      <img src={process.env.PUBLIC_URL + "/express.png"} alt="express" />
      <img src={process.env.PUBLIC_URL + "/react.png"} alt="react" />
      <img src={process.env.PUBLIC_URL + "/node.png"} alt="node" />
    </div>
  )
}

export default Footer
