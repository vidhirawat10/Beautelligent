// src/AnalysisPage.js
import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for proper navigation
import './AnalysisPage.css';
import leafSvg from './assets/leaf.svg';
import womanFaceImage from './assets/analysispg.png'; // Assuming this is your image path for the left section
// Placeholder icons - YOU NEED TO REPLACE THESE WITH ACTUAL SVG/PNG IMPORTS
import faceIcon from './assets/capture.png'; // Updated to generic 'faceIcon' based on CSS button names
import bodyIcon from './assets/analysis.png'; // Updated to generic 'bodyIcon' based on CSS button names
import noseIcon from './assets/recommend.png'; // Updated to generic 'noseIcon' based on CSS button names

export default function AnalysisPage() {
  return (
    <div className="analysis-page-container">
      {/* Navbar - Kept as is based on your instruction to "keep navbar similar" */}
      <nav className="navbar analysis-navbar">
        <div className="logo analysis-logo">BEAUTELLIGENT</div>
        <div className="nav-links analysis-nav-links">
          {/* Consider converting these to <Link to="..."> for proper SPA navigation */}
          <a href="/">Home</a>
          <a href="/technology">Our Technology</a>
          <a href="/products">Products</a>
          <a href="/team">Team</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="icons analysis-icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          <span className="icon">🛒</span>
        </div>
      </nav>

      {/* Add the leaf images */}
      <img src={leafSvg} alt="Decorative Leaf" className="leaf top-left" />
      <img src={leafSvg} alt="Decorative Leaf" className="leaf bottom-right" /> {/* New leaf */}

      {/* Main content section - redesigned to match the image */}
      <section className="discover-new-you-section">

        <div className="discover-main-content-row"> {/* New wrapper for the two columns */}
          <div className="discover-image-column">
            <img src={womanFaceImage} alt="Woman's Face" className="discover-main-image" />
          </div>

          <div className="discover-content-column">
            <h2 className="discover-main-heading">✨ DISCOVER A NEW YOU with Beautelligent</h2>

            <div className="discover-features-grid">
              <div className="discover-feature-card">
                <img src={faceIcon} alt="Face Icon" className="feature-icon" />
                <h3 className="feature-title">Capture</h3>
                <p className="feature-description">
                  Take or upload face images using live camera or gallery
                </p>
              </div>
              <div className="discover-feature-card">
                <img src={bodyIcon} alt="Body Icon" className="feature-icon" />
                <h3 className="feature-title">Analyze</h3>
                <p className="feature-description">
                  AI models detect skin type, acne, pigmentation & other concerns.
                </p>
              </div>
              <div className="discover-feature-card">
                <img src={noseIcon} alt="Nose Icon" className="feature-icon" />
                <h3 className="feature-title">Recommend</h3>
                <p className="feature-description">
                  Personalized skincare routine & product suggestions are displayed.
                </p>
              </div>
            </div>

            <div className="discover-buttons">
              <button className="catalogue-button">📷 Photo Diagnostic</button> {/* Changed class */}
              <button className="readmore-button">🎥 Live Diagnostic</button> {/* Changed class */}
            </div>
          </div>
        </div> {/* End discover-main-content-row */}

        {/* Moved outside the two-column structure, but still within discover-new-you-section */}
        <div className="beauty-refined-section"> {/* New wrapper for this content */}
          <h3 className="beauty-refined-heading">💖 Your Beauty, Refined</h3>
          <p className="beauty-refined-description">
            Beautelligent uses deep learning and computer vision to analyze your skin like a professional dermatologist. Whether you're at home or on-the-go, you can trust Beautelligent to guide your skincare journey with precision, speed, and smart solutions tailored just for you.
          </p>
        </div>

      </section>
      

    </div>
  );
}