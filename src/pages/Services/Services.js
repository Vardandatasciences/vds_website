import React, { useEffect, useRef } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './../../components/Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  faCode,
  faRobot,
  faChartLine,
  faDatabase,
  faBrain,
  faCloud,
  faNetworkWired,
  faMobile,
  faGears,
  faLaptopCode,
  faCheckCircle,
  faLightbulb,
  faRocket,
  faShieldAlt,
  faChartPie,
  faServer,
  faStar,
  faArrowRight,
  faQuoteLeft,
  faCheck,
  faMagic,
  faGlobe,
  faHeadset,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import innovationIcon from '../../assets/Images/innovation.png';
 
// Enhanced services data with more creative content
const servicesData = [
  {
    id: 1,
    title: "Data Science",
    icon: faDatabase,
    description: "Transform raw data into meaningful insights with our comprehensive data science solutions. We leverage advanced analytics, machine learning, and statistical modeling to help you make data-driven decisions that drive business growth.",
    additionalPoint: "Data Management as a Service (DaMaaS)",
    testimonial: {
      text: "Their data science team helped us reduce operational costs by 30% through predictive maintenance solutions.",
      author: "Mark Johnson, CTO at TechCorp"
    },
    badge: "MOST POPULAR"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    icon: faBrain,
    description: "Harness the power of AI to automate processes, gain insights, and create intelligent solutions. Our AI services help businesses stay ahead in the digital transformation journey while maximizing ROI on technology investments.",
    additionalPoint: "Enterprise AI Transformation",
    testimonial: {
      text: "The AI solution they built increased our customer engagement by 45% and significantly improved satisfaction scores.",
      author: "Sarah Miller, Head of Innovation at RetailGiant"
    },
    badge: "INNOVATIVE"
  },
  {
    id: 3,
    title: "Software Engineering",
    icon: faCode,
    description: "Custom software solutions designed to meet your specific business needs. From responsive web applications to complex enterprise systems, we deliver scalable, secure, and robust software solutions that drive efficiency and growth.",
    additionalPoint: "Agile Development Methodology",
    testimonial: {
      text: "The custom ERP solution transformed our operations, cutting processing time by 60% and improving accuracy.",
      author: "David Chen, Operations Director at ManufacturingPro"
    },
    badge: "TRUSTED"
  },
  {
    id: 4,
    title: "Deep Learning",
    icon: faRobot,
    description: "Advanced deep learning solutions to solve complex problems and create intelligent systems. We specialize in neural networks and advanced AI architectures that can analyze patterns, recognize speech, and make intelligent predictions.",
    additionalPoint: "Neural Network Architecture Design",
    testimonial: {
      text: "Their deep learning model increased our diagnostic accuracy by 28% and helped us identify patterns we never saw before.",
      author: "Dr. Emily Wong, Research Director at HealthTech"
    },
    badge: "CUTTING-EDGE"
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: faCloud,
    description: "Scalable and secure cloud solutions to modernize your infrastructure and applications. We help businesses leverage the power of cloud technology to reduce costs, improve reliability, and enable innovation at scale.",
    additionalPoint: "Multi-Cloud Strategy & Implementation",
    testimonial: {
      text: "The cloud migration saved us over $200K annually while improving our system uptime to 99.99%.",
      author: "Robert Wilson, IT Director at FinanceCorp"
    },
    badge: "SCALABLE"
  },
  {
    id: 6,
    title: "DevOps",
    icon: faGears,
    description: "Streamline your development and operations with our comprehensive DevOps services. We help organizations implement efficient CI/CD pipelines, automate infrastructure, and foster a culture of continuous improvement and innovation.",
    additionalPoint: "Continuous Integration/Continuous Delivery",
    testimonial: {
      text: "Their DevOps transformation reduced our deployment time from days to minutes and virtually eliminated deployment failures.",
      author: "Jennifer Lopez, Development Manager at SoftwareCo"
    },
    badge: "EFFICIENT"
  }
];
 
