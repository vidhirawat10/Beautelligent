// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeautelligentHomePage from "./Homepage";
import LoginPage from './LoginPage'; // Import the new LoginPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeautelligentHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* You can add more routes here for other pages like /technology, /products, etc. */}
      </Routes>
    </Router>
  );
}

export default App;