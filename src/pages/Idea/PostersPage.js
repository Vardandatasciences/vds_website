import React, { useEffect, useRef } from "react";
import "./PostersPage.css";
import ideaPoster from "../../assets/idea-page.gif";
import ideaPoster1 from "../../assets/idea-pic1.webp";
import crmPoster from "../../assets/cmr.png";
import crmQR from "../../assets/crm_qr.png";
import vignanPoster from "../../assets/vignan.png";
import vignanQR from "../../assets/vignan_qr.png";
import whatsappIcon from "../../assets/whatsapp-logo.png";
import Footer from './../../components/Footer/Footer';
import PosterCarousel1 from "../Home/PosterCarousel1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
 
const PostersPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const anitsTextRef = useRef(null);
  const anitsImageRef = useRef(null);
 
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-text");
        } else {
          entry.target.classList.remove("animate-text");
        }
      });
    }, observerOptions);
 
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (anitsTextRef.current) observer.observe(anitsTextRef.current);
    if (anitsImageRef.current) observer.observe(anitsImageRef.current);
 
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (anitsTextRef.current) observer.unobserve(anitsTextRef.current);
      if (anitsImageRef.current) observer.unobserve(anitsImageRef.current);
    };
  }, []);
  return (
    <div>
     
      {/* Existing Poster Section */}
      <div className="posters-container">
       
        {/* Left Side - Text Content */}
        <div className="posters-text-content">
          <PosterCarousel1 />
          <h1>
            <span className="posters-vardaan-text">Vardaan</span> <br />
            <span className="posters-ideathon-text">
              Ideathon-<span className="posters-year-text">2025</span>
            </span>
          </h1>
          <p className="posters-tagline">
            -WHERE IDEAS IGNITE, <br /> DREAMS TAKE FLIGHT
          </p>
        </div>
 
        {/* Right Side - GIF */}
        <div className="posters-gif-container">
          <img src={ideaPoster} alt="Idea Poster GIF" className="posters-idea-gif" />
        </div>
      </div>
 
      {/* New Section: Additional Content with Image and Text */}
      <div className="posters-info-container">
        {/* Left Side - Image */}
        <div className="posters-info-image" ref={imageRef}>
          <img src={ideaPoster1} alt="Idea Poster GIF" className="posters-idea-gif" />
        </div>
 
        {/* Right Side - Description Text */}
        <div className="posters-info-text" ref={textRef}>
          <h2 className="posters-heading">About Ideathon</h2>
          <p>
            For the first time, Vardaan is proudly organizing IDEATHON-2025,
            an initiative designed to inspire and empower the next generation
            of innovators. This year, we are hosting the event across two esteemed
            institutions—Vignan (Guntur), and CMR College—providing students
            with a platform to showcase their creativity, problem-solving skills, and innovative ideas.
          </p>
          <p className="click">
            Read Instructions available in the  
            <a href="https://drive.google.com/file/d/1LzYaRV7YQ1rjg4GbFdkCrlxqUAHL-Y90/view" target="_blank" rel="noopener noreferrer">
              <span className="pdf-icon-link">
                <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
              </span>
            </a>
          </p>
        </div>
      </div>
 
      <div>
        <h1 className="posters-heading1">Participating colleges</h1>
      </div>
      <span class="spacer"></span>
   
      {/* CMR Section */}
      <div className="anits-container">
        {/* Left Side - ANITS Description & QR Code */}
        <div className="anits-left-content">
            {/* ANITS Description */}
            <div className="anits-text">
                <h2 className="anits-heading">CMR</h2>
                <p className="anits-description">
                CMR Technical Campus is an engineering institution focused on innovation, technical excellence, and skill development, providing quality education and industry-oriented training.
                </p>
            </div>
 
            {/* QR Code */}
            <div className="anits-qr-coordinator-wrapper">
                <div className="anits-qr-container">
                    <p className="qr-text"><b>For Registration Scan:</b></p>
                    <img src={crmQR} alt="QR Code for Registration" className="anits-qr" />
                </div>
 
                {/* Coordinator Information */}
                <div className="anits-coordinator-faculty">
                    <div className="anits-coordinator">
                        <h3>Coordinator:</h3>
                        <p><b>Praharshitha</b> -DS Developer</p>
                        <p>
                            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                            8328607678
                        </p>
                    </div>
                    <br></br>
                    {/* Faculty Coordinator Information */}
                    <div className="anits-faculty">
                        <h3>Faculty Coordinator:</h3>
                        <p><b>B, Prashanth</b>-Asst. Prof.</p>
                        <p>
                            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                            7013494169
                        </p>
                    </div>
                </div>
            </div>
 
            {/* Registration Form Link */}
            <div className="anits-registration-link">
                <a href="https://forms.gle/hjfgLCFsMaHmYvYZ8" target="_blank" rel="noopener noreferrer" className="anits-qr-link">
                   https://forms.gle/hjfgLCFsMaHmYvYZ8
                </a>
            </div>
          </div>
 
        {/* Right Side - ANITS Poster Image */}
        <div className="anits-image" ref={anitsImageRef}>
            <img src={crmPoster} alt="ANITS Poster" className="anits-img" />
        </div>
      </div>
     
      <span class="spacer"></span>
      {/* Vignan Section */}
      <div className="anits-container">
        {/* Left Side - ANITS Description & QR Code */}
        <div className="anits-left-content">
            {/* ANITS Description */}
            <div className="anits-text">
                <h2 className="anits-heading">Vignan</h2>
                <p className="anits-description">
                Vignan's Foundation for Science, Technology & Research (VFSTR) in Guntur is a renowned university offering quality education, research, and innovation-driven programs.
                </p>
            </div>
 
            {/* QR Code */}
            <div className="anits-qr-coordinator-wrapper">
                <div className="anits-qr-container">
                    <p className="qr-text"><b>For Registration Scan:</b></p>
                    <img src={vignanQR} alt="QR Code for Registration" className="anits-qr" />
                </div>
 
                {/* Coordinator Information */}
                <div className="anits-coordinator-faculty">
                    <div className="anits-coordinator">
                        <h3>Coordinator:</h3>
                        <p><b>Rupini</b> -DS Developer</p>
                        <p>
                            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                            8143649479
                        </p>
                    </div>
                    <br></br>
                    {/* Faculty Coordinator Information */}
                    <div className="anits-faculty">
                        <h3>Faculty Coordinator:</h3>
                        <p><b>Dr.Jyostna Devi</b>-Assoc. prof.</p>
                        <p>
                            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                            8297208489
                        </p>
                    </div>
                </div>
            </div>
 
            {/* Registration Form Link */}
            <div className="anits-registration-link">
                <a href="https://forms.gle/9pKL7e3FXq7WG7ow6" target="_blank" rel="noopener noreferrer" className="anits-qr-link">
                https://forms.gle/9pKL7e3FXq7WG7ow6
                </a>
          </div>
        </div>
 
        {/* Right Side - ANITS Poster Image */}
        <div className="anits-image" ref={anitsImageRef}>
            <img src={vignanPoster} alt="ANITS Poster" className="anits-img" />
        </div>
      </div>
      <div>
      <Footer />
    </div>
    </div>
  );
};
 
export default PostersPage;