import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './ServicesScroller.css';

// Import all product images from Products.js
import rcms from '../../assets/Images/products/RCMS1.png';
import slims from '../../assets/Images/products/SLIMS1.png';
import llm from '../../assets/Images/products/LLM1.png';
import chatbot from '../../assets/Images/products/CHAT_BOT1.png';
import awe from '../../assets/Images/products/AWE1.png';
import crms from '../../assets/Images/products/CRMS1.png';
import lapsec from '../../assets/Images/products/LAPSEC1.png';
import smartform from '../../assets/Images/products/SMART_FORM1.png';
import vasp from '../../assets/Images/products/VASP1.png';
import esg from '../../assets/Images/products/ESG1.png';
import prms from '../../assets/Images/products/PRMS1.png';
import texttospeech from '../../assets/Images/products/TOS1.png';

// Updated services array to include all products from Products.js
const services = [
  { 
    image: rcms, 
    name: 'RCMS', 
    description: "A system designed to ensure your organization meets regulatory compliance requirements efficiently."
  },
  { 
    image: slims, 
    name: 'SLIMS', 
    description: "A solution for simplifying logistics information management with Claims management and Warranties management."
  },
  { 
    image: vasp, 
    name: 'VASP', 
    description: "An automated service portal for efficient request handling and workflow management."
  },
  { 
    image: awe, 
    name: 'PROSYNC', 
    description: "Experience seamless workflow automation to enhance business process efficiency."
  },
  { 
    image: smartform, 
    name: 'SMART FORMS', 
    description: "Manage forms intelligently with dynamic creation and data processing capabilities."
  },
  { 
    image: crms, 
    name: 'CRMS', 
    description: "A comprehensive solution for managing college regulatory requirements and interactions."
  },
  { 
    image: prms, 
    name: 'PRMS', 
    description: "Effectively manage pharma regulations with a focus on resources, timelines, and deliverables."
  },
  { 
    image: esg, 
    name: 'ESG', 
    description: "Manage ESG factors effectively to ensure sustainable and responsible business practices."
  },
  { 
    image: llm, 
    name: 'LLM Models', 
    description: "Advanced language processing solutions powered by state-of-the-art neural networks."
  },
  { 
    image: chatbot, 
    name: 'Chat Bot', 
    description: "AI-powered chatbots for automated customer service and support."
  },
  { 
    image: texttospeech, 
    name: 'Text to Speech', 
    description: "Convert text to natural-sounding speech in multiple languages."
  },
  { 
    image: lapsec, 
    name: 'LAPSEC', 
    description: "LapSec conducts a comprehensive system scan, providing an in-depth report on critical aspects of your device."
  },
];

const ServicesScroller = () => {
  const sliderRef = React.useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div id='services_section' className="slider-container">
      <div className="vision-text">
        <h1>Our <span className="highlight">Products</span></h1>
        <button 
          className="view-all-btn"
          onClick={() => navigate('/products')}
        >
          View All
        </button>
      </div>
      
      <div className="slider-wrapper">
        <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
          ‹
        </button>
        
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-box-wrapper">
              <div className="service_box">
                <div className="image-container">
                  <img src={service.image} alt={service.name} className="service-image" />
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  {/* <button className="try-button">Try it out</button> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default ServicesScroller;