import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span role="img" aria-label="airplane" className="footer-logo">✈️</span>
          <span className="footer-title">SkyHigh Airlines</span>
          <p className="footer-tagline">Fly the skies with comfort and style!</p>
        </div>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#flights">Flights</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-payments">
        {/* Visa */}
        <span className="payment-logo" aria-label="Visa">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="24" rx="4" fill="#fff"/>
            <text x="50%" y="60%" textAnchor="middle" fill="#1a1f71" fontSize="13" fontWeight="bold" fontFamily="Arial" dy=".3em">VISA</text>
          </svg>
        </span>
        {/* MasterCard */}
        <span className="payment-logo" aria-label="MasterCard">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="24" rx="4" fill="#fff"/>
            <circle cx="16" cy="12" r="7" fill="#eb001b"/>
            <circle cx="24" cy="12" r="7" fill="#f79e1b" fillOpacity="0.85"/>
          </svg>
        </span>
        {/* PayPal */}
        <span className="payment-logo" aria-label="PayPal">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="24" rx="4" fill="#fff"/>
            <text x="50%" y="60%" textAnchor="middle" fill="#003087" fontSize="12" fontWeight="bold" fontFamily="Arial" dy=".3em">PayPal</text>
          </svg>
        </span>
        {/* Amex */}
        <span className="payment-logo" aria-label="American Express">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="24" rx="4" fill="#fff"/>
            <text x="50%" y="60%" textAnchor="middle" fill="#2e77bb" fontSize="11" fontWeight="bold" fontFamily="Arial" dy=".3em">AMEX</text>
          </svg>
        </span>
        {/* Discover */}
        <span className="payment-logo" aria-label="Discover">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="24" rx="4" fill="#fff"/>
            <text x="50%" y="60%" textAnchor="middle" fill="#ff6000" fontSize="11" fontWeight="bold" fontFamily="Arial" dy=".3em">DISC</text>
          </svg>
        </span>
      </div>
      <div className="footer-bottom">
        <span>
          &copy; {dateTime.getFullYear()} SkyHigh Airlines. All rights reserved. |
          Date: {formattedDate} |
          Time: {formattedTime}
        </span>
      </div>
    </footer>
  );
};

export default Footer; 