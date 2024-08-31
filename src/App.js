import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Falcon9 from "./falcon9";
import "./App.css";


// Component for the main page
const HomePage = ({ handleClick }) => (
  <div className="inner-left-bottom">
    <h2 className="sline">UPCOMING LAUNCH</h2>
    <h1 className="fline">POLARIS DAWN</h1>
    <button className="watch-button" onClick={handleClick}>
      WATCH 
    </button>
  </div>
);

// Main App component
const AppContent = () => {
  const handleClick = () => {
    window.open("rocket.mp4", "_blank");
   
  };

  // Using useLocation hook to determine the current path
  const location = useLocation();

  return (
    <>
      {/* Only show Navbar if not on the /falcon9 route */}
      {location.pathname !== "/falcon9" && <Navbar />}

      <Routes>
        <Route path="/falcon9" element={<Falcon9 />} />
        <Route path="/" element={<HomePage handleClick={handleClick} />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

// Main App wrapper with Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
