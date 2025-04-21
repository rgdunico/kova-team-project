import React, { useState } from "react";
import Modal from "./Modal";
import '../styles/featuresmob.css';

const imageGroups = {
    1: ["assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    2: ["assets/img2.webp", "assets/img1.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    3: ["assets/img1-2.webp", "assets/img1.webp", "assets/img2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    4: ["assets/img1-4.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    5: ["assets/img5.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    6: ["assets/img6.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    7: ["assets/img7.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    8: ["assets/img8.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    9: ["assets/img9.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img10.webp","assets/img11.webp","assets/img12.webp"],
    10: ["assets/img10.webp", "assets/img1-1.webp", "assets/img1.webp", "assets/img2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img11.webp","assets/img12.webp"],
    11: ["assets/img11.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img12.webp"],
    12: ["assets/img12.webp", "assets/img1.webp", "assets/img2.webp", "assets/img1-2.webp","assets/img1-2.webp","assets/img1-4.webp","assets/img5.webp","assets/img6.webp","assets/img7.webp","assets/img8.webp","assets/img9.webp","assets/img10.webp","assets/img11.webp"],
};

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keys = Object.keys(imageGroups);

  const handleNext = () => {
    if (currentIndex < keys.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageClick = (id) => {
    setSelectedImages(imageGroups[id]);
    setModalOpen(true);
  };

  const currentKey = keys[currentIndex];
  const currentImage = imageGroups[currentKey][0];

  return (
    <>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={handlePrev} disabled={currentIndex === 0}>
          ‹
        </button>

        <div className="gallery-carousel one-image-only">
          <div className="image-section" onClick={() => handleImageClick(currentKey)}>
            <img src={currentImage} alt={`Image ${currentKey}`} />
            <div className="overlay-icon">
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>
        </div>

        <button
          className="nav-btn right"
          onClick={handleNext}
          disabled={currentIndex === keys.length - 1}
        >
          ›
        </button>
      </div>

      {modalOpen && <Modal images={selectedImages} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ImageGallery;
