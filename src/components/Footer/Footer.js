import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import vardaanLogo from '../../assets/Images/vardaan.png';
 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter">
        <h2>Want to know more about us?<br />Contact Us</h2>
        <div className="newsletter-subscribe">
          <div className="input-button-wrapper">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section site-links">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#ai">Artificial Intelligence</a></li>
            <li><a href="#business">Business Analytics</a></li>
            <li><a href="#data-sciences">Data Sciences</a></li>
            <li><a href="#data-analytics">Data Analytics</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#finance">Finance</a></li>
            <li><a href="#generative-ai">Generative AI</a></li>
            <li><a href="#software">Software Engineering</a></li>
            <li><a href="#deep-learning">Deep Learning</a></li>
          </ul>
        </div>
        <div className="footer-section useful-links">
          <h3>Products</h3>
          <ul>
            <li><a href="#product1">RCMS</a></li>
            <li><a href="#product2">SLIMS</a></li>
            <li><a href="#product3">VASP</a></li>
            <li><a href="#product4">ProSync</a></li>
            <li><a href="#product5">Smart Form</a></li>
            <li><a href="#product6">CRMS</a></li>
            <li><a href="#product7">PRMS</a></li>
            <li><a href="#product8">ESG</a></li>
            <li><a href="#product9">LLM Models</a></li>
            <li><a href="#product10">Chatbot</a></li>
            <li><a href="#product11">Text to Speech</a></li>
            <li><a href="#product12">LAPSEC</a></li>
          </ul>
        </div>
       
        <div className="footer-section about">
          <p>Embark on a transformative data journey with Vardaan Data Sciences Service—where innovation turns data into a catalyst for business success in the digital era</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61554735873727" className="social-icon facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/Vardaan_DS" className="social-icon twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/vardaan_datasciences?igsh=MXYzN2YwcTExMjVnNg==" className="social-icon instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/vardaan-data-sciences-pvt-ltd/posts/?feedView=all" className="social-icon linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-logo-corner desktop-logo">
        <img src={vardaanLogo} alt="Vardaan Logo" />
      </div>
      
      <div className="footer-logo-mobile">
        <img src={vardaanLogo} alt="Vardaan Logo" />
      </div>
      
      <div className="footer-bottom">
        <p>Copyright @ 2025 Vardaan Data Sciences Pvt. Ltd. | All rights reserved</p>
      </div>
    </footer>
  );
};
 
export default Footer;