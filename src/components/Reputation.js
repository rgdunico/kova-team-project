import React from "react";
import Glogo from '../images/home-banner/google-logo.png'
import Alogo from '../images/home-banner/angies-list.png'
import Hlogo from '../images/home-banner/home-adivisor.png'
import Blogo from '../images/home-banner/bbb.png'
import Tlogo from '../images/home-banner/logo-trade.webp'
import Nlogo from '../images/home-banner/nari.webp'
import '../styles/global.css'

export default function Reputation() {
  return (
    <div className="badges" id="reputation">
        <div><h2>Reputation</h2></div>
              <img src={Glogo} alt="Google" />
              <img src={Hlogo} alt="Top Rated" />
              <img src={Alogo} alt="Angie's List" />
              <img src={Tlogo} alt="Trade" />
              <img src={Nlogo} alt="Nari" />
              <img src={Blogo} alt="BBB" />
            </div>

  )
}
