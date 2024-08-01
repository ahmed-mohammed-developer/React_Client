import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player'


const Video = () => {

    const data = [
        {
            id:1,
            url: "https://www.youtube.com/watch?v=JcmJ59GCWO0",
            title: "Bader Al tarki"
        },
        {
            id:2,
            url: "https://www.youtube.com/watch?v=rWv7qwM7EqE",
            title: "Hithem Al tarki"
        },
        {
            id:3,
            url: "https://www.youtube.com/watch?v=hKQj_WpxFGc",
            title: "KHalid Al tarki"
        },
        {
            id:4,
            url: "https://www.youtube.com/watch?v=hKQj_WpxFGc",
            title: "KHalid Al tarki"
        },

    ]


  return (
    <div className='container video'>
        <div className="section-title">
            <h5>Video</h5>
            <div className="line"></div>
        </div>
        <div className="row">
            {data.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="video-info" key={index}>
                    <ReactPlayer url={item.url} controls width="auto" height="250px"/>
                    <h6>{item.title}</h6>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Video