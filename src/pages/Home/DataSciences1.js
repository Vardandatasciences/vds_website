// src/DataSciences.js

import './DataSciences.css';
import dataVideo from '../../assets/videos/data_science1.mp4'; // Ensure this path is correct
import dataVideo2 from '../../assets/videos/Data 2.mp4'; // Ensure this path is
import dataVideo3 from '../../assets/videos/Data 4.mp4'; // Ensure this path is
import aiGif from '../../assets/videos/ai1.gif'; // Renamed to clarify this is a GIF
import webvideo from '../../assets/videos/web_development1.mp4';
import mobilevideo from '../../assets/videos/mobile_development1.mp4';
import imagevideo from '../../assets/videos/image_processing1.mp4';

// src/DataSciences.js
import React, { useEffect, useRef, useState } from 'react';

import aiImage from '../../assets/Images/Home_page/ai_img_chatgpt.webp';
// import imageProcessingImage from '../../assets/Images/Home_page/Image_processing.webp';
// import mobileAppImage from '../../assets/Images/Home_page/mobile_development.webp';
// import webDevImage from '../../assets/Images/Home_page/web-development.webp';
// import productLifecycleImage from '../../assets/Images/Home_page/product_lifecycle.webp';

const contentData = [
  {
    id: 'data-sciences',
    title: ['Data', 'Sciences'],
    description: 'Embark on a transformative data journey with Vardaan Data Sciences Service—where innovation turns data into a catalyst for business success in the digital era.',
    buttonText: 'Explore More',
    videoSrc: dataVideo,
  },
  
  {
    id: 'ai',
    title: ['Artificial Intelligence'],
    description: 'Harness the power of AI with our cutting-edge solutions. We specialize in machine learning, deep learning, natural language processing, and computer vision to create intelligent systems that automate processes, predict outcomes, and derive meaningful insights from complex data patterns.',
    videoSrc: aiGif,
  },
  {
    id: 'image-processing',
    title: ['Image Processing'],
    description: 'Transform visual data into actionable insights with our advanced image processing solutions. From computer vision applications to image recognition systems, we offer sophisticated algorithms for object detection, facial recognition, medical imaging analysis, and real-time video processing.',
    videoSrc: imagevideo,
  },
  {
    id: 'web-dev',
    title: ['Web Development'],
    description: 'Create powerful, responsive web applications with our expert development services. We deliver scalable, secure, and user-friendly solutions using modern frameworks and technologies. From e-commerce platforms to custom web applications, we bring your digital vision to life.',
    videoSrc: webvideo,
  },
  {
    id: 'mobile-dev',
    title: ['Mobile Development'],
    description: "Build innovative mobile applications that engage users and drive results. Our team develops native and cross-platform solutions for iOS and Android, focusing on performance, user experience, and seamless functionality. We create apps that stand out in today's mobile-first world.",
    videoSrc: mobilevideo,
  },
  // {
  //   title: ['Transformative Solutions for a Digital Future'],
  //   description: 'Revolutionize your business with our comprehensive digital transformation solutions. We integrate cutting-edge technologies, data-driven strategies, and innovative approaches to help organizations thrive in the digital age, ensuring sustainable growth and competitive advantage.',
  //   videoSrc: dataVideo3,
  // },

  // {
  //   title: ['Transformative Journey with Vardaan'],
  //   description: 'Dedicated to knowledge-sharing, our training programs provide practical skills in the ever-changing world of data sciences. As a consultancy, we bridge the gap between raw data and actionable insights, delivering trends analysis and dashboards using advanced analytics, machine learning, and AI.',
  //   videoSrc: dataVideo2,
  // },
  // {
  //   title: ['Transformative Solutions for a Digital Future'],
  //   description: 'Revolutionize your business with our comprehensive digital transformation solutions. We integrate cutting-edge technologies, data-driven strategies, and innovative approaches to help organizations thrive in the digital age, ensuring sustainable growth and competitive advantage.',
  //   videoSrc: dataVideo3,
  // }

];

// Helper function to determine if the source is a GIF
const isGifFile = (src) => {
  if (!src) return false;
  return src.toLowerCase().endsWith('.gif');
};

