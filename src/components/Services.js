import React from 'react';
import '../styles/services.css';
import img1 from '../images/services/kitchen-remodel.webp';
import img2 from '../images/services/bathroom-remodel.webp';
import img3 from '../images/services/flooring.webp';
import img4 from '../images/services/siding.webp';
import img5 from '../images/services/windows.webp';
import img6 from '../images/services/mobile-home.webp';

const images = [
  { src: img1, title: 'Kitchen Remodeling' },
  { src: img2, title: 'Bathroom Remodeling' },
  { src: img3, title: 'Flooring' },
  { src: img4, title: 'Siding' },
  { src: img5, title: 'Windows' },
  { src: img6, title: 'Mobile Homes' },
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