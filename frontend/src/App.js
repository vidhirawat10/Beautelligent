// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeautelligentHomePage from "./Homepage";
import LoginPage from './LoginPage';
import AnalysisPage from './AnalysisPage';
import UploadImage from './UploadImage'; // Import the new UploadImage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeautelligentHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/upload-image" element={<UploadImage />} /> {/* New route for Upload Image Page */}
        {/* You can add more routes here for other pages like /technology, /products, etc. */}
      </Routes>
    </Router>
  );
}

export default App;