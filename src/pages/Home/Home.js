import React, { useRef, useState } from 'react';
import './Home.css';
import PosterCarousel from "./PosterCarousel";
import PosterCarousel1 from "./PosterCarousel1";
import ImageWithText from "./ImageWithText";
import Clients from "./clients";
import DataSciences from "./DataSciences1";
import ServicesScroller from "./ServicesScroller";
import ServiceBoxes from "./ServiceBoxes";
import Globe from "./Globe";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const servicesScrollerRef = useRef(null);
  const [dataSciencesComplete, setDataSciencesComplete] = useState(false);
  
  // Function to handle completion of DataSciences section
  const handleDataSciencesComplete = () => {
    console.log("DataSciences section complete!");
    setDataSciencesComplete(true);
    
    // Scroll to the ServicesScroller section
    if (servicesScrollerRef.current) {
      servicesScrollerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main">
      <PosterCarousel />
      <PosterCarousel1 />
      <ImageWithText />
      <Clients />
      
      {/* The DataSciences container height is set within the component */}
      <DataSciences onComplete={handleDataSciencesComplete} />
      
      {/* Reference to scroll to after DataSciences completes */}
      <div ref={servicesScrollerRef}>
        <ServicesScroller />
      </div>
      
      <ServiceBoxes />
      <Globe />
      <Footer />
    </div>
  );
};

const features = [
  {
    icon: FaDatabase,
    title: "Data Processing",
    description: "Transform raw data into actionable insights with our advanced processing capabilities."
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    description: "Leverage powerful analytics tools to uncover patterns and trends in your data."
  },
  {
    icon: FaBrain,
    title: "Machine Learning",
    description: "Implement cutting-edge ML solutions for predictive analytics and automation."
  },
  {
    icon: FaRocket,
    title: "Innovation",
    description: "Stay ahead with innovative data solutions tailored to your business needs."
  }
];

export default Home; 