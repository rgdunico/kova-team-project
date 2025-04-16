import React from "react";
import '../styles/global.css'
import '../styles/quotes.css'
import Img from '../images/home-banner/two-man.webp'

export default function  quote() {
  return <div className="bg-section"> <div className="container-section">
    <div className="sec">
        <h2>America's Advantage Remodeling (AAR)</h2>
        <p>For the best home remodeling Sacramento has to offer, 
            the choice is easy – turn to America’s Advantage Remodeling. 
            We offer an assortment of home improvement services to Sacramento-area 
            residents, and have built our reputation over more than 25 years. 
            Whether your kitchen, bathroom, or the entire house need attention,
             we can help. We’d love to hear from you today!</p>

             <button className="btn-estimate">GET A QUOTE TODAY</button>
    </div>
    <div className="sec">
        <img src={Img} />
    </div>
  </div></div> 
}
