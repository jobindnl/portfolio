import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <div className='app_container'>
            <Profile />
            <Description />
          </div>
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
