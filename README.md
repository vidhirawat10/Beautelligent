<h1 align="center">🌸 Beautelligent - AI-Powered Skincare Analysis 🌸</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Skincare-Intelligence-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Machine%20Learning-Enabled-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Under_Development-yellow?style=for-the-badge" />
</p>

---

## 💡 Overview

**Beautelligent** is your personal AI-driven skincare consultant. It uses computer vision and machine learning to analyze your skin through a **live camera feed** and detects:

- 🌿 **Skin Type** (Oily, Dry, Normal)
- 🔴 **Acne Detection** (Forehead, Cheeks, etc.)
- ☀️ **Pigmentation / Dark Spots**
- 🧴 Recommends personalized skincare routines & products

---

## 📸 Live Preview Flow

User Clicks "Analyze My Skin"
↓
Camera Opens (3–4 Images Captured)
↓
Images Stored & Analyzed by ML Models
↓
🧠 Skin Type, Acne, Pigmentation Detected
↓


---

## 🛠️ Tech Stack

| Frontend | Backend | ML & CV | Storage |
|----------|---------|---------|---------|
| React.js | Flask / FastAPI | TensorFlow, OpenCV | MongoDB / Firebase |

---

## 🧠 ML Models Used

- `skin_type_model.h5` → Classifies skin type
- `acne_detector_model.h5` → Localizes acne areas
- Future: `pigmentation_model`, `blackhead_model`

---

## 📁 Project Structure
beautelligent/
<br>
├── client/ # React Frontend
<br>
├── server/ # Flask API
<br>
│ ├── models/ # Trained ML models
<br>
│ ├── routes/ # API endpoints
<br>
│ └── utils/ # Image preprocessing, etc.
<br>
├── data/ # Dataset folders
<br>
├── test/ # Test images
<br>
└── README.md


---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/beautelligent.git
cd beautelligent

# Setup virtual environment & install dependencies
cd server
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
pip install -r requirements.txt

# Start the backend server
python app.py

# Start the frontend
cd ../client
npm install
npm start
```


## 🎯 Features Roadmap
 - Skin Type Classification ✅

 - Acne Detection ✅

 - Pigmentation Detection 🔄

 - Blackhead/Whitehead Detection 🔄

 - Personalized Product Suggestions 🔄
   
---

## 🙋‍♀️ Meet the Creator
Made with ❤️ by
<br> Vidhi Rawat || Vaishnavi Sinha || Yachika || Yashika
<br>
✉️ [Email – Vidhi](mailto:vidhirawat54@gmail.com) • [Email – Vaishnavi](mailto:vaishnavisinha476@gmail.com )

---

## 🤝 Contribute
PRs are welcome! If you have ideas, improvements, or want to collaborate, please open an issue or pull request.

---

<p align="center"><b>🌼 Beautelligent — Because your skin deserves smart care 🌼</b></p>


