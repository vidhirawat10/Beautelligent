// src/RecommendationsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RecommendationsPage.css'; // Import the new CSS



// Assuming you have an icon for a skincare mask or product placeholder
// You might want to replace this with an actual image if you have one.
import recommendationMaskIcon from './assets/mask.png'; // Placeholder for product image/mask icon

function RecommendationsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    // We no longer need uploadedImageSrc state if we're not displaying the image
    // const [uploadedImageSrc, setUploadedImageSrc] = useState(null); 

    useEffect(() => {
        // No longer need to get imageData from location.state if not displaying it
        // if (location.state && location.state.imageData) {
        //     setUploadedImageSrc(location.state.imageData);
        // }
    }, [location.state]); // Still keep location.state in dependency array if you might use other state later

    // Placeholder data for tailored skincare routine
    const skincareRoutineSteps = [
        { id: 1, title: "Cleanse Gently", description: "Use a mild, pH-balanced cleanser twice daily to remove impurities without stripping natural oils." },
        { id: 2, title: "Tone Hydratingly", description: "Apply a hydrating toner to balance skin pH and prepare it for subsequent steps." },
        { id: 3, title: "Target with Serum", description: "Incorporate a serum rich in antioxidants or specific active ingredients for your concerns (e.g., Vitamin C for dark spots)." },
        { id: 4, title: "Moisturize Adequately", description: "Apply a non-comedogenic moisturizer to lock in hydration and support the skin barrier." },
        { id: 5, title: "Protect Daily (SPF)", description: "Always finish with a broad-spectrum SPF 30+ sunscreen in the morning, regardless of weather." },
    ];

    // Placeholder data for recommended products
    const recommendedProducts = [
        {
            id: 1,
            name: "Gentle Foaming Cleanser",
            description: "Effectively removes makeup and impurities while maintaining skin's natural moisture barrier.",
            image: recommendationMaskIcon, // Replace with actual product image path
            link: "https://www.nykaafashion.com/lakme-absolute-skin-gloss-facial-foam/p/50459"
        },
        {
            id: 2,
            name: "Hydrating Toner with Hyaluronic Acid",
            description: "Replenishes moisture and preps skin for better absorption of serums and moisturizers.",
            image: recommendationMaskIcon,
            link: "https://www.nykaafashion.com/minimalist-pha-3-toner/p/89270"
        },
        {
            id: 3,
            name: "Vitamin C Brightening Serum",
            description: "Visibly brightens skin, reduces dark spots, and evens out skin tone for a radiant complexion.",
            image: recommendationMaskIcon,
            link: "https://www.nykaafashion.com/plum-15-vitamin-c-face-serum-with-mandarin/p/162796"
        },
        {
            id: 4,
            name: "Ceramide Repair Moisturizer",
            description: "Restores and strengthens the skin's protective barrier, providing long-lasting hydration.",
            image: recommendationMaskIcon,
            link: "https://www.nykaafashion.com/dot-key-ceramide-skin-barrier-repair-moisturizer/p/87820"
        },
        {
            id: 5,
            name: "Broad-Spectrum Daily Sunscreen SPF 50+",
            description: "Lightweight, non-greasy formula offering superior protection against UVA/UVB rays.",
            image: recommendationMaskIcon,
            link: "https://www.nykaafashion.com/re-equil-oxybenzone-and-omc-free-sunscreen-spf-50/p/54316"
        },
    ];

    return (
        <div className="recommendations-page-container">
    

            <h1 className="recommendations-header">Your Tailored Skincare Recommendations</h1>
            <p className="recommendations-subtext">
                Based on your live skin analysis, here's a personalized routine and product suggestions to help you achieve healthier skin.
            </p>

            <div className="recommendations-content-grid">
                {/* Left Section: Skincare Routine */}
                <div className="skincare-routine-card routine-only-card"> {/* Added a new class for styling */}
                    <h3>Tailored Skincare Routine Steps</h3>
                    <div className="routine-steps-list">
                        {skincareRoutineSteps.map(step => (
                            <div key={step.id} className="routine-step-item">
                                <h4>{step.id}. {step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Recommended Products */}
                <div className="products-section">
                    <h3>Recommended Products</h3>
                    <div className="products-grid">
                        {recommendedProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h4 className="product-name">{product.name}</h4>
                                <p className="product-description">{product.description}</p>
                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="view-product-button">
                                    View
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendationsPage;