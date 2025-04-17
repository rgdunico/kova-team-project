import React, { useEffect } from "react";
import "../styles/global.css";

export default function ReviewSection() {

  useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.setAttribute("data-use-service-core", "");
      document.body.appendChild(script);
    }, []);

  return (
    
    <div className="reviews">
            {/*  Elfsight Widget Mount Point */}
            <div
              className="elfsight-app-3b33e067-6a57-4dc0-86af-64586d1a7609"
              data-elfsight-app-lazy
            ></div></div>

  );
}
