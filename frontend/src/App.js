// src/App.js (or your main routing file)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaptureImage from './CaptureImage'; // Assuming you have this
import UploadImage from './UploadImage';   // Assuming you have this
import AnalysisResultPage from './AnalysisResultPage'; // Assuming you have this
import RecommendationsPage from './RecommendationsPage'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaptureImage />} /> {/* Or your landing page */}
        <Route path="/capture-image" element={<CaptureImage />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/analysis-result" element={<AnalysisResultPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;