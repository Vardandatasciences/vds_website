import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PosterCarousel.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import scroll icons

import poster2 from "../../assets/cmr.png";
import poster3 from "../../assets/vignan.png";

const PosterCarousel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null); // Reference to slider

  const closePopup = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleRedirect = () => {
    console.log("Redirecting to /idea/posters");
    navigate("/posters");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false, // Hide default arrows
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  return (
    isVisible && (
      <div className="popup-overlay" onClick={handleRedirect}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closePopup}>✖</button>

          {/* Left Scroll Button */}
          <button className="scroll-btn left" onClick={() => sliderRef.current?.slickPrev()}>
            <FaChevronLeft />
          </button>

          <Slider ref={sliderRef} {...settings}>
            <div>
              <img src={poster2} alt="Ideathon 2025 - Vignan College" className="poster-image1" />
            </div>
            <div>
              <img src={poster3} alt="Ideathon 2025 - CMR College" className="poster-image1" />
            </div>
          </Slider>

          {/* Right Scroll Button */}
          <button className="scroll-btn right" onClick={() => sliderRef.current?.slickNext()}>
            <FaChevronRight />
          </button>

          {/* Custom Dot Indicators */}
          <div className="custom-dots">
            <span className={`dot ${activeSlide === 1 ? "active" : ""}`}></span>
            <span className={`dot ${activeSlide === 2 ? "active" : ""}`}></span>
          </div>

          {/* Explore More Button */}
          <button className="explore-btn" onClick={handleRedirect}>Explore More</button>
        </div>
      </div>
    )
  );
};

export default PosterCarousel;
