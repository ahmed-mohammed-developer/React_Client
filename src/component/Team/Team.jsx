import React from 'react'
import './Team.css'
import data from './data.json';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const Team = () => {
    const posts = data.posts;
  return (
    <div className='container team'>
      <div className="section-title">
             <h5>Team Work</h5>
              <span className='line'></span>
     </div>
     <div className="row">
        {posts.map((item, index)=> (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="card team-item">
                    <img src={item.url} alt={item.name} />
                    <div className="team-info">
                        <h6>{item.name}</h6>
                        <p>{item.content}</p>
                    </div>
                    <span className="line-for-team"></span>
                    <div className="team-icon">
                        <p>
                        <FaLinkedinIn size={25}/>
                        </p>
                        <p>
                        <FaXTwitter size={25}/>
                        </p>
                        <p>
                        <FaFacebookF size={25}/>
                        </p>
                    </div>
                </div>
            </div>
        ))}
     </div>
    </div>
  )
}

export default Team
