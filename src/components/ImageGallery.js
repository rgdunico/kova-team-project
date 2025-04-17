import React, { useState } from "react";
import Modal from "./Modal";
import '../styles/gallery.css'

// Import images (or use require for dynamic)
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

  const handleImageClick = (id) => {
    setSelectedImages(imageGroups[id]);
    setModalOpen(true);
  };

  return (
    <>
      <div className="gallery">
        {Object.entries(imageGroups).map(([id, group]) => (
         
          <div key={id} className="image-section" onClick={() => handleImageClick(id)}>
  <img src={group[0]} alt={`Main ${id}`} />
  <div className="overlay-icon">
    <i className="fas fa-search search-icon"></i>
  </div>
</div>

        

        ))}
      </div>

      {modalOpen && (
        <Modal images={selectedImages} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ImageGallery;
