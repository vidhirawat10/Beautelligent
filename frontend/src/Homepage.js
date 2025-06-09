import React from "react";
import "./Homepage.css"; // ✅ Correct CSS import

export default function BeautelligentHomePage() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">BEAUTELLIGENT</div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/technology">Our Technology</a>
          <a href="/products">Products</a>
          <a href="/team">Team</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
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
    </div>
  );
}
