
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './UploadImage.css'; 


import uploadCloudIcon from './assets/upload.svg'; // Make sure this path is correct

// Import the Leaf SVG as a React Component
import { ReactComponent as LeafSvg } from './assets/leaf.svg'; 

function UploadImage() {
    const [dragOver, setDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    // Basic Info form states
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('PNG'); // Default selected as PNG
    const [selectedEventType, setSelectedEventType] = useState('Skin Type'); // Default selected as Skin Type
    const [isPrivateEvent, setIsPrivateEvent] = useState(false);

    const fileInputRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        // Updated allowedTypes: removed PDF as it's an image analysis page
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (allowedTypes.includes(file.type)) {
            setSelectedFile(file);
            console.log("File selected:", file.name);
        } else {
            alert("Only PNG, JPG, and JPEG files are supported for image analysis."); // Updated alert
            setSelectedFile(null);
        }
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    // MODIFIED handleSubmit FUNCTION
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("Please upload a face image first to proceed with analysis.");
            return;
        }

        // Read the selected file as a Data URL
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        reader.onload = () => {
            const imageDataURL = reader.result; // This is the Data URL of the image
            console.log("Form Submitted! Redirecting to AnalysisResultPage with image.");

            // Navigate to the AnalysisResultPage, passing the image data in state
            navigate('/analysis-result', { state: { imageData: imageDataURL } });
        };

        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            alert("Failed to read image file.");
        };
    };

    return (
        <div className="upload-image-page-container">
            {/* Render the LeafSvg component here */}
            {/* You'll need to style this component in UploadImage.css to position it */}
            <LeafSvg className="leaf-background-svg" /> 

            <div className="upload-form-card">
                {/* Removed form-header-tabs and form-header-controls as per image_c94a74.png context */}
                {/* The provided image for UploadImage page does not show these elements, so they are omitted for consistency. */}

                <form onSubmit={handleSubmit} className="form-content">
                    <div
                        className={`file-upload-section ${dragOver ? 'drag-over' : ''}`}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="upload-icon">
                            <img src={uploadCloudIcon} alt="Upload Cloud" />
                        </div>
                        <p className="drop-file-text">Drop face image here</p>
                        <p className="or-text">OR</p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
                            accept=".png,.jpg,.jpeg" 
                        />
                        <button type="button" className="upload-file-button" onClick={handleUploadButtonClick}>
                            Upload Face Image
                        </button>
                        <p className="supported-files-text">
                            (Only PNG, JPG, JPEG formats supported) {/* Updated text */}
                        </p>
                        {selectedFile && (
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#eb5672' }}> {/* Changed color */}
                                Selected: {selectedFile.name}
                            </p>
                        )}
                    </div>

                    <div className="basic-info-section">
                        <h2>Basic Info</h2>

                        <div className="form-group">
                            <label htmlFor="eventName">Enter Your Name</label>
                            <input
                                type="text"
                                id="eventName"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Describe Your Issue</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="platform-event-type-grid">
                            <div className="form-group">
                                <span className="button-group-label">Image Format</span>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedPlatform === 'PNG' ? 'selected' : ''}`}
                                        onClick={() => setSelectedPlatform('PNG')}
                                    >
                                        PNG
                                    </button>
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedPlatform === 'JPG' ? 'selected' : ''}`}
                                        onClick={() => setSelectedPlatform('JPG')}
                                    >
                                        JPG
                                    </button>
                                    {/* Removed PDF button as it's not supported for image analysis */}
                                </div>
                            </div>

                            <div className="form-group">
                                <span className="button-group-label">📊 Analysis Type</span>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedEventType === 'Skin Type' ? 'selected' : ''}`}
                                        onClick={() => setSelectedEventType('Skin Type')}
                                    >
                                        Skin Type
                                    </button>
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedEventType === 'Acne Detection' ? 'selected' : ''}`}
                                        onClick={() => setSelectedEventType('Acne Detection')}
                                    >
                                        Acne Detection
                                    </button>
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedEventType === 'Pigmentation Check' ? 'selected' : ''}`}
                                        onClick={() => setSelectedEventType('Pigmentation Check')}
                                    >
                                        Pigmentation Check
                                    </button>
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedEventType === 'Dark Spot Analysis' ? 'selected' : ''}`}
                                        onClick={() => setSelectedEventType('Dark Spot Analysis')}
                                    >
                                        Dark Spot Analysis
                                    </button>
                                    <button
                                        type="button"
                                        className={`selection-button ${selectedEventType === 'Complete Analysis' ? 'selected' : ''}`}
                                        onClick={() => setSelectedEventType('Complete Analysis')}
                                    >
                                        Complete Analysis
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="private-event-checkbox">
                            <input
                                type="checkbox"
                                id="privateEvent"
                                checked={isPrivateEvent}
                                onChange={(e) => setIsPrivateEvent(e.target.checked)}
                            />
                            <label htmlFor="privateEvent">Private Analysis</label>
                        </div>

                        <div className="next-button-container">
                            <button type="submit" className="next-button">
                                Next <span style={{ marginLeft: '5px' }}>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadImage;
