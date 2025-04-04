import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import DataSciences from './pages/Home/DataSciences1';
import ImageWithText from './pages/Home/ImageWithText';
import ServiceBoxes from './pages/Home/ServiceBoxes';
import Clients from './pages/Home/clients';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ServicesScroller from './pages/Home/ServicesScroller';
import ContactUs from './pages/Contact/ContactUs';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import MyPage from './pages/Training/training';
import PosterCarousel from "./pages/Home/PosterCarousel"; 

import PostersPage from './pages/Idea/PostersPage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Globe from './pages/Home/Globe';

// Define a Home component to be used in the main route
function Home() {
  return (
    <div className="main">
      <PosterCarousel />
      <ImageWithText />
      <Clients /> 
      <DataSciences />
     <ServicesScroller /> 
      <ServiceBoxes />
      <Globe />
      <Footer />
    </div>
  );
}

// Main App component containing the Router setup
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<MyPage />} />
          <Route path="/posters" element={<PostersPage />} />
          {/* Add other specific routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
