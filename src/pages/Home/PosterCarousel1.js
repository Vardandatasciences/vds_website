import React, { useState } from "react";
import "./PosterCarousel.css";
import poster2 from "../../assets/Registrations.png";

const PosterCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>✖</button>
          <img src={poster2} alt="Ideathon 2025 - CMR College" className="poster-image1" />
        </div>
      </div>
    )
  );
};

export default PosterCarousel;
