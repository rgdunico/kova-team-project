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
    
    <div className="carousel-mobile">
      
            <div
              className="elfsight-app-47c232b2-0023-4db2-8261-6209ff6cd4d8"
              data-elfsight-app-lazy
            ></div></div>




  );
}