// Add more creative statistics
const statsData = [
  { icon: faHeadset, value: "24/7", label: "Support" },
  { icon: faAward, value: "250+", label: "Projects Delivered" },
  { icon: faGlobe, value: "30+", label: "Countries Served" },
  { icon: faStar, value: "98%", label: "Client Satisfaction" }
];
 
const Services = () => {
  // Add scroll animation effect
  useEffect(() => {
    // Add Poppins font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
 
    const handleScroll = () => {
      const cards = document.querySelectorAll('.service-card');
      const stats = document.querySelectorAll('.stat-item');
      const elements = [...cards, ...stats];
     
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
       
        if (position < screenPosition) {
          element.classList.add('active');
        }
      });
    };
   
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up font link on unmount
      document.head.removeChild(link);
    };
  }, []);
 
  // Add mouse move effect for header
  const headerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
     
      const header = headerRef.current;
      const rect = header.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
     
      header.style.setProperty('--mouse-x', `${x}px`);
      header.style.setProperty('--mouse-y', `${y}px`);
    };
   
    const header = headerRef.current;
    if (header) {
      header.addEventListener('mousemove', handleMouseMove);
    }
   
    return () => {
      if (header) {
        header.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
 
  return (
    <div className="services-page">
      {/* Enhanced header with dynamic effect */}
      <div className="services-header" ref={headerRef}>
        <div className="header-content">
          <div className="innovation-container">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="enterprise-style-heading"
            >
              Innovative Solutions
            </motion.h1>
            <img src={innovationIcon} alt="Innovation" className="innovation-image" />
          </div>
        </div>
       
        <div className="header-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
 
      {/* Introduction section with animation */}
      <div className="services-intro">
        <div className="container">
          <h2><FontAwesomeIcon icon={faLightbulb} /> Why Choose Our Services</h2>
          <p>
            With over a decade of industry experience and a team of certified experts,
            we deliver cutting-edge solutions tailored to your business needs. Our client-centric
            approach ensures that we understand your challenges and provide innovative solutions
            that drive real results.
          </p>
         
          <div className="intro-stats">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Enhanced service cards */}
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            {service.badge && <div className="service-badge">{service.badge}</div>}
           
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
           
            <h2>{service.title}</h2>
            <p>{service.description}</p>
 
            {service.additionalPoint && (
              <div className="additional-point">
                <FontAwesomeIcon icon={faMagic} /> {service.additionalPoint}
              </div>
            )}
 
            {service.testimonial && (
              <div className="testimonial">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <blockquote>{service.testimonial.text}</blockquote>
                <cite>— {service.testimonial.author}</cite>
              </div>
            )}
           
            <button className="explore-btn">
              <span>Explore Service</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        ))}
      </div>
 
      {/* Interactive benefits section */}
      <div className="benefits-section">
        <div className="container">
          <h2>Our Approach to Excellence</h2>
          <p>We combine industry expertise with innovative technology to deliver exceptional results</p>
         
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3>Fast Delivery</h3>
              <p>Accelerate your time-to-market with our agile development methodology and optimized workflows.</p>
            </div>
           
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Security First</h3>
              <p>Enterprise-grade security built into every solution to protect your data and infrastructure.</p>
            </div>
           
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faChartPie} />
              </div>
              <h3>Measurable Results</h3>
              <p>Data-driven strategies to ensure your investment delivers quantifiable business outcomes.</p>
            </div>
           
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3>Ongoing Support</h3>
              <p>Comprehensive support and maintenance to ensure your solutions continue to perform optimally.</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Enhanced CTA section */}
      {/* <div className="cta-section">
        <div className="cta-glow"></div>
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss how our services can address your specific challenges and opportunities.</p>
        <button className="cta-button">
          <span>Schedule a Consultation</span>
          <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
        </button>
       
        <div className="cta-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="cta-particle"></div>
          ))}
        </div>
      </div> */}
     
      <span className="spacer"></span>
     
      <Footer />
    </div>
  );
};
 
export default Services;