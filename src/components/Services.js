import React from 'react';
import '../styles/services.css';
import img1 from '../images/services/img1.webp';
import img1_1 from '../images/services/img1-1.webp';
import img1_2 from '../images/services/img1-2.webp';
import img1_3 from '../images/services/img1-3.webp';

const images = [
  { src: img1, title: 'Kitchen Remodeling' },
  { src: img1_1, title: 'Bathroom Remodeling' },
  { src: img1_2, title: 'Flooring' },
  { src: img1_3, title: 'Siding' },
  { src: img1_1, title: 'Windows' },
  { src: img1, title: 'Mobile Homes' },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
  {images.map((image, index) => (
    <div key={index} className="image-container">
      <img src={image.src} alt={image.title} />
      <div className="image-title">{image.title}</div>
    </div>
  ))}
</div>

  );
};

export default ImageGrid;