const DataSciences = ({ onComplete }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [sectionComplete, setSectionComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const totalSections = contentData.length;

  // Calculate section heights and set up observation
  useEffect(() => {
    if (!containerRef.current) return;

    // Set the total height of the container (5x viewport height)
    const viewportHeight = window.innerHeight;
    containerRef.current.style.height = `${viewportHeight * totalSections}px`;

    // Create an intersection observer to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [totalSections]);

  // Handle scroll events to change active content
  useEffect(() => {
    if (!containerRef.current || !isVisible) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + containerRect.top;
      const scrollPosition = window.scrollY;
      
      // Calculate relative scroll position within the container
      const relativeScrollPosition = scrollPosition - containerTop;
      
      // Each section takes up one viewport height
      const sectionHeight = window.innerHeight;
      
      // Calculate which section should be active
      const newIndex = Math.floor(relativeScrollPosition / sectionHeight);
      const clampedIndex = Math.max(0, Math.min(totalSections - 1, newIndex));
      
      // Update active index if changed
      if (activeIndex !== clampedIndex) {
        setActiveIndex(clampedIndex);
        console.log(`Switched to content ${clampedIndex}`);
      }

      // Check if we're at the last section and near its end
      if (clampedIndex === totalSections - 1) {
        // Calculate how close we are to the end of the last section
        const lastSectionScrollPosition = relativeScrollPosition - (sectionHeight * (totalSections - 1));
        const percentageScrolled = lastSectionScrollPosition / sectionHeight;
        
        // If we've scrolled past 90% of the last section
        if (percentageScrolled > 0.9 && !sectionComplete) {
          setSectionComplete(true);
          console.log("DataSciences section complete");
          
          // Notify parent component that section is complete
          if (onComplete && typeof onComplete === 'function') {
            onComplete();
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, isVisible, onComplete, sectionComplete, totalSections]);

  // Preload media for smoother experience
  useEffect(() => {
    contentData.forEach(item => {
      if (isGifFile(item.videoSrc)) {
        const img = new Image();
        img.src = item.videoSrc;
      } else {
        const video = document.createElement('video');
        video.src = item.videoSrc;
        video.preload = 'auto';
      }
    });
  }, []);

  return (
    <div className="datasciences-container" ref={containerRef}>
      <div className="data-sciences-wrapper" ref={wrapperRef}>
        <div className="data-sciences-main-container">
          {contentData.map((item, index) => (
            <div 
              key={index}
              className={`data-sciences-section ${index === activeIndex ? 'active' : ''}`}
            >
              {/* Left side - Text Content */}
              <div className="section-text-side">
                <div className="content-box">
                  {/* Title rendering */}
                  {Array.isArray(item.title) ? (
                    item.title.map((titleText, i) => (
                      <h1 
                        key={i} 
                        className="section-title"
                        style={{
                          color: index === 0 ? (i === 0 ? '#051937' : '#2c3e77') : 
                                 index === 1 ? '#c31432' :
                                 index === 2 ? '#134e5e' :
                                 index === 3 ? '#5c37b7' : '#0083b0',
                        }}
                      >
                        {titleText}
                      </h1>
                    ))
                  ) : (
                    <h2 
                      className="section-title"
                      style={{
                        color: index === 1 ? '#c31432' :
                               index === 2 ? '#134e5e' :
                               index === 3 ? '#5c37b7' : '#0083b0',
                      }}
                    >
                      {item.title}
                    </h2>
                  )}
                  
                  {/* Underline */}
                  <div 
                    className="section-underline"
                    style={{
                      backgroundColor: index === 0 ? '#4a3aff' :
                                       index === 1 ? '#ff416c' :
                                       index === 2 ? '#1bc47d' :
                                       index === 3 ? '#8367da' : '#3bb1d8',
                    }}
                  ></div>
                  
                  {/* Description */}
                  <p className="section-description">
                    {item.description}
                  </p>
                  
                  {/* Button if present */}
                  {item.buttonText && (
                    <button className="section-button">
                      {item.buttonText}
                    </button>
                  )}
                </div>
              </div>
              
              {/* Right side - Media Content */}
              <div className="section-video-side">
                {isGifFile(item.videoSrc) ? (
                  <div className="gif-container">
                    <img 
                      src={item.videoSrc}
                      alt={Array.isArray(item.title) ? item.title.join(' ') : item.title}
                    />
                  </div>
                ) : (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    src={item.videoSrc}
                    className="fullscreen-media"
                  >
                    Your browser does not support video playback.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="scroll-progress">
          {contentData.map((_, index) => (
            <div 
              key={index} 
              className={`progress-dot ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'completed' : ''}`}
              onClick={() => {
                // Calculate target scroll position
                if (containerRef.current) {
                  const containerTop = containerRef.current.offsetTop;
                  const targetScroll = containerTop + (window.innerHeight * index);
                  window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                  });
                }
              }}
            ></div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default DataSciences;
