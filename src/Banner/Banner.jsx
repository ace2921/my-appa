import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container banner-bg-image">
      <div className="banner-content">
        <h1 className="banner-title">Fly High with SkyHigh Airlines</h1>
        <p className="banner-subtitle">Experience the world from above – Book your next adventure today!</p>
      </div>
      <div className="banner-plane">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="25" width="70" height="10" rx="5" fill="#2196f3"/>
          <polygon points="80,30 110,20 110,40" fill="#1976d2"/>
          <rect x="15" y="20" width="10" height="20" rx="3" fill="#90caf9"/>
          <rect x="60" y="20" width="8" height="20" rx="3" fill="#90caf9"/>
          <rect x="5" y="28" width="8" height="4" rx="2" fill="#1976d2"/>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
