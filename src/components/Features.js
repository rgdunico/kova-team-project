import React, { useState } from "react";
import Modal from "./Modal";
import '../styles/features.css';

const imageGroups = {
  1: ["assets/img1.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  2: ["assets/img1-2.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  3: ["assets/img1-3.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  4: ["assets/img1-4.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  5: ["assets/img1-3.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  6: ["assets/img1-4.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  7: ["assets/img1-2.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
  8: ["assets/img1.webp", "assets/img1-1.webp", "assets/img1-2.webp"],
};

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const imagesPerPage = 3;
  const totalImages = Object.keys(imageGroups).length;

  const handleNext = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleImageClick = (id) => {
    setSelectedImages(imageGroups[id]);
    setModalOpen(true);
  };

  const visibleGroups = Object.entries(imageGroups).slice(startIndex, startIndex + imagesPerPage);

  return (
    <>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={handlePrev} disabled={startIndex === 0}>
          ‹
        </button>

        <div className="gallery-carousel">
          {visibleGroups.map(([id, group]) => (
            <div key={id} className="image-section" onClick={() => handleImageClick(id)}>
              <img src={group[0]} alt={`Main ${id}`} />
              <div className="overlay-icon">
                <i className="fas fa-search search-icon"></i>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-btn right"
          onClick={handleNext}
          disabled={startIndex + imagesPerPage >= totalImages}
        >
          ›
        </button>
      </div>

      {modalOpen && <Modal images={selectedImages} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ImageGallery;
