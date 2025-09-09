import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechNova Solutions',
      role: 'CEO',
      content: 'Zero Theorem delivered beyond our expectations. Their technical expertise combined with design sensibility resulted in a product that our users love. The development process was smooth and communication was excellent throughout.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Fintech Innovations',
      role: 'Product Director',
      content: 'Working with Zero Theorem was a game-changer for our platform. They understood our complex requirements and implemented solutions that were both elegant and scalable. Their attention to detail is remarkable.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Jessica Williams',
      company: 'EcoBrand',
      role: 'Marketing Director',
      content: 'The brand identity created by Zero Theorem perfectly captured our vision. They took the time to understand our mission and values, resulting in a cohesive brand system that resonates with our audience.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Hear what our clients have to say about working with us
        </p>
        
        <div className="testimonials-container">
          <div className="testimonial-card fade-in">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="image-placeholder">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="author-details">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-role">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                ></button>
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;