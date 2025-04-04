import React, { useEffect, useRef } from "react";
import "./training.css";
import Slider from "react-slick";
import future from "../../assets/Images/future4.mp4";
import why from "../../assets/Images/why_vardaan.mp4";
import ai from "../../images/ai.gif";
import ml from "../../images/ml.gif";
import dl from "../../assets/Images/dl.gif";
import genai from "../../assets/Images/genai.gif";
import ins1 from "../../images/instructor1.jpg";
import ins2 from "../../images/instructor2.jpg";
import Footer from './../../components/Footer/Footer';
import {
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaBrain,
  FaCheckCircle,
  FaBriefcase,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaLightbulb,
  FaBullseye,
  FaCode,
  FaFilePdf
} from "react-icons/fa";
import { motion } from "framer-motion";
 
// Custom Left Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};
 
// Custom Right Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};
 
 
const MyPage = () => {
  const feedbackContainerRef = useRef(null);
 
  // Auto-scrolling effect every 3 seconds (cyclic scrolling)
  useEffect(() => {
    const interval = setInterval(() => {
      const container = feedbackContainerRef.current;
      if (container) {
        const scrollPosition = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
 
        // Scroll cyclically (if at the end, scroll to the start)
        if (scrollPosition + containerWidth >= scrollWidth) {
          container.scrollLeft = 0; // Scroll back to the start
        } else {
          container.scrollBy({
            left: 320, // Adjust this value based on the width of each feedback box
            behavior: 'smooth',
          });
        }
      }
    }, 3000); // 3000ms = 3 seconds
 
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
 
  return (
    <div>
      <div className="mypage">
        {/* Course Highlights Section */}
        <section className="course-highlights">
          <h2>Our Training Programs</h2>
          <div className="highlight-grid">
            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaLaptopCode style={{ fontSize: '2.5rem', color: '#b857d8' }} />
              <h3>Data Science Fundamentals</h3>
              <p>Master the basics of data analysis, statistics, and Python programming</p>
            </motion.div>
 
            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaBrain style={{ fontSize: '2.5rem', color: '#FF6B6B' }} />
              <h3>Advanced Machine Learning</h3>
              <p>Deep dive into ML algorithms, neural networks, and practical applications</p>
            </motion.div>
 
            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaCertificate style={{ fontSize: '2.5rem', color: '#ea4c89' }} />
              <h3>AI & Deep Learning</h3>
              <p>Explore cutting-edge AI technologies and deep learning frameworks</p>
            </motion.div>
          </div>
        </section>
 
        {/* Key Features Section */}
        <section className="key-features-new" style={{ overflow: 'visible', maxWidth: '100%' }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Sets Us Apart
          </motion.h2>
         
          <div className="features-container">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                <FaGraduationCap className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3>Industry Expert Instructors</h3>
                <p>Learn from professionals with real-world experience</p>
                <div className="feature-details">
                  <FaUserGraduate />
                  <span>Experienced mentors</span>
                </div>
                <div className="feature-details">
                  <FaBriefcase />
                  <span>Industry connections</span>
                </div>
              </div>
            </motion.div>
 
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                <FaUsers className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3>Small Batch Sizes</h3>
                <p>Personalized attention with maximum 30 students per batch</p>
                <div className="feature-details">
                  <FaUserGraduate />
                  <span>Individual attention</span>
                </div>
                <div className="feature-details">
                  <FaChalkboardTeacher />
                  <span>Interactive sessions</span>
                </div>
              </div>
            </motion.div>
 
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                <FaLaptopCode className="feature-icon" />
              </div>
              <div className="feature-content">
                <h3>Hands-on Experience</h3>
                <p>Practical projects and real-world applications</p>
                <div className="feature-details">
                  <FaCode />
                  <span>Industry projects</span>
                </div>
                <div className="feature-details">
                  <FaLightbulb />
                  <span>Portfolio building</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
 
        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <div className="header-text">
              <h1>THE FUTURE IS NOW ...</h1>
              <p>
                The 2024 Global Data Sciences Leadership and Sentiment Report provides
                a comprehensive analysis of the current state and future trajectory of
                data science in organizations worldwide. The intent to expand data
                science teams reflects a commitment to enhancing expertise and
                capabilities. Challenges faced by leaders include issues in data
                quality, talent acquisition, and aligning data science with
                organizational goals. The emerging data science function embraces new
                technologies like Machine Learning, Deep Learning, and Generative AI.
              </p>
            </div>
            <div className="header-image">
              <video src={future} autoPlay loop muted playsInline className="header-video" />
              {/* <img src={future} alt="Future" /> */}
            </div>
          </div>
        </header>
 
        <span class="spacer"></span>
 
        {/* Vision & Mission Section */}
        <section className="vision-mission">
          <div className="vision">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '10px',  // Consistent spacing between icon and text
              paddingLeft: '20px'  // Add some padding from the left edge
            }}>
              <h2 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                Vision
                <FaLightbulb style={{
                  fontSize: '2rem',
                  color: '#b857d8',
                  marginLeft: '10px'
                }} />
              </h2>
            </div>
            <p>
              Our vision in Data Sciences is to harness the power of advanced
              analytics, machine learning, and data-driven insights to empower
              businesses with actionable knowledge. We envision transforming
              complex data into meaningful solutions that drive value for our
              clients.
            </p>
          </div>
 
          <div className="mission">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '10px',
              paddingLeft: '20px'
            }}>
              <h2 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                Mission
                <FaBullseye style={{
                  fontSize: '2rem',
                  color: '#00CED1',
                  marginLeft: '10px'
                }} />
              </h2>
            </div>
            <p>
              We specialize in Data Sciences, using advanced analytics and
              solutions to transform complex data into actionable insights. Our
              mission is to bridge the gap between business needs and
              data-driven decision-making, optimizing processes to maximize value
              and success.
            </p>
          </div>
        </section>
 
        <span class="spacer"></span>
 
        {/* Why Vardaan Section - Remove refs and animation classes */}
        <section className="why-vardaan">
          <div className="text-content-static">
            <h1>
              <span className="highlight-text">Why</span> Vardaan...
            </h1>
            <span className="spacer"></span>
            <ul>
              <li>Fully Integrated (Python + ML + DL + Gen AI)</li>
              <li>Individual Attention: 30 Students per Batch <b>ONLY</b></li>
              <li>Seasoned Professional Instructors</li>
              <li>Hands-on with Client Projects</li>
              <li>Mock Interviews</li>
            </ul>
          </div>
          <div className="image-content-static">
            <video src={why} autoPlay loop muted playsInline className="header-video" />
            {/* <img src={why} alt="Why Vardaan" /> */}
          </div>
        </section>
 
 
        {/* Technology Section */}
        <section className="technology">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tech-title"
          >
            TECHNOLOGY WE WORK WITH
          </motion.h1>
          <div className="tech-icons">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="tech-card"
            >
              <div className="tech-icon-wrapper ai-gradient">
                <img
                  src={ai}
                  alt="Artificial Intelligence"
                  className="tech-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <p className="tech-text ai-text">ARTIFICIAL<br/>INTELLIGENCE</p>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="tech-card"
            >
              <div className="tech-icon-wrapper ml-gradient">
                <img
                  src={ml}
                  alt="Machine Learning"
                  className="tech-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <p className="tech-text ml-text">MACHINE<br/>LEARNING</p>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="tech-card"
            >
              <div className="tech-icon-wrapper dl-gradient">
                <img
                  src={dl}
                  alt="Deep Learning"
                  className="tech-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <p className="tech-text dl-text">DEEP<br/>LEARNING</p>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="tech-card"
            >
              <div className="tech-icon-wrapper genai-gradient">
                <img
                  src={genai}
                  alt="Gen AI"
                  className="tech-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <p className="tech-text genai-text">GEN AI</p>
            </motion.div>
          </div>
        </section>
 
         {/* New Section for More Info */}
         <section className="more-info">
          <h2>
            <span className="eligibility-label">Eligibility:</span>
            <span className="eligibility-courses">
              BE/B Tech – CSE, IT, ECE, EEE, AI, ML, MECH, Automobile, Mechatronics, MSC, MCA, BSC, BCA
            </span>
            <span>(Minimum 60% or Above)</span>
          </h2>
          <h1>
            For more information,{' '}
            <a
              href="https://vardaancybersecurity-my.sharepoint.com/:p:/g/personal/rupini_r_vardaanglobal_com/EfmVE2tPOMtDui3zw3yDkzoBfn3GJXwzIPQ07sZiU3rakA?rtime=jui2qENd3Ug"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              <FaFilePdf className="pdf-icon" />
            </a>
          </h1>
        </section>
 
 
 
        {/* Leadership Section */}
        <section className="leadership">
          <h1>Instructors</h1>
          <div className="leader-container">
            <div className="leader-box">
              <div className="leader-text">
                <h3>Ramana Murthy Venkata Saripalli</h3>
                <h4>Director</h4>
                <p>
                  Affectionately known as Ramana, is a seasoned professional with a remarkable journey in the field of technology and IT landscape transformation. He laid the foundation of his expertise by graduating in Engineering from Jawaharlal Nehru Technological University (JNTU), and Postgraduation from the Indian Institute of Technology (IIT) in Mumbai.
                  Ramana's career trajectory of 45+ years saw him working for corporate giants across different continents, where he made significant contributions by advising and assisting customers in navigating their IT landscape and strategically driving technology agendas.
                </p>
              </div>
              <div className="leader-img">
                <img src={ins1} alt="Ramana Murthy Venkata Saripalli" />
              </div>
            </div>
 
            <div className="leader-box">
              <div className="leader-text">
                <h3>Mr. Rajha S</h3>
                <h4>Vice President</h4>
                <p>
                  Accomplished educator with demonstrated ability to teach, motivate, and direct students while maintaining high interest and achievement. Articulate communicator, able to effectively interact with diverse populations of faculty and students at a variety of academic levels. Result-oriented professional trainer who utilizes creativity, strong analytical ability, presentation skills and expertise in providing training and development for students and employees.
                </p>
              </div>
              <div className="leader-img">
                <img src={ins2} alt="Mr. Rajha S" />
              </div>
            </div>
          </div>
        </section>
 
        <span class="spacer"></span>
 
        {/* // Student Feedback Section */}
        <section className="feedback">
        <h2>Feedback from the students</h2>
 
        {/* Slider for Feedback */}
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          slidesToShow={3} // Show 3 feedbacks at a time
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={false}
          cssEase="linear"
          arrows={true} // Enable arrows
          prevArrow={<PrevArrow />} // Left Arrow
          nextArrow={<NextArrow />} // Right Arrow
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="feedback-box">
            <h3>LOUKYA</h3>
            <p>
              Vardaan Dedication to student success is truly inspiring. Their interactive
              teaching methods keep students motivated and engaged.
            </p>
          </div>
 
          <div className="feedback-box">
            <h3>LIKITHA</h3>
            <p>
              The resources they provide, such as additional readings, online tutorials,
              and support, are incredibly helpful for reinforcing my understanding of key concepts.
            </p>
          </div>
 
          <div className="feedback-box">
            <h3>KRUSHINI</h3>
            <p>
              The practical exercises and case studies you incorporate into the coaching
              sessions have been particularly beneficial.
            </p>
          </div>
 
          <div className="feedback-box">
            <h3>MUNI SYAM</h3>
            <p>
              Vardaan's hands-on approach to training is outstanding! The mentorship and
              guidance provided by the instructors make complex topics easy to understand.
            </p>
          </div>
 
          <div className="feedback-box">
            <h3>KHAIRUNNISA SHAIK</h3>
            <p>
              Vardaan's data science training provided industry insights, hands-on
              learning, and cutting-edge tech like AI and GenAI.
            </p>
          </div>
        </Slider>
      </section>
      </div>
      <Footer />
    </div>
  );
};
 
export default MyPage;
 
 