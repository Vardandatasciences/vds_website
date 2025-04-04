import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import vardaanlogo from '../../assets/Images/vardaan.png'; // Ensure correct path

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    products: false,
  });

  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setDropdownOpen({
      ...dropdownOpen,
      [menu]: !dropdownOpen[menu],
    });
  };

  const handleServiceClick = (section) => {
    navigate('/services');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleProductClick = (section) => {
    navigate('/products');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-brand">
        <Link to="/">
          <img src={vardaanlogo} alt="Vardaan Logo" />
        </Link>
      </div>

      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Desktop Navbar */}
      <ul className="navbar-links">
        <li className="dropdown" onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown('services')}>
          <Link to="/services" className="dropdown-button">Services<span>&#9662;</span></Link>
          {dropdownOpen.services && (
            <ul className="dropdown-menu">
              <li><a onClick={() => handleServiceClick('data-science')}>Data Science</a></li>
              <li><a onClick={() => handleServiceClick('artificial-intelligence')}>Artificial Intelligence</a></li>
              <li><a onClick={() => handleServiceClick('software-engineering')}>Software Engineering</a></li>
              <li><a onClick={() => handleServiceClick('deep-learning')}>Deep Learning</a></li>
              <li><a onClick={() => handleServiceClick('cloud-computing')}>Cloud Computing</a></li>
              <li><a onClick={() => handleServiceClick('devops')}>DevOps</a></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={() => toggleDropdown('products')} onMouseLeave={() => toggleDropdown('products')}>
          <Link to="/products" className="dropdown-button">Products<span>&#9662;</span></Link>
          {dropdownOpen.products && (
            <ul className="dropdown-menu">
              <li><a onClick={() => handleProductClick('rcms')}>RCMS</a></li>
              <li><a onClick={() => handleProductClick('slims')}>SLIMS</a></li>
              <li><a onClick={() => handleProductClick('vasp')}>VASP</a></li>
              <li><a onClick={() => handleProductClick('awe')}>AWE</a></li>
              <li><a onClick={() => handleProductClick('smart-form')}>Smart Form</a></li>
              <li><a onClick={() => handleProductClick('crms')}>CRMS</a></li>
              <li><a onClick={() => handleProductClick('prms')}>PRMS</a></li>
              <li><a onClick={() => handleProductClick('esg')}>ESG</a></li>
              <li><a onClick={() => handleProductClick('llm-models')}>LLM Models</a></li>
              <li><a onClick={() => handleProductClick('chatbot')}>Chatbot</a></li>
              <li><a onClick={() => handleProductClick('text-to-speech')}>Text to Speech</a></li>
              <li><a onClick={() => handleProductClick('lapsec')}>LAPSEC</a></li>
            </ul>
          )}
        </li>

        <li><a href="/posters">Ideathon</a></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
      </ul>

      {/* Mobile Navbar */}
      <ul className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="/products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="/posters" onClick={() => setMenuOpen(false)}>Ideathon</a></li>
        <li><Link to="/training" onClick={() => setMenuOpen(false)}>Training</Link></li>
        <li><a href="/about" onClick={() => setMenuOpen(false)}>About us</a></li>
        <li><a href="/contact-us" onClick={() => setMenuOpen(false)}>Contact us</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
