import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { SyncLoader } from 'react-spinners'
import Intro from './components/Intro'
import projectIcon from './assets/projectIcon.png'
import resumeIcon from './assets/resumeIcon.png'
import Resume from './components/Resume'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Description from './components/Description'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project from './components/Project'
import music from './assets/music_website.jpg'
import connect4 from './assets/connect4.jpg'
import photoWall from './assets/photoWall.jpg'
import gameStart from './assets/gameStart.jpg'
import adviceGenerator from './assets/adviceGenerator.jpg'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(loading => {
        return !loading
      })
    }, 2000)
  }, [])
  return (
    // loading
    //   ?
    //   <SyncLoader className='loader' color={'#ffcc00'} size={'2rem'} margin={4} />
    //   :
    <div>
      <Navigation />
      {/* Home component */}
      <Container className='profile_container'>
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
      <div>
        <Intro 
          name='My Projects' 
          desc='Here are some of the projects that I have worked on ' 
          imgSrc={projectIcon}
          />
      </div>
      <div className='projects_container'>
        {/* Projects component */}
        <Project
          title='GameStart'
          img={gameStart}
          sourceCode='https://github.com/jobindnl/mern-course-capstone-jobindnl'
          link='https://mern-gamestart.herokuapp.com'
          desc='Capstone project built using React.js, HTML, CSS. Uses api from RAWG to display game
                data. Allows users to sign up and post/edit/delete reviews. Has user profile page where 
                more details about user is provided, including the reviews they posted, and games they
                purchased. Has shopping cart functionality where users can add games to
                shopping cart for checkout. Has a mock checkout page.'
        />
        <Project
          title='Connect 4'
          img={connect4}
          sourceCode='https://github.com/jobindnl/connect4'
          link='https://jobindnl.github.io/connect4/'
          desc='This was an application built 
                in a team environment. I took on the lead developer role and delegated tasks among
                the rest of the team and took an active role in coding the functionality of the 
                game. This project took a lot of planning and coordination, however we were able to 
                deliver the finished project in time due to good communication and collaboration from 
                everyone in the team'
        />
        <Project
          title='Music Production'
          img={music}
          sourceCode='https://github.com/jobindnl/MusicProduction'
          link='https://jobindnl.github.io/MusicProduction/'
          desc='Made with the vision to show basic information
                about music production and the different tools that come with the program called
                Logic Pro X. The biggest challenge was completing the picture carousel on the 
                instruments page, since it was done purely through Javascript. There are other 
                libraries that could be used, but I wanted to push myself in programming and did
                the entire functionality from scratch'
        />
        <Project
          title='Photo Wall'
          img={photoWall}
          sourceCode='https://github.com/jobindnl/photoWall'
          link='https://jobindnl.github.io/photoWall/'
          desc='Consumes an API from photo website to display data. This project made me manage
          big chunks of data. I had to organize and find the best way to parse the information from
          a JSON object'
        />
        <Project
          title='Advice Generator'
          img={adviceGenerator}
          sourceCode='https://github.com/jobindnl/advice-api'
          link='https://jobindnl.github.io/advice-api/'
          desc='Website made to fetch a randomly generated advice from an external API'
        />
      </div>
      <div>
        <Intro
          name='Download resume!'
          desc='Click below to save a copy of my resume'
          imgSrc={resumeIcon} 
          downloadLink={<Resume/>}
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
