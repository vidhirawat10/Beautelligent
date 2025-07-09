// src/UploadImage.js
import React, { useState, useRef } from 'react';
import './UploadImage.css'; // Import the new CSS file

// Assuming you have an SVG for the upload cloud icon
import uploadCloudIcon from './assets/upload.svg'; // You'll need to create this asset

function UploadImage() {
    const [dragOver, setDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    // Basic Info form states
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('Zoom'); // Default selected
    const [selectedEventType, setSelectedEventType] = useState('Webinar'); // Default selected
    const [isPrivateEvent, setIsPrivateEvent] = useState(false);

    const fileInputRef = useRef(null);

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
        // setDragOver(true); // Redundant if already set in dragEnter, but good for robustness
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
        // Basic validation
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
        if (allowedTypes.includes(file.type)) {
            setSelectedFile(file);
            console.log("File selected:", file.name);
            // You can add more logic here, like uploading the file
        } else {
            alert("Only PNG, JPG, JPEG, and PDF files are supported.");
            setSelectedFile(null);
        }
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click(); // Trigger the hidden file input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
        console.log("Event Name:", eventName);
        console.log("Description:", description);
        console.log("Selected Platform:", selectedPlatform);
        console.log("Selected Event Type:", selectedEventType);
        console.log("Is Private Event:", isPrivateEvent);
        console.log("Uploaded File:", selectedFile ? selectedFile.name : "No file");
        // Here you would typically send this data to a backend API
    };

    return (
        <div className="upload-image-page-container">
            <div className="upload-form-card">


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
                            accept=".png,.jpg,.jpeg,.pdf"
                        />
                        <button type="button" className="upload-file-button" onClick={handleUploadButtonClick}>
                             Upload Face Image
                        </button>
                        <p className="supported-files-text">
                            (Only PNG, JPG formats supported)
                        </p>
                        {selectedFile && (
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#007bff' }}>
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
                                                                        <button
                                        type="button"
                                        className={`selection-button ${selectedPlatform === 'PDF' ? 'selected' : ''}`}
                                        onClick={() => setSelectedPlatform('PDF')}
                                    >
                                        PDF
                                    </button>
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