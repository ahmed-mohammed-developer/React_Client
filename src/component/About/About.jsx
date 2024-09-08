import React from 'react'
import './About.css'
import Imag from '../../Image/1.png'
import { FcSlrBackSide, FcMindMap,  FcPhotoReel} from "react-icons/fc";
import Fade from 'react-reveal/Fade'






const About = () => {
  return (
    <div className='container about-section' id='about'>
        <div className="row">
        <Fade top>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="about-image">
                    <img src={Imag} height="470px" width='400px' alt='' />
                </div>
            </div>
            </Fade>
            <Fade top>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="about-detalis">
                    <div className="section-title">
                        <h5>About</h5>
                        <span className='line'></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit deserunt temporibus unde ea ratione libero.</p>
                    <div className="card-deaign">
                        <div className="about-list-item">
                            <div className="about-details-icon">
                                <p>
                                    <FcSlrBackSide size={50}/> 
                                </p>
                            </div>
                            <div>
                                <h6>Lorem psum dolor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-deaign">
                        <div className="about-list-item">
                            <div className="about-details-icon">
                                <p>
                                    <FcMindMap size={50}/> 
                                </p>
                            </div>
                            <div>
                                <h6>Lorem psum dolor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-deaign">
                        <div className="about-list-item">
                            <div className="about-details-icon">
                                <p>
                                    <FcPhotoReel size={50}/> 
                                </p>
                            </div>
                            <div>
                                <h6>Lorem psum dolor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default About
