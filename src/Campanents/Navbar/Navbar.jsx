import React from 'react'
import Navbar from '../Navbar.css'
import frame from '../../assets/Frame 64(1).png'

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
            <div className="header-container">
                <img src={frame} alt="" />
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Log in</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
