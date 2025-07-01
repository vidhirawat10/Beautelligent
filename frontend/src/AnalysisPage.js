import React from 'react';
import './AnalysisPage.css'; // We'll create this CSS file next
import trackingImage from './assets/img1.jpg'; // Using a placeholder image for the background, adjust as needed

export default function AnalysisPage() {
  return (
    <div className="analysis-page-container">
      <nav className="navbar analysis-navbar">
        <div className="logo analysis-logo">BEAUTELLIGENT</div>
        <div className="nav-links analysis-nav-links">
          {/* Note: In a real app, these would be <Link to="..."> */}
          <a href="/">Home</a>
          <a href="/technology">Our Technology</a>
          <a href="/products">Products</a>
          <a href="/team">Team</a> {/* Added Team link based on image */}
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="icons analysis-icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          <span className="icon">🛒</span>
        </div>
      </nav>

      <section className="analysis-hero-section" style={{ backgroundImage: `url(${trackingImage})` }}>
        <h2 className="analysis-main-heading">SKIN ANALYSIS</h2>
        <p className="analysis-tagline">"SUITABLE FOR ALL SKIN TYPES"</p>

        <div className="sd-analysis-card">
          <h3 className="sd-analysis-title">SD SKIN ANALYSIS</h3>
          <p className="sd-analysis-description">
            Standard Precision Skin Analysis for Comprehensive Evaluation
          </p>
          <button className="diagnostic-button live-diagnostic">LIVE DIAGNOSTIC</button>
          <button className="diagnostic-button photo-diagnostic">PHOTO DIAGNOSTIC</button>
        </div>
      </section>
    </div>
  );
}