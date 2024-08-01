import React from 'react'
import './Feedback.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Feedback = () => {

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
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        adaptiveHeight: true,
        initialSlide: 0,
        rows:1,
        slidesPerRow:1,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                autoplay: false,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                autoplay: true,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                autoplay: true,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className='container feedback'>
         <div className="section-title">
            <h5>Feedback</h5>
            <div className="line"></div>
        </div>
        <div className="row">
        <Slider {...settings}>
            {data.map((item ,index) => (
                <div className="col-lx-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="card content-slider" key={index}>
                        <img src={item.img} alt={item.name}  className='center-img'/>
                        <p>{item.content}</p>
                    <h4>{item.name}</h4>
                    <p>{item.position}</p>
                    </div>
                  
                </div>
            ))}
                    </Slider>
        </div>
    </div>
  )
}

export default Feedback