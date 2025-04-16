import React, { useState } from 'react';
import '../styles/review.css';
import googleLogo from '../images/logo/google.webp';
import yelpLogo from '../images/logo/yelp.png';
import homeadvisorLogo from '../images/logo/homeadvisor.png';
import houzzLogo from '../images/logo/houzz.png';

const sourceIcons = {
  google: googleLogo,
  yelp: yelpLogo,
  homeadvisor: homeadvisorLogo,
  houzz: houzzLogo,
};



const reviews = [
  {
    id: 1,
    author: 'Carla Owens',
    comment: 'I cannot say enough about this company. After working in the...',
    rating: 5,
    source: 'Google',
  },
  {
    id: 2,
    author: 'Mike Twitty',
    comment: 'We recently remodeled our kitchen and great room and are...',
    rating: 5,
    source: 'Google',
  },
  {
    id: 3,
    author: 'Mike T.',
    comment: 'We recently remodeled our kitchen and great room and we are...',
    rating: 5,
    source: 'Yelp',
  },
  {
    id: 4,
    author: 'Bobbie Diggs',
    comment: "We just completed our kitchen remodel with AAR and couldn't be...",
    rating: 5,
    source: 'Google',
  },
  {
    id: 5,
    author: 'Jorge Belda',
    comment: 'Excellent job and workmanship. Pleasant people to work with.',
    rating: 5,
    source: 'HomeAdvisor',
  },
  {
    id: 6,
    author: 'Emily Chen',
    comment: 'Good product, but slow shipping.',
    rating: 3,
    source: 'Yelp',
  },

  {
    id: 7,
    author: 'Emily Chen',
    comment: 'Good product, but slow shipping.',
    rating: 3,
    source: 'Google',
  },

  {
    id: 8,
    author: 'Emily Chen',
    comment: 'Good product, but slow shipping.',
    rating: 3,
    source: 'Google',
  },
];

// const sources = ['All Reviews', 'Google', 'Yelp', 'HomeAdvisor', 'Houzz'];
const sources = [
  { label: 'All Reviews', logo: null },
  { label: 'Google', logo: googleLogo },
  { label: 'Yelp', logo: yelpLogo },
  { label: 'HomeAdvisor', logo: homeadvisorLogo },
  { label: 'Houzz', logo: houzzLogo },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSource, setSelectedSource] = useState('All Reviews');
  const reviewsToShow = 5;

  const filteredReviews =
    selectedSource === 'All Reviews'
      ? reviews
      : reviews.filter((r) => r.source === selectedSource);

  const currentReviews = filteredReviews.slice(currentIndex, currentIndex + reviewsToShow);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, filteredReviews.length - reviewsToShow));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleFilterChange = (source) => {
    setSelectedSource(source);
    setCurrentIndex(0);
  };

  return (
    <div className="review-slider">
     
      <div className="filter-tabs">
  {sources.map((source, index) => (
    <button
      key={index}
      className={`filter-button ${selectedSource === source.label ? 'active' : ''}`}
      onClick={() => handleFilterChange(source.label)}
    >
      {source.logo && (
        <img
          src={source.logo}
          alt={`${source.label} logo`}
          style={{ width: 16, height: 16, marginRight: 6, verticalAlign: 'middle' }}
        />
      )}
      {source.label}
    </button>
  ))}
</div>


      <div className="review-row">
        <button className="nav-button left" onClick={handlePrev} disabled={currentIndex === 0}>
          &#8249;
        </button>

        <div className="review-container">
          {currentReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                
                <img
  src={sourceIcons[review.source.toLowerCase()]}
  alt={`${review.source} logo`}
/>

                <span>{review.source}</span>
              </div>
              <h3>{review.author}</h3>
              <div className="stars">
                {Array(review.rating).fill().map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
              <p>{review.comment}</p>
              <span className="read-more">Read more</span>
            </div>
          ))}
        </div>
        
        <button
          className="nav-button right" id='buttons'
          onClick={handleNext}
          disabled={currentIndex >= filteredReviews.length - reviewsToShow}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
