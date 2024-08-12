import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campagn from './components/Campagn/Campagn'
import TeamMembers from './components/TeamMembers/TeamMembers'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
const [playVideo, setPlayVideo]=useState(false);

  return (
   <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subtitle={"Our Programs"} title={"What We Give to the Community"}/>
    <Program />
    <About setPlayVideo={setPlayVideo}/>
    <Title subtitle={"Our Campagn"} title={"Campagn Area And Communites"}/>
    <Campagn />
    <Title subtitle={"Our Partners "} title={"People who have Helped us"}/>
    <TeamMembers />
    <Title subtitle={"Contact us "} title={"Get in Touch With us"}/>
    <Contact />
    <Footer/>
    </div>
    <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
   </div>
  )
}

export default App
