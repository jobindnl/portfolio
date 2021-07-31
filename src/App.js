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
    loading
      ?
      <SyncLoader className='loader' color={'#ffcc00'} size={'2rem'} margin={4} />
      :
      <div>
        <Navigation />
        <Switch>
          {/* Home component */}
          <Route exact path='/'>
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
          </Route>
          {/* Contact component */}
          <Route path='/contact'>
            <div className="contact_container">
              <Contact />
            </div>
          </Route>
          {/* Projects component */}
          <Route path='/projects'>
            <div className='projects_container'>
              <Project
                title='Connect 4'
                img='connect4.jpg'
                desc='Group Collaboration project where I took on the lead developer role to create a Connect 4 game'
                link='https://jobindnl.github.io/connect4/'
              />
              <Project
                title='Music Production'
                img='music_website.jpg'
                desc='Starter website built with HTML, CSS, & Javascript'
                link='https://jobindnl.github.io/MusicProduction/'
              />
              <Project
                title='Photo Wall'
                img='photoWall.jpg'
                desc='Simple website that fetches pictures using an API'
                link='https://jobindnl.github.io/photoWall/'
              />
            </div>
          </Route>
        </Switch>
      </div>
  )
}

export default App
