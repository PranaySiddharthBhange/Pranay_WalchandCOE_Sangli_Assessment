import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App'; // Import the root component of your application
import reportWebVitals from './reportWebVitals';

// Create a root instance using ReactDOM.createRoot() for Concurrent Mode
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in React.StrictMode for development mode checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure and report web vitals to improve app performance
reportWebVitals(console.log); // Log results to console for development
