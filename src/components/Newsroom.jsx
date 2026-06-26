import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, Building2, Sparkles, ArrowRight } from 'lucide-react';

export default function Newsroom({ onNavigate }) {
  const [showStadiumDetails, setShowStadiumDetails] = useState(false);

  return (
    <section id="news" className="container animate-fade-in-up" style={{ marginBottom: '48px' }}>
      <div className="section-header">
        <div>
          <span className="welcome-tag">Press & Media</span>
          <h2 className="section-title">Newsroom & Initiatives</h2>
        </div>
      </div>

      <div className="news-section">
        {/* Left Card: 1976 Golden Jubilee Batch Refurbishment */}
        <div className="news-main-card">
          <div className="news-main-image">
            <img src="/alumni_delegation.png" alt="1976 Batch Presentation delegation" />
            <span className="news-badge">Contribution</span>
          </div>
          <div className="news-main-content">
            <span className="news-date">18 June 2026</span>
            <h3>Heartfelt Gratitude to the 1976 Batch (Golden Jubilee Batch)</h3>
            <p>
              The College of Engineering Trivandrum extends its sincere appreciation to the 1976 Batch (Golden Jubilee Batch) for their generous contribution of <strong>₹16 Lakhs</strong> towards the refurbishment of the CET Indoor Stadium. This remarkable contribution will facilitate state-of-the-art wooden flooring, upgraded LED illumination, and updated spectator seating.
            </p>
            <button 
              className="cta-btn" 
              style={{ padding: '12px 24px', fontSize: '0.85rem' }}
              onClick={() => setShowStadiumDetails(!showStadiumDetails)}
            >
              {showStadiumDetails ? 'HIDE REFURBISHMENT DETAILS' : 'VIEW STADIUM REFURBISHMENT PLAN'}
            </button>

            {showStadiumDetails && (
              <div 
                className="animate-fade-in" 
                style={{ 
                  marginTop: '20px', 
                  padding: '24px', 
                  backgroundColor: 'var(--bg-secondary)', 
                  border: '2px solid var(--border-color)' 
                }}
              >
                <h4 style={{ color: 'var(--accent)', marginBottom: '12px', fontSize: '1.1rem' }}>CET INDOOR STADIUM UPGRADES</h4>
                <ul style={{ listStyleType: 'square', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                  <li style={{ marginBottom: '6px' }}><strong>SPORTS FLOORING:</strong> GRADE-A EUROPEAN MAPLEWOOD SUSPENSION FLOOR OPTIMIZED FOR BADMINTON AND BASKETBALL.</li>
                  <li style={{ marginBottom: '6px' }}><strong>LIGHTING:</strong> 500-LUX GLARE-FREE ENERGY-EFFICIENT LED SPORTS LIGHTING.</li>
                  <li style={{ marginBottom: '6px' }}><strong>SEATING:</strong> MODULAR RETRACTABLE GALLERY SEATING FOR 500 SPECTATORS.</li>
                  <li><strong>ACOUSTICS & AIRFLOW:</strong> WALL PANEL ABSORPTION AND SILENT VENTILATION SYSTEMS.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Card: Diamond Jubilee Hall Renovation Campaign Widget */}
        <div className="souvenir-card">
          <div className="souvenir-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Building2 size={20} style={{ color: 'var(--accent)' }} />
              <h3>JUBILEE HALL RENOVATION</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 800 }}>LIVE CAMPAIGN</span>
          </div>

          <div className="souvenir-content">
            <div className="souvenir-intro">
              <div className="souvenir-img-wrapper" style={{ width: '120px', height: '90px' }}>
                <img src="/diamond_jubilee_renovation.png" alt="Diamond Jubilee Hall Proposal Rendering" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                JOIN ALUMNI WORLDWIDE IN SUPPORTING THE RESTORATION OF CET'S HISTORIC **DIAMOND JUBILEE HALL**. SPONSOR CENTRAL AIR-CONDITIONING, ACOUSTIC TREATMENTS, AND ANCILLARY SPACES.
              </p>
            </div>

            {/* Campaign Progress Meter */}
            <div className="souvenir-progress-container">
              <div className="progress-label">
                <span>CAMPAIGN TRACKER (INR)</span>
                <span style={{ color: 'var(--accent)' }}>32.1% RAISED</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '32.1%' }}></div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '8px', textAlign: 'center' }}>
                ₹48.25 LAKHS RAISED OF ₹1.5 CRORE TOTAL PROJECT TARGET
              </p>
            </div>

            {/* View Campaign / Contribute CTA Button */}
            <div className="souvenir-actions">
              <button 
                onClick={() => onNavigate('renovation')}
                className="cta-btn" 
                style={{ width: '100%', gap: '8px' }}
              >
                <Sparkles size={16} />
                <span>SUPPORT PROJECT & VIEW DETAILS</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
