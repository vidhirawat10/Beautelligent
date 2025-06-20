import React from "react";
import "./Homepage.css"; // ✅ Correct CSS import

export default function BeautelligentHomePage() {
  // Combine all items for the scrolling section
  const scrollItems = [
     "SkinType", "Acne", "Pigmentation", "Spots", "DarkCircles",
    "Blackheads", "Whiteheads", "Texture"
  ];

  // Duplicate the items to ensure a seamless continuous loop
  const duplicatedScrollItems = [...scrollItems, ...scrollItems];

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">BEAUTELLIGENT</div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/technology">Our Technology</a>
          <a href="/products">Products</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Personalized Recommendations</a>
        </div>
        <div className="icons">
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
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
        <button className="cta-button">Start Analysis</button>
      </section>

      {/* New Section: Beautelligent Introduction and Features */}
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

      {/* New Section: Scrolling Features/Analysis Types */}
      <section className="features-scroll-section">
        <div className="scroll-container">
          {duplicatedScrollItems.map((item, index) => (
            <span key={index} className="scroll-item">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}