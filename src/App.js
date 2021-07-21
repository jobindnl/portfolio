import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import './App.css'

function App() {
  return (
    <div>
      <Navigation />
      <div className='app_container'>
        <Profile />
        <Description />
      </div>
    </div>
  )
}

export default App
