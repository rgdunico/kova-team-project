import React from "react";
import '../styles/header.css'
import Alogo from '../images/home-banner/america-w.png'

export default function Header() {
  return (

    (
        <header>
          {/* Top Bar */}
          <div className="top-bar">
            <div className="header-container top-inner">
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="contact-info">
                <span><a href="#">Mon - Sat: 9:00am - 6:00pm </a><i className="far fa-clock"></i> </span>
                <span><a href="#">916-507-0469 </a><i className="fas fa-phone"></i> </span>
              </div>
            </div>
          </div>
    
          {/* Main Navbar */}
          <nav className="main-nav">
            <div className="header-container nav-inner">
              <div className="logo">
                <img src={Alogo} alt="Logo" />
              </div>
              <ul className="nav-links">
                <li className="active">Home</li>
                <li>About Us <span className="dropdown">&#9662;</span> 
                    <ul className="dropdown-menu">
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Reviews</li>
                    <li>Portfolio</li>
                    </ul>             
                </li>
                <li>Product <span className="dropdown">&#9662;</span>
                  <ul className="dropdown-menu">
                    <li>Kitchen Cabinets</li>
                    <li>Kitchen Countertops</li>
                    <li>Quarts Countertops</li>
                    <li>Granite Countertops</li>
                  </ul>                
                </li>
                <li>Services <span className="dropdown">&#9662;</span>
                <ul className="dropdown-menu">
                    <li>Kitchen Cabinets</li>
                    <li>Kitchen Countertops</li>
                    <li>Quarts Countertops</li>
                    <li>Granite Countertops</li>
                  </ul>
                </li>
                <li>Our Work</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </nav>
        </header>
  )
)
}
