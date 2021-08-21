import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project from './components/Project'
import music from './assets/music_website.jpg'
import connect4 from './assets/connect4.jpg'
import photoWall from './assets/photoWall.jpg'
import adviceGenerator from './assets/adviceGenerator.jpg'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading => {
        return !loading
      })
    }, 3000)
  }, [])
  return (
    // loading
    //   ?
    //   <SyncLoader className='loader' color={'#ffcc00'} size={'2rem'} margin={4} />
    //   :
    <div>
      <Navigation />
      {/* Home component */}
      <Container>
        <Row className='app_container mt-5 align-items-center'>
          <Col xs={12} lg={6} className='d-inline-flex mt-5 justify-content-center'>
            <Profile />
          </Col>
          <Col>
            <Description />
          </Col>
        </Row>
      </Container>
      <div className="footer_container">
        <Footer />
      </div>
      <div id='project' className='projects_container'>
        {/* Projects component */}
        <Project
          title='Connect 4'
          img={connect4}
          desc='Collaborated with others to make a Connect 4 game'
          link='https://jobindnl.github.io/connect4/'
          additionalDetails='This was an application that built from the ground up
                in a team environment. I took on the lead developer role and delegated tasks among
                the rest of the team and took an active role in coding the functionality of the 
                game. This project took a lot of planning and coordination, however we were able to 
                deliver the finished project in time due to good communication and collaboration from 
                everyone in the team'
        />
        <Project
          title='Music Production'
          img={music}
          desc='Starter website built with HTML, CSS, & Javascript'
          link='https://jobindnl.github.io/MusicProduction/'
          additionalDetails='This site was made with the vision to show basic information
                about music production and the different tools that come with the program called
                Logic Pro X.'
        />
        <Project
          title='Photo Wall'
          img={photoWall}
          desc='Simple website that fetches pictures using an API'
          link='https://jobindnl.github.io/photoWall/'
          additionalDetails='This was an application that built from the ground up
                in a team environment. I took on the lead developer role and delegated tasks among
                the rest of the team and took an active role in coding the functionality of the 
                game.'
        />
        <Project
          title='Advice Generator'
          img={adviceGenerator}
          desc='Consumes external API to display random advice'
          link='https://jobindnl.github.io/advice-api/'
          additionalDetails='This was an application that built from the ground up
                in a team environment. I took on the lead developer role and delegated tasks among
                the rest of the team and took an active role in coding the functionality of the 
                game.'
        />
      </div>
      <div className="contact_container">
        {/* Contact component */}
        <Contact />
      </div>

    </div>
  )
}

export default App
