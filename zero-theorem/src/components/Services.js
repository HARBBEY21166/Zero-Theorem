import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Software Development',
      description: 'Full-stack development with modern technologies like React, Node.js, and cloud infrastructure.',
      features: ['Web Applications', 'APIs & Microservices', 'Cloud Deployment']
    },
    {
      icon: 'fa-paint-brush',
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality for exceptional digital experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems']
    },
    {
      icon: 'fa-palette',
      title: 'Brand Identity',
      description: 'Comprehensive branding solutions that communicate your unique value proposition.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer end-to-end solutions that combine technical excellence with creative vision
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;