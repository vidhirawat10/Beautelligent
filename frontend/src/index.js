// src/index.js (or main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: ReactDOM.createRoot for React 18+
import './index.css'; // Make sure this exists and is valid
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);