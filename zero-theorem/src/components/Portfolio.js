import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      category: 'development',
      description: 'A comprehensive financial dashboard with real-time analytics and data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js']
    },
    {
      id: 2,
      title: 'EcoBrand Identity',
      category: 'design',
      description: 'Complete brand identity for a sustainable products company including logo and packaging.',
      image: '/api/placeholder/400/250',
      technologies: ['Logo Design', 'Brand Guidelines', 'Packaging']
    },
    {
      id: 3,
      title: 'Health & Fitness App',
      category: 'development',
      description: 'Mobile application for tracking workouts and nutrition with personalized recommendations.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 4,
      title: 'SaaS Platform UI',
      category: 'design',
      description: 'User interface design for a B2B SaaS platform with complex data management needs.',
      image: '/api/placeholder/400/250',
      technologies: ['Figma', 'UI Design', 'Design System']
    },
    {
      id: 5,
      title: 'E-commerce Solution',
      category: 'development',
      description: 'Full-stack e-commerce platform with payment integration and inventory management.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      id: 6,
      title: 'Tech Conference Branding',
      category: 'design',
      description: 'Complete visual identity for an annual technology conference including signage and merchandise.',
      image: '/api/placeholder/400/250',
      technologies: ['Branding', 'Print Design', 'Environmental Design']
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Explore our portfolio of successful projects that showcase our technical and creative capabilities
        </p>
        
        <div className="portfolio-filters">
          <button 
            className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setActiveFilter('all')}
          >
            All Work
          </button>
          <button 
            className={activeFilter === 'development' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setActiveFilter('development')}
          >
            Development
          </button>
          <button 
            className={activeFilter === 'design' ? 'filter-btn active' : 'filter-btn'} 
            onClick={() => setActiveFilter('design')}
          >
            Design
          </button>
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item fade-in">
              <div className="portfolio-image">
                <div className="image-placeholder">
                  <i className="fas fa-image"></i>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="action-btn">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="action-btn">
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <div className="portfolio-technologies">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;