import React, { createContext, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Service from './component/Service/Service.jsx'
import Team from './component/Team/Team.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import Feedback from './component/Feedback/Feedback.jsx'
import Subscription from './component/Subscription/Subscription.jsx'
import Footer from './component/Footer/Footer.jsx'
import Video from './component/Video/Video.jsx'
import Career from './component/Career/Career.jsx'
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import NavbarMobile from './component/Navbar/NavbarMobile/NavbarMobile.jsx'
import Contact from './component/Contact/Contact.jsx'

export const ThemContent = createContext(null);



const App = () => {

    const [theme, setThem] = useState('light');

    const handleChangeTheme = () => {
      setThem((current) => (current === "light" ? "dark" : "light"))
    }


  return (
    <ThemContent.Provider value={{theme, handleChangeTheme}}>
    <Navbar />
    <NavbarMobile theme={theme} handleChangeTheme={handleChangeTheme}/>
    <Home theme={theme} handleChangeTheme={handleChangeTheme} />
    <div className='main-theme-compo' id={theme}>
    <About />
    <Service />
    <Career />
    <Video />
    <Team />
    <Testimonial />
    <Feedback />
    <Contact />
    </div>
    <Subscription />
    <Footer />
    <ScrollToTop smooth
    top="300"
    color='white'
    height='20'
    width='20'
    style={{borderRadius:"90px", backgroundColor:"#38004c"}}
    />
    </ThemContent.Provider>
  )
}

export default App
