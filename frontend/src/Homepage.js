// src/Homepage.js
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import "./Homepage.css";
import trackingImage from './assets/img1.jpg'; // Placeholder image path for Our Technology section

// Placeholder imports for step images (YOU NEED TO REPLACE THESE WITH ACTUAL PATHS)
import step1Image from './assets/step1.png'; // Path for your Step 1 image
import step2Image from './assets/step2.png'; // Path for your Step 2 image
import step3Image from './assets/step3.png'; // Path for your Step 3 image
import step4Image from './assets/step4.png'; // Path for your Step 4 image


export default function BeautelligentHomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Combine all items for the scrolling section
  const scrollItems = [
    "SkinType", "Acne", "Pigmentation", "Spots", "DarkCircles",
    "Blackheads", "Whiteheads", "Texture"
  ];

  // Duplicate the items to ensure a seamless continuous loop
  const duplicatedScrollItems = [...scrollItems, ...scrollItems];

  // State for the "Our Technology" section tabs
  const [activeTab, setActiveTab] = useState('Tracking');

  // Content for each tab
  const tabContent = {
    Tracking: {
      description: "Our face tracking technology is designed fully in-house. As the very first trackers in the world to run a real-time augmented reality experience on the web, it is incredibly lightweight and fast. With our specialization in beauty, we can build highly accurate trackers by skipping all the extra weight you'll find among the competition. All of this is done while testing and validating our results on diverse and global datasets to ensure what we build is fair for everyone.",
      image: trackingImage // Use the imported image
    },
    Analysis: {
      description: "Our AI analysis engine meticulously examines skin conditions, identifying concerns like hyperpigmentation, redness, and fine lines with unparalleled precision. It goes beyond surface-level assessment to provide actionable insights for personalized skincare routines, learning and adapting to individual skin behaviors.",
      image: trackingImage // Use the imported image
    },
    Rendering: {
      description: "Experience your future skin. Our rendering technology visualizes potential improvements from recommended products, allowing users to see simulated results in stunning detail. This immersive experience helps in making informed decisions by bridging the gap between current condition and desired outcomes.",
      image: trackingImage // Use the imported image
    },
  };

  const currentYear = new Date().getFullYear(); // Added back for copyright

  // Function to handle button click and navigate
  const handleStartAnalysisClick = () => {
    navigate('/analysis');
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">BEAUTELLIGENT</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/technology">Our Technology</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Personalized Recommendations</Link>
        </div>
        <div className="icons">
          <span className="icon">🔍</span>
          <Link to="/login" className="icon" aria-label="Profile">👤</Link>
          <span className="icon">🛒</span>
        </div>
      </nav>

      <section className="hero-section">
        <h2 className="tagline">" <strong>SMART TECHNOLOGY, TIMELESS BEAUTY</strong> "</h2>
        <h1 className="main-heading">Scientific Approach to</h1>
        <h1 className="highlight-heading">AI Skin Analysis</h1>
        <p className="description">
          Empower your customers to achieve healthier skin with tailored product recommendations,
          all accessible with a simple tap
        </p>
        {/* Kept as button and added onClick handler */}
        <button className="cta-button" onClick={handleStartAnalysisClick}>Start Analysis</button>
      </section>

      {/* Beautelligent Introduction and Features Section */}
      <section className="beautelligent-section">
        <div className="beautelligent-content-left">
          <h2 className="beautelligent-heading">
            <strong>Beautelligent:</strong> <br />
            no-code, personalized solution for skincare innovation
          </h2>
          <p className="beautelligent-description">
            Beautelligent is an AI-powered skincare diagnostic platform that empowers beauty brands and professionals to deliver custom treatment plans and smart product suggestions based on real-time facial analysis and skin condition detection.
          </p>
          <button className="beautelligent-cta-button">💡 See how it works</button>
        </div>
        <div className="beautelligent-features-box">
          <ul className="beautelligent-features-list">
            <li>▸ Detects acne, skin type, pigmentation & more in real time</li>
            <li>▸ Trained on thousands of labeled dermatological images for precision</li>
            <li>▸ Analyzes facial zones with intelligent segmentation</li>
            <li>▸ Utilizes advanced CNN and ML algorithms for high accuracy</li>
            <li>▸ Tailors skincare recommendations by analyzing skin behavior over time</li>
            <li>▸ Designed to serve users of all skin tones and climates</li>
          </ul>
        </div>
      </section>

      {/* Scrolling Features/Analysis Types Section */}
      <section className="features-scroll-section">
        <div className="scroll-container">
          {duplicatedScrollItems.map((item, index) => (
            <span key={index} className="scroll-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Why Beautelligent Worth Using Section */}
      <section className="why-beautelligent-section">
        <h2 className="section-title">Why is Beautelligent worth using?</h2>
        <div className="feature-cards-container">
          <div className="feature-card">
            <div className="card-icon">🧠</div>
            <h3 className="card-title">Smart</h3>
            <p className="card-description">Beautelligent leverages powerful AI and deep learning models built through extensive training on real skin datasets. Its accuracy rivals that of professional dermatologists in detecting skin concerns.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">⏱️</div>
            <h3 className="card-title">Instant</h3>
            <p className="card-description">Just click on "Analyze My Skin", and within seconds, Beautelligent identifies skin type, acne zones, and pigmentation — all in real time from live camera input.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">📱</div>
            <h3 className="card-title">Accessible</h3>
            <p className="card-description">Beautelligent works seamlessly on desktop or mobile. Access expert-like skincare insights anytime, anywhere — no appointments, no delays.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">💸</div>
            <h3 className="card-title">Affordable</h3>
            <p className="card-description">Designed for both individual users and skincare businesses, Beautelligent offers flexible pricing with a no-code setup. It’s a cost-effective tool to deliver customized skincare advice without breaking the bank.</p>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="our-technology-section">
        <h2 className="section-title">Our Technology</h2>
        <div className="technology-tabs-container">
          <button
            className={`tech-tab ${activeTab === 'Tracking' ? 'active' : ''}`}
            onClick={() => setActiveTab('Tracking')}
          >
            Tracking
          </button>
          <button
            className={`tech-tab ${activeTab === 'Analysis' ? 'active' : ''}`}
            onClick={() => setActiveTab('Analysis')}
          >
            Analysis
          </button>
          <button
            className={`tech-tab ${activeTab === 'Rendering' ? 'active' : ''}`}
            onClick={() => setActiveTab('Rendering')}
          >
            Rendering
          </button>
        </div>

        <div className="tech-content-area">
          <div className="tech-description-box">
            <p>{tabContent[activeTab].description}</p>
          </div>
          <div className="tech-image-box">
            <img src={tabContent[activeTab].image} alt={`${activeTab} Technology`} className="tech-image" />
          </div>
        </div>
      </section>

      {/* New Section: How It Works: Step-by-Step */}
      <section className="how-it-works-section">
        <h2 className="section-title how-it-works-title">Tailors skincare recommendations to suit each customer's unique needs</h2>
        <div className="steps-container">
          <div className="step-card">
            <img src={step1Image} alt="Step 1" className="step-image" />
          </div>
          <div className="step-card">
            <img src={step2Image} alt="Step 2" className="step-image" />
          </div>
          <div className="step-card">
            <img src={step3Image} alt="Step 3" className="step-image" />
          </div>
          <div className="step-card">
            <img src={step4Image} alt="Step 4" className="step-image" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo footer-logo">BEAUTELLIGENT</div>
            <p className="footer-tagline">Smart Technology, Timeless Beauty</p>
          </div>

          <div className="footer-links-group">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/technology">Our Technology</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="icon">📘</span></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="icon">📸</span></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><span className="icon">🐦</span></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span className="icon">💼</span></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Beautelligent. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}