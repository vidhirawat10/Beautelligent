
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AnalysisPage.css';


import leafSvg from './assets/leaf.svg';
import womanFaceImage from './assets/analysispg.png';


import instructionWomanImage from './assets/instructionWomanImage.png';
import glassesIcon from './assets/glassesIcon.png';
import lightbulbIcon from './assets/lightbulbIcon.png';
import lipstickIcon from './assets/lipstickIcon.png';
import faceOutlineIcon from './assets/faceOutlineIcon.png';


import faceIcon from './assets/capture.png';
import bodyIcon from './assets/analysis.png';
import noseIcon from './assets/recommend.png';

export default function AnalysisPage() {
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const navigate = useNavigate();

  const handlePhotoDiagnosticClick = () => {
    setShowInstructionsModal(true);
  };

  const handleLiveDiagnosticClick = () => {
    setShowConsentModal(true);
  };

  const handleCloseModal = () => {
    setShowInstructionsModal(false);
    setShowConsentModal(false);
    setIsConsentChecked(false);
  };

  const handleGetStartedClick = () => {
    setShowInstructionsModal(false);
    navigate('/upload-image');
  };

  const handleConsentChange = (event) => {
    setIsConsentChecked(event.target.checked);
  };

  // *** MODIFIED FUNCTION ***
  const handleSubmitConsent = () => {
    if (isConsentChecked) {
      console.log("Consent granted! Proceeding to live diagnostic.");
      setShowConsentModal(false);
      navigate('/capture-image'); // <--- NEW: Redirect to CaptureImage page
    } else {
      alert("Please grant consent to proceed with Live Diagnostic.");
    }
  };

  return (
    <div className="analysis-page-container">
      {/* Navbar - Converted to Link for proper SPA navigation */}
      <nav className="navbar analysis-navbar">
        <div className="logo analysis-logo">BEAUTELLIGENT</div>
        <div className="nav-links analysis-nav-links">
          <Link to="/">Home</Link>
          <Link to="/technology">Our Technology</Link>
          <Link to="/products">Products</Link>
          <Link to="/team">Team</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="icons analysis-icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          <span className="icon">🛒</span>
        </div>
      </nav>

      {/* Add the leaf images */}
      <img src={leafSvg} alt="Decorative Leaf" className="leaf top-left" />
      <img src={leafSvg} alt="Decorative Leaf" className="leaf bottom-right" />

      {/* Main content section */}
      <section className="discover-new-you-section">
        <div className="discover-main-content-row">
          <div className="discover-image-column">
            <img src={womanFaceImage} alt="Woman's Face" className="discover-main-image" />
          </div>

          <div className="discover-content-column">
            <h2 className="discover-main-heading">✨ DISCOVER A NEW YOU with Beautelligent</h2>

            <div className="discover-features-grid">
              <div className="discover-feature-card">
                <img src={faceIcon} alt="Capture Icon" className="feature-icon" />
                <h3 className="feature-title">Capture</h3>
                <p className="feature-description">
                  Take or upload face images using live camera or gallery
                </p>
              </div>
              <div className="discover-feature-card">
                <img src={bodyIcon} alt="Analyze Icon" className="feature-icon" />
                <h3 className="feature-title">Analyze</h3>
                <p className="feature-description">
                  AI models detect skin type, acne, pigmentation & other concerns.
                </p>
              </div>
              <div className="discover-feature-card">
                <img src={noseIcon} alt="Recommend Icon" className="feature-icon" />
                <h3 className="feature-title">Recommend</h3>
                <p className="feature-description">
                  Personalized skincare routine & product suggestions are displayed.
                </p>
              </div>
            </div>

            <div className="discover-buttons">
              <button
                className="catalogue-button"
                onClick={handlePhotoDiagnosticClick}
              >
                📷 Photo Diagnostic
              </button>
              <button
                className="readmore-button"
                onClick={handleLiveDiagnosticClick}
              >
                🎥 Live Diagnostic
              </button>
            </div>
          </div>
        </div>

        <div className="beauty-refined-section">
          <h3 className="beauty-refined-heading">💖 Your Beauty, Refined</h3>
          <p className="beauty-refined-description">
            Beautelligent uses deep learning and computer vision to analyze your skin like a professional dermatologist. Whether you're at home or on-the-go, you can trust Beautelligent to guide your skincare journey with precision, speed, and smart solutions tailored just for you.
          </p>
        </div>
      </section>

      {/* Instructions Modal (Existing) */}
      {showInstructionsModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
            <div className="modal-header">
              <h2>Instructions for Your Photo</h2>
            </div>
            <div className="modal-body">
              <div className="modal-instructions">
                <div className="instruction-item">
                  <img src={glassesIcon} alt="Remove Glasses" className="instruction-icon" />
                  <p>Remove your glasses and ensure your forehead is visible, with no hair covering it.</p>
                </div>
                <div className="instruction-item">
                  <img src={lightbulbIcon} alt="Well-lit Area" className="instruction-icon" />
                  <p>Take the photo in a well-lit area to ensure clarity.</p>
                </div>
                <div className="instruction-item">
                  <img src={lipstickIcon} alt="Avoid Makeup" className="instruction-icon" />
                  <p>Avoid wearing makeup for the most accurate analysis results.</p>
                </div>
                <div className="instruction-item">
                  <img src={faceOutlineIcon} alt="Face Directly" className="instruction-icon" />
                  <p>Face the camera directly and position your face with full coverage of camera</p>
                </div>
              </div>
              <div className="modal-image">
                <img src={instructionWomanImage} alt="Woman for Instructions"/>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notice and Consent Modal (Existing, now redirects to CaptureImage) */}
      {showConsentModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content consent-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>&times;</button>
            <div className="modal-header">
              <h2>Notice and Consent</h2>
            </div>
            <div className="modal-body consent-modal-body">
              <p>This website utilizes AI and machine learning for skin analysis. In order to perform this analysis, we require access to your live camera feed to capture your image. The captured image will be processed solely for analysis purposes. By granting your consent, you allow us to capture and process the image visible on your screen. Please confirm your consent below to proceed.</p>
              <label className="consent-checkbox-container">
                <input
                  type="checkbox"
                  checked={isConsentChecked}
                  onChange={handleConsentChange}
                />
                <span className="checkbox-custom"></span>
                I allow the website to capture my image for analysis
              </label>
            </div>
            <div className="modal-footer">
              <button
                className="modal-get-started-button"
                onClick={handleSubmitConsent}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
