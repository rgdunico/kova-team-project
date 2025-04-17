import * as React from "react"
import Layout from "../components/Layout"
import Services from '../components/Services'
import Review from '../components/ReviewSection'
import Reputation from '../components/Reputation'
import Testimonials from '../components/Testimonials'
import AreasWeServe from '../components/AreasWeServe'
import Quote from '../components/Quote'
import ImageGallery from '../components/ImageGallery'
import Features from '../components/Features'
import '../styles/global.css'
import Articles from '../components/Articles'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
 <Layout>
    
  <Hero />

  <div className="image-gallery">
  <h2>Our Remodeling Work</h2>
<ImageGallery />
  </div>
 


  <div className="our-services">
    <h2>Our Services</h2>
    <p>At <b>America's Advantage Remodeling (AAR)</b>, 
      we pride ourselves on transforming homes into spaces of beauty and functionality.
       Our comprehensive range of services includes kitchen and bathroom remodels, flooring, siding,
        windows and mobile homes. Each project is approached with a commitment to quality and customer 
        satisfaction, ensuring that your vision becomes a reality. Trust America's Advantage Remodeling 
        (AAR) to bring expertise and care to every aspect of your home remodeling project.</p>
    <Services />
  </div>

  <div className="our-services">
  <h2>What People Say About Our Work</h2>
    <p><b><u><i>"Choosing America's Advantage Remodeling (AAR) was the best decision for our home renovation,"</i></u></b>
       say countless of satisfied customers. Our dedication to surpassing expectations resonates in
        the feedback we receive. From meticulous attention to detail to our exceptional customer 
        service. Trust us with your home.</p>
        <Review />
  </div>

  <div className="our-services">
   <Reputation />
  </div>
  <div className="gray-bg">
  <div className="our-services">
    <h2>Customer Testimonials</h2>
    <p>Discover the America's Advantage Remodeling (AAR) difference through
       the eyes of our clients each sharing a unique story of transformation.
        Hear firsthand how our team works closely with homeowners to bring their
         dream spaces to life, adhering to the highest standards of craftsmanship 
         and service.</p>

    <Testimonials />
  </div></div>
  <Quote />
  <div className="our-services">
  <h2>Featured Work</h2>
    <p>From modern kitchen renovations to stunning outdoor 
      living spaces, each picture highlights our ability to blend 
      aesthetic appeal with functionality.</p>
      <Features />
  </div>
<div className="blck-bg">
  <div className="our-services">
  <h2>Latest Articles</h2>
    <p>Stay informed with America's Advantage Remodeling's 
      latest insights and trends in home remodeling through our blog.
       Our three most recent articles cover a range of topics designed
        to inspire your next project and provide valuable tips for homeowners.
         Whether you're considering a major renovation or a simple refresh, 
         our blog is your resource for expert advice and industry knowledge.</p>
      <Articles />
      <button className="btn-estimate">SEE MORE ARTICLES</button>
  </div></div>

  <div className="areasweserve">
    <AreasWeServe />
  
  </div>
  



  </Layout>
   </div>
  
  )
}
