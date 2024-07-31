import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Service from './component/Service/Service.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import Subscription from './component/Subscription/Subscription.jsx'
import './App.css'
import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Testimonial />
    <Subscription />
    <ScrollToTop smooth
    top="300"
    color='white'
    height='20'
    width='20'
    style={{borderRadius:"90px", backgroundColor:"#38004c"}}

    />

    </>
  )
}

export default App
