import React from 'react'
import { FaCcVisa } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";

function Footer() {
    return( <>

 
     <footer>
        <div className="container">
            <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>Our expertise</h2>
                        <ul>
                            <li>Burgers</li>
                            <li>Fries</li>
                            <li>Sides</li>
                            <li>Desserts</li>
                            <li>Drinks</li>
                        </ul>
                    </div>
                  </div>

                   <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>About us</h2>
                        <ul>
                            <li><a href="#">Bun Drop history</a></li>
                            <li><a href="#">What makes us special</a></li>
                        </ul>
                    </div>
                  </div>

                    <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>We accept:</h2>
                        <div className="card-area">
                            <FaCcVisa className='icon' />
                            <FaCcMastercard className='icon'/>
                            <p className='swish'>Swish</p>
                        </div>
                    </div>
                </div>

                   <div className="col-lg-3 col-sm-6">
                    <div className="single-box">
                        <h2>Follow us:</h2>
                        <div className="socials-area">
                            <FaInstagram className='icon' />
                            <CiFacebook className='icon'/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     </footer>


    </> );
}

export default Footer;