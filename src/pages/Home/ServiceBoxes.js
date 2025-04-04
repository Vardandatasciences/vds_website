// src/ServiceBoxes.js
import React from 'react';
import './ServiceBoxes.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faRobot,
  faChartLine,
  faDatabase,
  faMicrochip,
  faCloud,
  faGears,
  faMobile
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
    icon: faCode,
  },
  {
    title: "AI & ML Solutions",
    description: "Advanced artificial intelligence and machine learning solutions to automate and optimize your business processes.",
    icon: faRobot,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our comprehensive data analytics services.",
    icon: faChartLine,
  },
  {
    title: "Big Data Services",
    description: "Handle and analyze large volumes of data efficiently with our big data solutions and infrastructure.",
    icon: faDatabase,
  },
  {
    title: "IoT Solutions",
    description: "Connect and manage your devices with our Internet of Things solutions and platforms.",
    icon: faMicrochip,
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions for your business applications and data storage needs.",
    icon: faCloud,
  },
  {
    title: "DevOps",
    description: "Streamline your development and operations with our DevOps practices and tools.",
    icon: faGears,
  },
  {
    title: "Mobile Development",
    description: "Create powerful mobile applications for iOS and Android platforms with cutting-edge technologies.",
    icon: faMobile,
  }
];

const ServiceBoxes = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="service-boxes-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="services-heading">
        <h1>Our <span className="highlight">Services</span></h1>
        <button 
          className="view-all-btn"
          onClick={() => navigate('/services')}
        >
          View All
        </button>
      </div>
      
      <motion.div 
        className="service-boxes-container"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-box"
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -6 }}
          >
            <div className="icon-container">
              <FontAwesomeIcon icon={service.icon} className="icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceBoxes;
