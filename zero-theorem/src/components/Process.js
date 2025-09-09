import React from 'react';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We begin by deeply understanding your business goals, target audience, and technical requirements.',
      icon: 'fa-search'
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'We develop a comprehensive plan that aligns technical solutions with creative vision and business objectives.',
      icon: 'fa-chess'
    },
    {
      step: 3,
      title: 'Design',
      description: 'Our designers create intuitive, beautiful interfaces that prioritize user experience and reflect your brand identity.',
      icon: 'fa-pencil-alt'
    },
    {
      step: 4,
      title: 'Development',
      description: 'Our engineers build robust, scalable solutions using modern technologies and best practices.',
      icon: 'fa-code'
    },
    {
      step: 5,
      title: 'Testing',
      description: 'We rigorously test every aspect of the solution to ensure quality, performance, and security.',
      icon: 'fa-check-double'
    },
    {
      step: 6,
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure long-term success.',
      icon: 'fa-rocket'
    }
  ];

  return (
    <section id="process" className="process section">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          A structured approach that ensures quality, efficiency, and alignment with your business goals
        </p>
        
        <div className="process-steps">
          {processSteps.map(step => (
            <div key={step.step} className="process-step fade-in">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <h3>Ready to start your project?</h3>
          <p>Let's discuss how we can bring your vision to life with our proven process</p>
          <a href="#contact" className="btn">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Process;