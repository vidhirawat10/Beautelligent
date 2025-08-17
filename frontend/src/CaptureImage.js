
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './CaptureImage.css';

import glassesIcon from './assets/glassesIcon.png';
import lightbulbIcon from './assets/lightbulbIcon.png';
import lipstickIcon from './assets/lipstickIcon.png';
import faceOutlineIcon from './assets/faceOutlineIcon.png';

// Import the SVG as a React Component
import { ReactComponent as LeafSvg } from './assets/leaf.svg'; 

function CaptureImage() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [streamActive, setStreamActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [cameraLoading, setCameraLoading] = useState(true); // New state to manage loading message

    const stopCamera = useCallback(() => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setStreamActive(false);
            setCameraLoading(true); // Reset loading state when camera stops
            console.log("Camera stopped.");
        }
    }, []);

    const startCamera = useCallback(async () => {
        if (streamActive) {
            console.log("Camera already active.");
            return;
        }

        setCameraLoading(true); // Set loading true when attempting to start camera

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user' // 'user' for front camera, 'environment' for back
                    // You can add more constraints like width, height, frameRate here if needed
                    // e.g., width: { ideal: 1280 }, height: { ideal: 720 }
                }
            });

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;

                videoRef.current.onloadedmetadata = () => {
                    console.log("Video metadata loaded.");
                    videoRef.current.play().then(() => {
                        setStreamActive(true);
                        setCameraLoading(false); // Camera is playing, remove loading
                        console.log("Camera started and playing.");
                    }).catch(playErr => {
                        console.error("Error playing video:", playErr);
                        setStreamActive(false);
                        setCameraLoading(false); // Hide loading on play error
                        alert("Could not play camera feed. Please check browser settings.");
                    });
                };

                // Handle potential errors if onloadedmetadata doesn't fire for some reason
                videoRef.current.onerror = (e) => {
                    console.error("Video element error:", e);
                    setStreamActive(false);
                    setCameraLoading(false);
                    alert("An error occurred with the video feed.");
                };

            } else {
                console.warn("videoRef.current is null when attempting to set srcObject.");
                setCameraLoading(false);
            }
        } catch (err) {
            console.error("Error accessing camera: ", err);
            setStreamActive(false);
            setCameraLoading(false); // Hide loading on camera access error
            if (err.name === 'NotAllowedError') {
                alert("Camera access denied. Please allow camera access in your browser settings.");
            } else if (err.name === 'NotFoundError') {
                alert("No camera found. Please ensure a camera is connected and enabled.");
            } else if (err.name === 'NotReadableError' || err.name === 'OverconstrainedError') {
                alert("Camera is in use by another application or device. Please close other camera apps.");
            } else {
                alert("Could not access camera. Error: " + err.message);
            }
        }
    }, [streamActive]); // Only re-run if streamActive changes (e.g., from true to false for a restart)

    const takePhoto = () => {
        if (videoRef.current && canvasRef.current && streamActive) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // Set canvas dimensions to match video feed for true resolution capture
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageDataURL = canvas.toDataURL('image/png');
            setCapturedImage(imageDataURL);
            stopCamera(); // Stop camera after capturing
            console.log("Photo captured and camera stopped.");
            // In a real app, you'd send imageDataURL to your backend for analysis
        } else {
            console.warn("Cannot take photo: Camera stream not active or refs not ready.");
            if (!streamActive) {
                alert("Camera is not active. Please ensure camera access is granted and video is playing.");
            }
        }
    };

    // useEffect to manage camera lifecycle
    useEffect(() => {
        console.log("CaptureImage useEffect mounted.");
        startCamera();

        // Cleanup function: stop camera when component unmounts
        return () => {
            console.log("CaptureImage useEffect cleanup.");
            stopCamera();
        };
    }, [startCamera, stopCamera]); // Dependencies: ensure functions are stable

    return (
        <div className="capture-image-page-container">
            {/* Render the LeafSvg component here */}
            {/* You'll need to style this component in CaptureImage.css to position it */}
            <LeafSvg className="leaf-background-svg" /> 

            <h1 className="capture-page-header">Welcome to Live Diagnostic Tool</h1>

            <div className="capture-content-card">
                <div className="instructions-box">
                    <h3>Instructions while capturing photo</h3>
                    <div className="instruction-item">
                        <img src={glassesIcon} alt="Remove Glasses" className="instruction-icon" />
                        <p>Remove your glasses and ensure your forehead is visible, with no hair covering it.</p>
                    </div>
                    <div className="instruction-item">
                        <img src={lightbulbIcon} alt="Well-lit Area" className="instruction-icon" />
                        <p>Sit in a well-lit area to ensure clarity.</p>
                    </div>
                    <div className="instruction-item">
                        <img src={lipstickIcon} alt="Avoid Makeup" className="instruction-icon" />
                        <p>Avoid wearing makeup for the most accurate analysis results.</p>
                    </div>
                    <div className="instruction-item">
                        <img src={faceOutlineIcon} alt="Face Directly" className="instruction-icon" />
                        <p>Face the camera directly and position your face with full coverage of camera</p>
                    </div>
                </div>

                <div className="camera-capture-box">
                    <div className="live-diagnostic-frame">
                        {/* Video element for live camera feed */}
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted // Mute to avoid echo if audio is requested (though we only request video)
                            className={streamActive ? 'active-video-stream' : 'inactive-video-stream'}
                            // Ensuring video element always takes full space, and mirroring for front camera
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)', display: streamActive ? 'block' : 'none' }}
                        ></video>
                        {cameraLoading && !streamActive && (
                            <p className="placeholder-text">Camera Feed Loading...</p>
                        )}
                        {!cameraLoading && !streamActive && ( // Message if not loading and not active
                            <p className="placeholder-text">Camera Unavailable or Denied</p>
                        )}
                    </div>
                    <button className="upload-image-button" onClick={takePhoto} disabled={!streamActive}>
                        Capture Image
                    </button>

                    <div className="captured-image-display">
                        <p>Captured image will appear here</p>
                        {capturedImage && (
                            <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%', maxHeight: '200px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '10px' }} />
                        )}
                        {capturedImage && (
                             <button
                                className="upload-image-button"
                                onClick={() => console.log("Proceed with analysis for captured image")}
                                style={{ marginTop: '15px' }}
                            >
                                Analyze Image
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Hidden canvas for image capture */}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
}

export default CaptureImage;
