import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">ZT</span>
              <span className="logo-text">Zero Theorem</span>
            </div>
            <p className="footer-description">
              We combine technical excellence with creative vision to build digital experiences that make an impact.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="https://nodejs.org/en/downloadservices">Web Development</a></li>
              <li><a href="https://nodejs.org/en/downloadservices">UI/UX Design</a></li>
              <li><a href="https://nodejs.org/en/downloadservices">Brand Identity</a></li>
              <li><a href="https://nodejs.org/en/downloadservices">Mobile Applications</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="https://nodejs.org/en/downloadabout">About Us</a></li>
              <li><a href="https://nodejs.org/en/downloadportfolio">Our Work</a></li>
              <li><a href="https://nodejs.org/en/downloadprocess">Process</a></li>
              <li><a href="https://nodejs.org/en/downloadcontact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://nodejs.org/en/download" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://nodejs.org/en/download" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://nodejs.org/en/download" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="https://nodejs.org/en/download" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="footer-contact">
              <p>hello@zerotheorem.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Zero Theorem. All rights reserved.</p>
          <div className="footer-legal">
            <a href="https://nodejs.org/en/download">Privacy Policy</a>
            <a href="https://nodejs.org/en/download">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;