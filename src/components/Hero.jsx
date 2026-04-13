import React, { useState } from "react";
import "./Hero.css";

export default function Hero({ onBookClick }) {
  const [isExplored, setIsExplored] = useState(false);

  return (
    <div className="hero">
      <img className="img" src="/image/harrier1.jpg" alt="car" />
      
      {!isExplored ? (
        <div className="hero-text fade-in">
          <h1>HARRIER</h1>
          <p>Starting at ₹35.87 Lakh</p>
          <button className="confirm-btn" onClick={() => setIsExplored(true)}>Explore DNA</button>
        </div>
      ) : (
        <div className="pillars-overlay fade-in">
          <div className="pillars-grid">
            <div className="pillar-card">
              <span>🛡️</span>
              <h3>Safety</h3>
              <p>5-Star GNCAP Rated</p>
            </div>
            <div className="pillar-card">
              <span>💎</span>
              <h3>Design</h3>
              <p>Impact 2.0 Language</p>
            </div>
            <div className="pillar-card">
              <span>⚡</span>
              <h3>Power</h3>
              <p>Kryotec 170 Engine</p>
            </div>
          </div>
          <button className="confirm-btn" style={{background: 'white', color: 'black'}} onClick={() => setIsExplored(false)}>
            ← Back to Harrier
          </button>
        </div>
      )}
    </div>
  );
}