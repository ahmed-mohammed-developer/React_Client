import React, { useState } from 'react'
import './NavbarMobile.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';



const NavbarMobile = () => {

    const [open, setOpen] = useState(false);

    const handleNavbarOpen = () => {
        setOpen(!open)
    }



  return (
    <div className='responsive-mobile-view'>
        <div className="container-fluid mobile-view-header">
            <p><GiHamburgerMenu size={25}  onClick={handleNavbarOpen}/></p>
        </div>

        {open? (
             <div className="mobile-nav">
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
             </div>
        ):null}
       
    </div>
  )
}

export default NavbarMobile
