import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer-about-section">
                    <h6>About</h6>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error hic tenetur labore nam odit aut distinctio aliquid nobis alias assumenda?
                    </p>
                    <span className="soical-icon">
                        <p>
                        <FaFacebookSquare size={30}/>
                        </p>
                        <p>
                        <FaSquareXTwitter size={30}/>
                        </p>
                        <p>
                        <FaInstagramSquare size={30}/>
                        </p>
                        <p>
                        <FaLinkedin size={30}/>
                        </p>
                    </span>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer-serv">
                    <h6>Services</h6>
                    <div className="footer-item">
                        <li>Product Sort</li>
                        <li>Product Sort</li>
                        <li>Product Sort</li>
                        <li>Product Sort</li>
                        <li>Product Sort</li>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="footer-serv">
                    <h6>Customer</h6>
                    <div className="footer-item">
                        <li>Log in</li>
                        <li>My Account</li>
                        <li>Web List</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
