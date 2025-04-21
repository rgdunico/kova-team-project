import React from "react";
import '../styles/global.css';
import Glogo from '../images/home-banner/google-logo.png';
import Alogo from '../images/home-banner/angies-list.png';
import Hlogo from '../images/home-banner/home-adivisor.png';
import Blogo from '../images/home-banner/bbb.png';
import ReviewCarousel from "../components/ReviewCarousel";
import Form from '../components/Form';
import Reviewcarmobile from '../components/Reviewcarouselmobile'
import '../styles/review.css';

export default function Hero() {
  return (
    <section className="hero-section">

    
      <div className="hero-container">
        <div className="hero-left">
          <h1>KITCHEN & BATHROOM REMODELS</h1>
          <p className="subheading">Remodeling Contractor You Can Trust!</p>
          <button className="btn-estimate">GET FREE ESTIMATE</button>

          <div className="badges-hero">
            <img src={Glogo} alt="Google" />
            <img src={Hlogo} alt="Top Rated" />
            <img src={Alogo} alt="Angie's List" />
            <img src={Blogo} alt="BBB" />
          </div>

          <div className="reviews">
            <ReviewCarousel />
            
          </div>

          
        </div>

        <div className="hero-right">
          <Form />
        </div>
      </div>

      <div className="mobile-hero">
        <div className="hero-text">
        <h2>KITCHEN & BATHROOM REMODELS</h2>
        <p className="subheading">Remodeling Contractor You Can Trust!</p>
        <button className="btn-estimate">GET FREE ESTIMATE</button>
        </div>
        <div className="carousel-mobile"> 
           
          <Reviewcarmobile /> 
          </div>
        
        <Form />
      </div>

    </section>
  );
}
