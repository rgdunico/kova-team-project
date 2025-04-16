import React from "react";
import Header from "./Header";
import '../styles/footer.css'
import logo from '../images/home-banner/america-w.png'

export default function Layout({ children }) {
  return <div className="layout">
    <Header />
    <div className="content">
        {children}
    </div>

    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column logo-column">
          <img src={logo} alt="America's Advantage Remodeling" className="logo" />
          <p>©2025 AMERICA'S ADVANTAGE REMODELING</p>
          <p><span className="icon">📞</span> 916-927-3093</p>
          <p><span className="icon">📧</span> INFO@AAREMODELS.COM</p>
          <div className="address">
            <strong>ROSEVILLE LOCATION</strong>
            <p>735 SUNRISE AVE SUITE 120, ROSEVILLE, CA 95661</p>
            <strong>SACRAMENTO LOCATION</strong>
            <p>2110 K ST, SACRAMENTO, CA 95816</p>
          </div>
        </div>

        <div className="footer-column">
          <h4>ABOUT</h4>
          <p>REVIEWS</p>
          <p>FAQ</p>
          <p>OUR WORK</p>
          <p>PORTFOLIO</p>
          <p>ABOUT US</p>
          <p>OUR GUIDE</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS OF USE</p>
        </div>

        <div className="footer-column">
          <h4>PRODUCT</h4>
          <p>KITCHEN CABINETS</p>
          <p>KITCHEN COUNTERTOPS</p>
          <p>QUARTZ COUNTERTOPS</p>
          <p>GRANITE COUNTERTOPS</p>
        </div>

        <div className="footer-column">
          <h4>SERVICES</h4>
          <p>HOME REMODELING</p>
          <p>KITCHEN REMODELING</p>
          <p>BATHROOM REMODELING</p>
          <p>DESIGN SERVICES</p>
        </div>

        <div className="footer-column">
          <h4>OTHER</h4>
          <p>MOBILE HOMES</p>
          <p>SIDING</p>
          <p>WINDOWS</p>
          <p>HARDWOOD FLOORING</p>
        </div>

        <div className="footer-column">
          <h4>BLOG</h4>
          <p>HOW TO REMOVE KITCHEN COUNTERTOP IN 7 STEPS</p>
          <p>THE COST TO REPLACE KITCHEN CABINETS AND COUNTERTOPS</p>
          <p>WHAT DOES REFRESHED BATHROOM MEAN?</p>
          <p>WHAT IS A BATHROOM VANITY? EVERYTHING YOU NEED TO KNOW</p>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>GET QUOTE</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </footer>
    
  </div>;
}
