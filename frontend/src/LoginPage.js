// src/LoginPage.js
import React from 'react';
import './LoginPage.css';
import leafSvg from './assets/leaf.svg';
import left_illustration from './assets/left_illustration.svg' 
import right_illustration from './assets/right_illustration.svg' 

export default function LoginPage() {
  return (
    <div className="login-page-container">
      {/* Add the leaf images */}
      <img src={leafSvg} alt="Decorative Leaf" className="leaf top-left" />

      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <input type="email" id="email" placeholder="EMAIL" required />
          </div>
          <div className="input-group">
            <input type="password" id="password" placeholder="PASSWORD" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>

      <div className='left_illustration'>
        <img src={left_illustration} alt="left_illustration" className="left_illustration" />
      </div>
      <div className='right_illustration'>
        <img src={right_illustration} alt="right_illustration" className="right_illustration" />
      </div>
    </div>
  );
}