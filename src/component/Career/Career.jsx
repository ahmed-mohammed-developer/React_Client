import React, { useState } from 'react'
import './Career.css'

const Career = () => {

    const url = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);

    const loadPostDtat = () => {
        
    }




  return (
    <div className='container career mb-5'>
        <div className="section-title mt-5">
            <h5>Career</h5>
            <div className="line"></div>
        </div>
    </div>
  )
}

export default Career