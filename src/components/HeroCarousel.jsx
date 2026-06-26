import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, UserPlus, ArrowRight } from 'lucide-react';

export default function HeroCarousel({ onRegisterClick, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/1.jpg',
      title: 'LEGACY SINCE 1939',
      description: 'THE HISTORIC MAIN BUILDING STANDS AS A TESTAMENT TO DECADES OF ENGINEERING BRILLIANCE AND LIFELONG MEMORIES.'
    },
    {
      image: '/2.jpg',
      title: 'GLOBAL NETWORK GATEWAY',
      description: 'STEP BACK ONTO CAMPUS THROUGH OUR DIGITAL ALUMNI PORTAL AND RECONNECT WITH CLASSMATES WORLDWIDE.'
    },
    {
      image: '/5.jpeg',
      title: 'CONNECTING 30,000+ CETIANS',
      description: 'JOIN A POWERFUL GRID OF INNOVATORS, INDUSTRIAL LEADERS, AND CHAPTERS ACROSS CONTINENTS.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container animate-fade-in-up">
        <div className="hero-wrapper">
          {/* Slideshow area */}
          <div className="slider-container">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="slide-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="slide-caption">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Controls */}
            <button className="slider-btn prev" onClick={handlePrev} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <button className="slider-btn next" onClick={handleNext} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicators */}
            <div className="slider-indicators">
              {slides.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Persistent CTA Sidebar */}
          <div className="hero-sidebar-cta">
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 800, marginBottom: '16px', display: 'inline-block' }}>
              OFFICIAL ALUMNI PORTAL
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>WELCOME TO THE OFFICIAL CET PORTAL</h2>
            <p>
              CREATE YOUR PROFILE TO RECONNECT WITH YOUR CLASSMATES, SHARE FOND CAMPUS MEMORIES, AND ACCELERATE GLOBAL OPPORTUNITIES.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <button className="cta-btn" onClick={onRegisterClick} style={{ width: '100%' }}>
                <UserPlus size={18} />
                <span>REGISTER PROFILE</span>
              </button>
              <button 
                className="outline-btn" 
                onClick={() => onNavigate('renovation')}
                style={{ width: '100%', borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                <span>JUBILEE HALL RENOVATION</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Fast Marquee Sub-banner (Stat/Logo details) */}
      <div className="marquee-wrap">
        <div className="marquee-content speed-fast">
          <div className="marquee-item">
            <span>CETAA PORTAL</span>
            <span className="marquee-divider">•</span>
            <span>ESTD 1939</span>
            <span className="marquee-divider">•</span>
            <span>30,000+ MEMBERS</span>
            <span className="marquee-divider">•</span>
            <span>12+ GLOBAL CHAPTERS</span>
            <span className="marquee-divider">•</span>
            <span>LEGACY OF EXCELLENCE</span>
            <span className="marquee-divider">•</span>
            <span>COLLEGE OF ENGINEERING TRIVANDRUM</span>
          </div>
          <div className="marquee-item">
            <span>CETAA PORTAL</span>
            <span className="marquee-divider">•</span>
            <span>ESTD 1939</span>
            <span className="marquee-divider">•</span>
            <span>30,000+ MEMBERS</span>
            <span className="marquee-divider">•</span>
            <span>12+ GLOBAL CHAPTERS</span>
            <span className="marquee-divider">•</span>
            <span>LEGACY OF EXCELLENCE</span>
            <span className="marquee-divider">•</span>
            <span>COLLEGE OF ENGINEERING TRIVANDRUM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
