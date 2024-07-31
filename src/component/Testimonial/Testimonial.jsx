import React, { useState } from 'react'
import './Testimonial.css'

const Testimonial = () => {

    const data = [
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1669782051640-1f503f31d916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1592827095305-68f21edefb82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        {
            img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content:  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            name: 'Jad Mog',
            position: "MCA"
        },
        
    ]


    const [showMorePost, setShowMorePost] = useState(3)
    const lodMore = () => {
        setShowMorePost((prev) => prev + 3);
    }

  return (
    <div className='container testimonial-section' id='testimonial'>
      <div className="section-title">
            <h5>Testimonial</h5>
            <div className="line"></div>
        </div>

        <div className="row">
            {data.slice(0, showMorePost).map((item, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className= {index === 0 ? "marked-content-card" : "content-card"} >
                        <img src={item.img} alt={item.name} />
                        <p>
                            {item.content}
                        </p>
                        <p>
                        <span className='name'>
                            {item.name}
                        </span>
                        </p>
                        <p>
                            {item.position}
                        </p>
                    </div>
                </div>
            ))}

                {showMorePost >= data.length ? null : (
                         <span className="load-more-button" onClick={lodMore}>
                         Load More
                     </span>
                )}
           
        </div>
    </div>
  )
}

export default Testimonial
