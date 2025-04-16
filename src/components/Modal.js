import React, { useState } from "react";
import "../styles/modal.css";

const Modal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>

      <div className="modal-main-image">
        <button className="nav-button left" onClick={handlePrev}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt={`Large ${currentIndex}`} />
        <button className="nav-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="thumbnail-row">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumb ${index}`}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
