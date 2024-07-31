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
        <Link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Home</li>
        </Link>
        <link to='about' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>About</li>
        </link>
        <link to='service' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Service</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Career</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Video</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Team</li>
        </link>
        <link to='testimonial' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Testimonial</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Feedback</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Contact</li>
        </link>
        <link to='home' spy={true} smooth={true} offset={100} duration={100}>
        <li className='nav-item'>Subscription</li>
        </link>
      </ul>
    </nav>
  )
}

export default Navbar
