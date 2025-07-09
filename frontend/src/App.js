// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeautelligentHomePage from "./Homepage";
import LoginPage from './LoginPage';
import AnalysisPage from './AnalysisPage';
import UploadImage from './UploadImage';
import CaptureImage from './CaptureImage'; // Import the new CaptureImage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeautelligentHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/capture-image" element={<CaptureImage />} /> {/* New route for Capture Image Page */}
        {/* You can add more routes here for other pages like /technology, /products, etc. */}
      </Routes>
    </Router>
  );
}

export default App;