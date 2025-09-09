import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Precision <span className="gradient-text">Engineering</span> & 
              Creative <span className="gradient-text">Design</span>
            </h1>
            <p className="hero-subtitle">
              We build digital experiences that merge technical excellence with stunning visual design. 
              From concept to deployment, we transform ideas into impactful digital solutions.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="btn">View Our Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <div className="window-title">project.js</div>
              </div>
              <div className="window-content">
                <pre>
                  <code>
{`function createDigitalExperience() {
  // Precision engineering
  const architecture = designScalableSystem();
  const performance = optimizeForSpeed();
  
  // Creative design
  const ui = craftIntuitiveInterface();
  const branding = developCohesiveIdentity();
  
  return merge(architecture, performance, ui, branding);
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;