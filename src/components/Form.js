import React, { useEffect } from "react";
import '../styles/global.css';

export default function Form() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/242554121.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Optional cleanup (in case component unmounts)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (

    <div className="form-responsive">
    <div className="form-card">
      <h2>
        Get an Extra $1,900 OFF<br />Your Kitchen Remodel
      </h2>
      <p className="form-note">
        *with installation. Offer Expires on April 2025
      </p>
      <p className="form-subtext">
        Request a Free* No-Obligation Quote & Expert Advice!
      </p>

      {/* This is where the form will be injected */}
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="3df2eea7-3ed3-4041-8e8a-2e028569cdc5"
        data-portal-id="242554121"
      ></div>
    </div>

    <div className="form-mobile">
    
      <h2>
        Gets an Extra $1,900 OFF<br />Your Kitchen Remodel
      </h2>
      <p className="form-note">
        *with installation. Offer Expires on April 2025
      </p>
      <p className="form-subtext">
        Request a Free* No-Obligation Quote & Expert Advice!
      </p>

      {/* This is where the form will be injected */}
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="3df2eea7-3ed3-4041-8e8a-2e028569cdc5"
        data-portal-id="242554121"
      ></div>
    
    </div>
    
    </div>

   
  );
}
