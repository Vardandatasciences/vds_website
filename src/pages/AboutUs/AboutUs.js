import './AboutUs.css';
import vivek from '../../assets/videos/vivek.png';
import srini from '../../assets/videos/srini.png';
import ramana from '../../assets/videos/ramana.png';
import prem from '../../assets/videos/prem.png';
import gandhi from '../../assets/videos/gandhi.png';
import susheel from '../../assets/videos/susheel.png';
import React, { useEffect } from 'react';
import Footer from './../../components/Footer/Footer';
 
const contentData = [
  {
    title: 'Vivek Challapally',
    subtitle: "Director - Vardaan Group of Companies",
    description: "Vivek Challapally, a senior professional with over four decades of experience, holds a postgraduate engineering degree from IIT Kharagpur. His expertise spans construction, thermal, nuclear, and steel plants, along with asset capitalization and valuations for multinational corporations in sectors like oil refineries and power plants. As a former COO, his leadership has driven corporate success. Now leading our analytics organization, he pioneers business diversification with strategic vision.",
    imageSrc: vivek,
  },
  {
    title: 'Srinivasu V',
    subtitle: "Managing Director - Vardaan Data Sciences",
    description: "Srinivasu V (Srini) is a seasoned professional with 28+ years of experience across manufacturing, hospitality, IT, sourcing, and Unicorns. A management accountant with a Master's in Commerce, he blends financial expertise with technology, excelling in logistics, accounting, reporting, outsourcing, and business transformation.",
    imageSrc: srini,
  },
  {
    title: 'Ramana Murthy Venkata Saripalli',
    subtitle: "Director - Vardaan Data Sciences",
    description: "Affectionately known as Ramana, he is a seasoned technology professional specializing in IT landscape transformation. A graduate of Jawaharlal Nehru Technological University (JNTU), he furthered his expertise with a postgraduate degree from IIT Mumbai. His career spans global corporations, where he has played a key role in advising and assisting customers.",
    imageSrc: ramana,
  },
  {
    title: 'Prem Pillai',
    subtitle: "Director & Country Head Vardaan Sdn Bhd, Malasia",
    description: "Prem Subramanian Pillai, Director & Country Head of Vardaan, Malaysia, brings over eight years of expertise in audit, accounting, finance, and taxation. His global experience spans the UAE, India, and Malaysia, where he drives Vardaan's operations and business development.",
    imageSrc: prem,
  },
  {
    title: 'Gandhi Bhamidipati',
    subtitle: "Vice President - Vardaan Data Sciences",
    description: "B.S. Gandhi, Vice President at Vardaan Data Sciences, Hyderabad, is a seasoned IT professional with over 40 years of experience spanning software development, project management, quality assurance, and industry certifications. His career journey includes leadership roles at ECIL, CMC Limited, Duncan Infotech, TCS, and Magnaquest Technologies.",
    imageSrc: gandhi,
  },
  {
    title: 'Susheel Ramadoss',
    subtitle: "Vice President - Vardaan Group of Companies",
    description: "Susheel Ramadoss is a distinguished professional with expertise in research, technology, and innovation. He has contributed significantly to AI, data science, and automation through high-impact research, publications, and industry collaborations. His achievements include leading innovative projects, securing awards, and advancing data-driven solutions.",
    imageSrc: susheel,
  },
];
 
const AboutUs = () => {
  // Add a scroll animation effect
  useEffect(() => {
    const profileElements = document.querySelectorAll('.aboutus-profile');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    profileElements.forEach(profile => {
      profile.style.opacity = 0;
      profile.style.transform = 'translateY(50px)';
      profile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(profile);
    });
    
    return () => {
      profileElements.forEach(profile => observer.unobserve(profile));
    };
  }, []);
  
  return (
    <div className="aboutus-page">
      <div className="aboutus-header">
        <h1 className="aboutus-main-title">Our <span>Leadership</span> Team</h1>
        <p className="aboutus-intro">Meet the talented individuals who drive our company's vision and success.</p>
      </div>
      
      <div className="aboutus-profiles-container">
        {contentData.map((profile, index) => (
          <div className="aboutus-profile" key={index}>
            <div className="aboutus-info">
              <h2 className="aboutus-name">{profile.title}</h2>
              <h3 className="aboutus-position">{profile.subtitle}</h3>
              <p className="aboutus-bio">{profile.description}</p>
            </div>
            <div className="aboutus-image">
              <img src={profile.imageSrc} alt={profile.title} />
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
 
 