import React, { useEffect, useState } from 'react';
import './Products.css';
import rcms from '../../assets/Images/products/RCMS1.png';  // You'll need to add these images
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
import Footer from './../../components/Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    image: rcms,
    title: "RCMS",
    subtitle: "Regulatory Compliance Management System",
    description: "A system designed to ensure your organization meets regulatory compliance requirements efficiently.",
    features: ["Regulatory Compliance", "Documentation Management", "Compliance Reporting", "Audit Trail"]
  },
  {
    id: 2,
    image: slims,
    title: "SLIMS",
    subtitle: "Simpliefied Logistic Information Management System",
    description: "A solution for simplifying logistics information management with Claims management and Warranties management.",
    features: ["Logistics Management", "Claims Management", "Sample Tracking", "Warranties Management"]
  },
  {
    id: 3,
    image: vasp,
    title: "VASP",
    subtitle: "Vardaan Automated Service Portal",
    description: "An automated service portal for efficient request handling and workflow management.",
    features: ["Automated Service Management", "Request Handling", "Workflow Automation", "Centralized Portal"]
  },
  {
    id: 4,
    image: awe,
    title: "PROSYNC",
    subtitle: "Professional Work Synchroinization",
    description: "Experience seamless workflow automation to enhance business process efficiency.",
    features: ["Seamless Workflow Automation", "Business Process Efficiency", "Streamlining Processes", "Powerful Engine"]
  },
  {
    id: 5,
    image: smartform,
    title: "SMART FORMS",
    subtitle: "Intelligence Form Management",
    description: "Manage forms intelligently with dynamic creation and data processing capabilities.",
    features: ["Intelligent Form Management", "Dynamic Form Creation", "Data Processing", "Form Management"]
  },
  {
    id: 6,
    image: crms,
    title: "CRMS",
    subtitle: "College Regulatory Management System",
    description: "A comprehensive solution for managing college regulatory requirements and interactions.",
    features: ["College Regulatory Management", "Requirements Management", "Interactions", "Service Delivery"]
  },
  {
    id: 7,
    image: prms,
    title: "PRMS",
    subtitle: "Pharma Regulation Management System",
    description: "Effectively manage pharma regulations with a focus on resources, timelines, and deliverables.",
    features: ["Pharma Regulation Management", "Resource Management", "Timelines", "Deliverables"]
  },
  {
    id: 8,
    image: esg,
    title: "ESG",
    subtitle: "Environmental, Social, and Governance",
    description: "Manage ESG factors effectively to ensure sustainable and responsible business practices.",
    features: ["ESG Management", "Sustainability", "Responsible Business Practices", "Governance"]
  },

  {
    id: 9,
    image: llm,
    title: "LLM Models",
    subtitle: "Large Language Models",
    description: "Advanced language processing solutions powered by state-of-the-art neural networks.",
    features: [
      "Advanced Language Processing", 
      "State-of-the-Art Neural Networks", 
      "Context-Aware Text Generation", 
      "Language Processing Solutions"
    ]
  },
  {
    id: 10,
    image: chatbot,
    title: "Chat Bot",
    subtitle: "Intelligent Chat Assistant",
    description: "AI-powered chatbots for automated customer service and support.",
    features: ["AI-powered", "Automated Customer Service", "Support", "Intelligent Chat Assistant"]
  },
  {
    id: 11,
    image: texttospeech,
    title: "Text to Speech",
    subtitle: "Voice Synthesis",
    description: "Convert text to natural-sounding speech in multiple languages.",
    features: ["Text to Speech Conversion", "Natural-sounding Speech", "Multiple Languages", "Voice Synthesis"]
  },
  {
    id: 12,
    image: lapsec,
    title: "LAPSEC",
    subtitle: "Enhance Your Device Security & Awareness",
    description: "LapSec conducts a comprehensive system scan, providing an in-depth report on critical aspects of your device.",
    features: ["Comprehensive Device Report", "Centralized USB Access Control ", "Website Blocking", "Automated Patch Notifications"]
  }
];

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  useEffect(() => {
    // Add scroll animation
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="products-container">
      <motion.div className="products-header">
        <div className="header-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="header-particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Enterprise Products
        </motion.h1>
        
        <motion.div 
          className="header-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ✨ Innovative Technology
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            🚀 Enterprise Grade
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            💡 Smart Solutions
          </motion.span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <motion.div 
            className="product-card"
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="rainbow-border" />
            
            <div className="product-header">
              <motion.div 
                className="product-image"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img src={product.image} alt={product.title} />
              </motion.div>
              
              <div className="product-title">
                <motion.h2>{product.title}</motion.h2>
                <motion.h3>{product.subtitle}</motion.h3>
              </div>
            </div>
            
            <motion.p className="product-description">
              {product.description}
            </motion.p>
            
            <motion.div 
              className="features-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4>Key Features</h4>
              <div className="features-container">
                <div className="features-row">
                  {product.features?.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="feature-item"
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: idx * 0.2,
                        ease: "easeOut" 
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)" 
                      }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Products; 