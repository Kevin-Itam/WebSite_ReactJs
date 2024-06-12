import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/Videoplayer'
import { useState } from 'react' 
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we Offort'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What student says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
