import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [navScrollColor, setNavScrollColor] = useState(false)

  const onChangeNavColor = () => {
    if(window.scrollY >= 100){
      setNavScrollColor(true)
    } else {
      setNavScrollColor(false)
    }
  };

  window.addEventListener("scroll", onChangeNavColor);


  return (
    <nav className={navScrollColor ? "nave-scroll-color navbar-main" : 'navbar-main'}>
      <ul>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='home' spy={true} smooth={true} offset={-100} duration={100}>
          Home
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='about' spy={true} smooth={true} offset={-100} duration={100}>
          About
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='service' spy={true} smooth={true} offset={-100} duration={100}>
          Service
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='career' spy={true} smooth={true} offset={-100} duration={100}>
          Career
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='video' spy={true} smooth={true} offset={-100} duration={100}>
          Video
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='team' spy={true} smooth={true} offset={-100} duration={100}>
          Team
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='testimonial' spy={true} smooth={true} offset={-100} duration={100}>
          Testimonial
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='feedback' spy={true} smooth={true} offset={-100} duration={100}>
          Feedback
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='contact' spy={true} smooth={true} offset={-100} duration={100}>
          Contact
          </Link>
          </li>
        <li className='nav-item'>
        <Link activeClass='active-navItem' to='subscription' spy={true} smooth={true} offset={-100} duration={100}>
          Subscription
          </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
