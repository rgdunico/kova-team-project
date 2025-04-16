import React from "react"
import "../styles/areas.css"

const areas = [
  "Antelope", "Arden Arcade", "Auburn", "Cameron Park", "Carmichael", "Citrus Heights", "Davis", "Dixon",
  "East Sacramento", "El Dorado Hills", "Elk Grove", "Elverta", "Fair Oaks", "Folsom", "Florin", "Gold River",
  "Granite Bay", "La Cresta Village", "La Riviera", "Lemon Hill", "Lincoln", "Loomis", "Mather", "Natomas",
  "Newcastle", "North Auburn", "North Highlands", "North Sacramento", "North Natomas", "Orangevale", "Penryn", "Placerville",
  "Pocket-Greenhaven", "Rancho Cordova", "Rancho Murieta", "Rio Linda", "Rocklin", "Rosemont", "Roseville", "Sacramento",
  "South Natomas", "Sun City, Roseville", "Vacaville", "Vineyard", "West Sacramento", "Woodland"
]

const AreasWeServe = () => {
  return (
    <section className="areas-section">
      <h2 className="areas-title">Areas We Serve</h2>
      <p className="areas-description">
        America's Advantage Remodeling (AAR) is proud to serve a wide range of cities, bringing our top-tier home remodeling services to
        communities far and wide. From the heart of the city to the suburbs, our team is ready to assist with your next project,
        ensuring the same level of excellence and commitment across all areas we serve. Check our list to find your city among those we enhance
        with beautiful, functional living spaces.
      </p>
      <div className="areas-grid">
        {areas.map((area, index) => (
          <div key={index} className="area-item"> {area}</div>
        ))}
      </div>
    </section>
  )
}

export default AreasWeServe
