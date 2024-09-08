import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade'
import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";




const Home = ({theme, handleChangeTheme}) => {
  return (
    <div className='container-fluid home' id='home'>
      <div className="theme-change" onClick={() => handleChangeTheme()}>
        {theme === 'light' ? (<BsMoonStarsFill size={40}/>):(  <IoMdSunny size={40}/>)}
      </div>
      <Fade left>
      <div className="container home-content">
            <h1>
            <Typewriter
            options={{
              strings: [
                'Web developer',
                 'Mobile application developer',
                 'Product marketing',
                 'Digital marketing',
                 'Sales services',
                 'Cloud storage',
                ],
              autoStart: true,
                loop: true,
                delay: 5,
            }}
      />
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laudantium nesciunt accusantium suscipit porro autem? Provident, cumque? Earum quod vel esse quisquam perspiciatis inventore incidunt accusantium nemo ducimus, necessitatibus facilis consequuntur voluptatum repellat, dignissimos suscipit cupiditate quis reiciendis deleniti. Molestias.
            </p>
            <span className="view-deatlis-home-buttom">View Detalis</span>
        </div>
      </Fade>
       
    </div>
  )
}

export default Home
