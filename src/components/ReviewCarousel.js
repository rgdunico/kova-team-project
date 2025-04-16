import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../styles/reviewcarousel.css'
import User from '../images/logo/user.png'

const reviews = [
  {
    name: 'Bobbie',
    date: 'February 13',
    message:
      'AAR just completed our remodel and exceeded all our expectations. ',
      avatar: User
  },
  {
    name: 'Gabi',
    date: 'February 4',
    message:
      'Everything from the initial visit to the start of the work and the results was great. The crew that handled our project was always on time, respectful, and highly skilled.',
      avatar: User
    },
  {
    name: 'Sanya',
    date: '2 months ago',
    message:
      'Really satisfied with full major complete kitchen remodeling project. Dmitriy was very thorough and detail-oriented, ensuring that every inch of the design matched our vision.',
      avatar: User
  },
  {
    name: 'Sanya',
    date: '2 months ago',
    message:
      'Really satisfied with full major ',
      avatar: User
  },
];

const truncate = (text, maxLength) =>
  text.length > maxLength ? text.substring(0, maxLength) + '...' : text;


const ReviewCard = ({ name, date, message, avatar }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="avatar-block">
          <img src={avatar} alt={name} className="avatar-img" />
          <div>
            <strong>{name}</strong>
            <div className="review-date">{date}</div>
          </div>
        </div>
      </div>
      <div className="stars">★★★★★</div>
      <p className="review-message">
        {expanded ? message : truncate(message, maxLength)}
        {message.length > maxLength && (
          <span className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? ' Read less' : ' Read more'}
          </span>
        )}
      </p>
    </div>
  );
};

const ReviewCarousel = () => {
  return (
    <div className="review-carousel-wrapper">
      <Swiper
  modules={[Autoplay]}
  spaceBetween={5}
  slidesPerView={1.2}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  loop
  breakpoints={{
    640: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>

        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
