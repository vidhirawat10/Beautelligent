// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeautelligentHomePage from "./Homepage";
import LoginPage from './LoginPage';
import AnalysisPage from './AnalysisPage';
import UploadImage from './UploadImage';
import CaptureImage from './CaptureImage';
import AnalysisResultPage from './AnalysisResultPage';
import RecommendationsPage from './RecommendationsPage'; // Import the new AnalysisResultPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeautelligentHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/capture-image" element={<CaptureImage />} />
        <Route path="/analysis-result" element={<AnalysisResultPage />} /> 
        <Route path="/recommendations" element={<RecommendationsPage />} />{/* New route */}
        {/* You can add more routes here for other pages like /technology, /products, etc. */}
      </Routes>
    </Router>
  );
}

export default App;