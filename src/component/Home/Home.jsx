import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div className='container-fluid home' id='home'>
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
    </div>
  )
}

export default Home
