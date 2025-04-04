import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaPaperPlane, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
  // Add color change animation to the form button
  useEffect(() => {
    const addHoverListeners = () => {
      const infoItems = document.querySelectorAll('.contact-us-info p');
      
      infoItems.forEach((item, index) => {
        const colors = ['#6b46fe', '#ff4790', '#00d4ff'];
        const color = colors[index % colors.length];
        
        item.addEventListener('mouseenter', () => {
          const icon = item.querySelector('svg');
          if (icon) icon.style.color = color;
        });
        
        item.addEventListener('mouseleave', () => {
          const icon = item.querySelector('svg');
          if (icon) icon.style.color = '';
        });
      });
    };
    
    addHoverListeners();
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return (
    <div>
      <motion.div 
        className="contact-us-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="left-side"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="contact-us-map"
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.255653314797!2d78.35850077284469!3d17.447473683449946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9377c922d255%3A0x149b3b7913283385!2sVardaan%20Data%20Sciences%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1742360393459!5m2!1sen!2sin"
              title="Google Maps - Vardaan Data Sciences Pvt. Ltd."
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="contact-us-address"
            whileHover={{ scale: 1.02 }}
          >
            <h3><FaMapMarkerAlt /> Our Location</h3>
            <motion.p whileHover={{ x: 5 }}>Aurum, 1st Floor, Plot No 57,</motion.p>
            <motion.p whileHover={{ x: 5 }}>Jayabheri Enclave, Gachibowli</motion.p>
            <motion.p whileHover={{ x: 5 }}>Hyderabad-500032 INDIA</motion.p>
            
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ color: '#0077B5', fontSize: '24px' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ color: '#1DA1F2', fontSize: '24px' }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ color: '#4267B2', fontSize: '24px' }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{ color: '#E1306C', fontSize: '24px' }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="right-side"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="contact-us-info"
            whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <h2>Get in Touch</h2>
            <motion.p whileHover={{ x: 5 }}>
              <FaEnvelope />
              <strong>Email:</strong>
              <a href="mailto:info@vardaanglobal.com">info@vardaanglobal.com</a>
            </motion.p>
            <motion.p whileHover={{ x: 5 }}>
              <FaPhone />
              <strong>Phone:</strong>
              <span>
                <a href="tel:+91 4035171118">+91 40-35171118</a>,
                <a href="tel:+91 4035171119">+91 40-35171119</a>
              </span>
            </motion.p>
            <motion.p whileHover={{ x: 5 }}>
              <FaClock />
              <strong>Hours:</strong>
              <span>Monday - Friday, 9:00 AM - 6:00 PM IST</span>
            </motion.p>
          </motion.div>

          <motion.div 
            className="contact-us-form"
            whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <form>
              <div className="form-group">
                <motion.input 
                  type="text" 
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.02 }}
                  required 
                />
                <FaUser className="input-icon" />
              </div>
              <div className="form-group">
                <motion.input 
                  type="email" 
                  placeholder="Your Email"
                  whileFocus={{ scale: 1.02 }}
                  required 
                />
                <FaEnvelope className="input-icon" />
              </div>
              <div className="form-group">
                <motion.textarea 
                  placeholder="Your Message"
                  rows="5"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
                <FaPaperPlane className="input-icon" />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
              <p className="form-note">
                <FaClock /> We will respond within 2 business days. For immediate assistance, please call us.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactUs;








