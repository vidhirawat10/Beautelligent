// src/AnalysisResultPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AnalysisResultPage.css'; // Import the new CSS

// Import the Leaf SVG as a React Component
import { ReactComponent as LeafSvg } from './assets/leaf.svg'; // Make sure this path is correct

function AnalysisResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [uploadedImageSrc, setUploadedImageSrc] = useState(null);

    // Placeholder data for analysis results
    const analysisResults = {
        spots: 9,
        wrinkles: 56,
        acne: 19,
        darkCircles: 80,
        redness: 28,
        oiliness: 35,
        moisture: 68,
        droopyUpperEyelid: 55,
        droopyLowerEyelid: 17,
        skinType: "Combination"
    };

    useEffect(() => {
        // Check if image data was passed from the previous page
        if (location.state && location.state.imageData) {
            setUploadedImageSrc(location.state.imageData);
        } else {
            // Optionally, redirect if no image data is found
            // navigate('/upload-image');
            // alert('No image uploaded. Please upload an image first.');
        }
    }, [location.state, navigate]);

    const handleCheckRecommendations = () => {
        console.log("Checking recommendations...");
        // Implement navigation to recommendations page or display recommendations
        alert("Navigating to recommendations! (Not implemented yet)");
    };

    const handleTryAgain = () => {
        console.log("Trying again...");
        // Implement navigation back to upload or capture page
        navigate('/upload-image'); // Or '/capture-image' depending on flow
    };

    return (
        <div className="analysis-result-page-container">
            {/* Render the LeafSvg component here */}
            {/* You'll need to style this component in AnalysisResultPage.css to position it */}
            <LeafSvg className="leaf-background-svg" /> 

            <h1 className="analysis-result-header">LIVE SKIN ANALYSIS</h1>
            <p className="analysis-result-subtext">
                Integrate skin analysis online seamlessly with our AI Skin Analyzer. Assess concerns, skin type, and age in real time.
            </p>

            <div className="analysis-result-content-grid">
                <div className="image-card">
                    <h3>Your Skin Image</h3>
                    <div className="your-skin-image-wrapper">
                        {uploadedImageSrc ? (
                            <img src={uploadedImageSrc} alt="Your Skin" />
                        ) : (
                            <p>No image uploaded</p> // Placeholder if image not found
                        )}
                    </div>
                    <p className="skin-type-text">Your Skin Type: {analysisResults.skinType}</p>
                </div>

                <div className="results-card">
                    <h3>Live Diagnostic Results</h3>
                    <p style={{ color: '#eb5672', fontWeight: '600', marginBottom: '20px' }}>Skin Result Card</p> {/* This matches the small text in your image */}
                    <div className="results-grid">
                        <div className="result-item">
                            Spots <span className="result-value">{analysisResults.spots}</span>
                        </div>
                        <div className="result-item">
                            Wrinkles <span className="result-value">{analysisResults.wrinkles}</span>
                        </div>
                        <div className="result-item">
                            Acne <span className="result-value">{analysisResults.acne}</span>
                        </div>
                        <div className="result-item">
                            Dark Circles <span className="result-value">{analysisResults.darkCircles}</span>
                        </div>
                        <div className="result-item">
                            Redness <span className="result-value">{analysisResults.redness}</span>
                        </div>
                        <div className="result-item">
                            Oiliness <span className="result-value">{analysisResults.oiliness}</span>
                        </div>
                        <div className="result-item">
                            Moisture <span className="result-value">{analysisResults.moisture}</span>
                        </div>
                        <div className="result-item">
                            Droopy Upper Eyelid <span className="result-value">{analysisResults.droopyUpperEyelid}</span>
                        </div>
                        <div className="result-item">
                            Droopy Lower Eyelid <span className="result-value">{analysisResults.droopyLowerEyelid}</span>
                        </div>
                    </div>

                    <button className="action-button" onClick={handleCheckRecommendations}>
                        Check Recommendations
                    </button>
                    <button className="action-button" onClick={handleTryAgain}>
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AnalysisResultPage;