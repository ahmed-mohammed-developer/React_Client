import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Service from './component/Service/Service.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import Subscription from './component/Subscription/Subscription.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Testimonial />
    <Subscription />
    </>
  )
}

export default App
