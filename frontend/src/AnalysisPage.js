// src/AnalysisPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for proper navigation
import './AnalysisPage.css';
import womanFaceImage from './assets/11243884.png'; // Assuming this is your image path for the left section
// Placeholder icons - YOU NEED TO REPLACE THESE WITH ACTUAL SVG/PNG IMPORTS
import faceIcon from './assets/11246699.png';
import bodyIcon from './assets/8378925.jpg';
import noseIcon from './assets/11246699.png';

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

      {/* Main content section - redesigned to match the image */}
      <section className="discover-new-you-section">
        <div className="discover-image-column">
          <img src={womanFaceImage} alt="Woman's Face" className="discover-main-image" />
        </div>
        <div className="discover-content-column">
          <h2 className="discover-main-heading">DISCOVER A NEW YOU</h2>

          <div className="discover-features-grid">
            <div className="discover-feature-card">
              <img src={faceIcon} alt="Face Icon" className="feature-icon" />
              <h3 className="feature-title">Face</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="discover-feature-card">
              <img src={bodyIcon} alt="Body Icon" className="feature-icon" />
              <h3 className="feature-title">Body</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="discover-feature-card">
              <img src={noseIcon} alt="Nose Icon" className="feature-icon" />
              <h3 className="feature-title">Nose</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="discover-buttons">
            <button className="catalogue-button">Catalogue</button>
            <button className="readmore-button">Read More</button>
          </div>

          <h3 className="beauty-refined-heading">Your Beauty Refined</h3>
          <p className="beauty-refined-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            odio scelerisque, imperdiet risus et, gravida vitae. Vivamus pellentesque
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Note: The image shows some decorative elements (lines, squares) that would be
          implemented with additional CSS pseudo-elements or background images.
          For this update, I'm focusing on the main structural and textual elements. */}

    </div>
  );
}