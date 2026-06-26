import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Globe, LogIn, UserPlus } from 'lucide-react';

export default function Header({ onRegisterClick, currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '#about', page: 'home' },
    { label: 'Jubilee Hall', href: '#renovation', page: 'renovation' },
    { label: 'Chapters', href: '#chapters', page: 'home' },
    { label: 'Newsroom', href: '#news', page: 'home' },
    { label: 'Events', href: '#events', page: 'home' },
    { label: 'Contact', href: '#contact', page: 'home' }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (link.page === 'renovation') {
      onNavigate('renovation');
    } else {
      onNavigate('home');
      // Delay scrolling slightly to allow App component to switch back to home view
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <header className="animate-fade-in">
      {/* Top Bar with utility links */}
      <div className="header-top">
        <div className="container header-top-container">
          <div className="header-meta-info">
            <div className="header-meta-item">
              <Phone size={14} style={{ color: 'var(--accent)' }} />
              <span>+91 62380 71274</span>
            </div>
            <div className="header-meta-item">
              <Mail size={14} style={{ color: 'var(--accent)' }} />
              <span>info@cetaa.org</span>
            </div>
            <div className="header-meta-item">
              <Globe size={14} style={{ color: 'var(--accent)' }} />
              <span>Trivandrum, Kerala</span>
            </div>
          </div>
          <div className="header-top-actions">
            <button className="auth-btn" onClick={onRegisterClick}>
              <UserPlus size={14} />
              <span>Register</span>
            </button>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <button className="auth-btn" onClick={() => alert('Login functionality (Mocked)')}>
              <LogIn size={14} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <nav className="header-main">
        <div className="container header-main-container">
          <a href="#" className="brand-section" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <div className="logo-container" style={{ overflow: 'hidden' }}>
              <img 
                src="/logo.png" 
                alt="CETAA Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </div>
            <div className="brand-info">
              <h1>COLLEGE OF ENGINEERING TRIVANDRUM</h1>
              <p>ALUMNI ASSOCIATION</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`nav-link ${(link.page === 'renovation' && currentPage === 'renovation') || (link.page === 'home' && currentPage === 'home' && window.location.hash === link.href) ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#app" 
              className="nav-link" 
              style={{ 
                color: 'var(--accent)', 
                borderColor: 'var(--accent)', 
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              Mobile App
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-nav" style={{ display: 'block' }}>
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#app" 
                className="mobile-nav-link" 
                style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mobile App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
