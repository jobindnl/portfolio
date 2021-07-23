import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
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
        <Route path='/contact'>
          <div className="contact_container">
            <Contact />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
