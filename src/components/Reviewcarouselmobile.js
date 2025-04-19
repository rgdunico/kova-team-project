import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles/reviewcarouselmob.css';

import User from '../images/logo/user.png';
import User1 from '../images/logo/user-g.jpg';
import User2 from '../images/logo/user-2.png';
import User3 from '../images/logo/user-3.png';

const reviews = [
  {
    name: 'Mike',
    date: '1 month ago',
    message:
      'We recently remodeled our kitchen and great room and we are extremely excited and happy with the outcome. Eugene, Dmitriy and crew were all easy to work with, polite, professional and made our vision come true. The workmanship was outstanding and at very fair price. We definitely recommend them and look forward to working with them again. ',
    avatar: User3,
  },
  {
    name: 'Gabi',
    date: 'February 4',
    message:
      'Everything from the initial visit to the start of the work and the results was great. The crew that handled our project was always on time, respectful, and highly skilled.',
    avatar: User,
  },
  {
    name: 'Sanya',
    date: '2 months ago',
    message:
      'Really satisfied with full major complete kitchen remodeling project. Dmitriy was very thorough and detail-oriented, ensuring that every inch of the design matched our vision.',
    avatar: User1,
  },
  {
    name: 'Carla',
    date: '2 months ago',
    message:
      'I cannot say enough about this company. After working in the commercial construction industry for 26 years, I am very familiar with the habits of contractors. We had a complete remodel of our kitchen and dining room. These guys blew us away! Their professionalism and craftsmanship are top-notch. Highly recommend!',
    avatar: User2,
  },
];

const truncate = (text, maxLength) =>
  text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

const ReviewCard = ({ name, date, message, avatar }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  return (
    <div className="review-card-mobile">
      <div className="review-header">
        <div className="avatar-block">
          <img src={avatar} alt={name} className="avatar-img" />
          <div>
            <strong className="review-name">{name}</strong>
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
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
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
