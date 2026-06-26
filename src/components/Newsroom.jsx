import React, { useState } from 'react';
import { Award, BookOpen, Send, Calendar, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsroom() {
  const [souvenirName, setSouvenirName] = useState('');
  const [souvenirYear, setSouvenirYear] = useState('');
  const [souvenirMemory, setSouvenirMemory] = useState('');
  const [souvenirSubmitted, setSouvenirSubmitted] = useState(false);
  const [showStadiumDetails, setShowStadiumDetails] = useState(false);

  const handleSouvenirSubmit = (e) => {
    e.preventDefault();
    if (!souvenirName || !souvenirYear || !souvenirMemory) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    
    setSouvenirSubmitted(true);
    // Confetti effect!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

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

        {/* Right Card: CETAA Souvenir 2026 */}
        <div className="souvenir-card">
          <div className="souvenir-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={20} style={{ color: 'var(--accent)' }} />
              <h3>CETAA SOUVENIR 2026</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', fontWeight: 700 }}>18 JUNE 2026</span>
          </div>

          <div className="souvenir-content">
            <div className="souvenir-intro">
              <div className="souvenir-img-wrapper">
                <img src="/cetaa_souvenir.png" alt="CETAA Souvenir 2026 Brochure" />
              </div>
              <p>
                AS WE PREPARE FOR <strong>CETAA DAY 2026</strong> ON 25 JULY 2026, WE INVITE YOU TO CONTRIBUTE ARTICLES, TRAVELOGUES, DRAWINGS, AND FOND CAMPUS MEMORIES TO THE UPCOMING SOUVENIR PUBLICATION THAT CAPTURES OUR LEGACY ACROSS GENERATIONS.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="souvenir-progress-container">
              <div className="progress-label">
                <span>ALUMNI CONTRIBUTION PROGRESS</span>
                <span style={{ color: 'var(--accent)' }}>84% COLLECTED</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '84%' }}></div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '8px', textAlign: 'center' }}>
                840 OF 1000 MEMORIES AND ARTICLES GATHERED. HELP US REACH OUR TARGET!
              </p>
            </div>

            {/* Interactive Form */}
            <div className="souvenir-actions">
              {!souvenirSubmitted ? (
                <form onSubmit={handleSouvenirSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="souvenir-form-group" style={{ display: 'flex', gap: '12px' }}>
                    <input 
                      type="text" 
                      placeholder="YOUR NAME" 
                      className="souvenir-input" 
                      value={souvenirName}
                      onChange={(e) => setSouvenirName(e.target.value)}
                      required
                    />
                    <input 
                      type="number" 
                      placeholder="GRADUATION YEAR" 
                      className="souvenir-input"
                      value={souvenirYear}
                      onChange={(e) => setSouvenirYear(e.target.value)}
                      required
                    />
                  </div>
                  <div className="souvenir-form-group">
                    <textarea 
                      placeholder="SHARE A SHORT MEMORY OR MESSAGE FOR THE SOUVENIR (MAX 200 WORDS)..." 
                      className="souvenir-input"
                      rows="3"
                      value={souvenirMemory}
                      onChange={(e) => setSouvenirMemory(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="cta-btn" style={{ width: '100%' }}>
                    <Send size={16} />
                    <span>SUBMIT TO EDITORIAL TEAM</span>
                  </button>
                </form>
              ) : (
                <div 
                  className="animate-fade-in" 
                  style={{ 
                    textAlign: 'center', 
                    padding: '32px 24px', 
                    border: '2px solid var(--accent)', 
                    backgroundColor: 'var(--bg-secondary)'
                  }}
                >
                  <CheckCircle size={36} style={{ color: 'var(--accent)', marginBottom: '12px', display: 'inline-block' }} />
                  <h4 style={{ color: 'var(--accent)', marginBottom: '8px', fontSize: '1.2rem' }}>THANK YOU, {souvenirName}!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                    YOUR MEMORY HAS BEEN SUBMITTED SUCCESSFULLY TO THE CETAA EDITORIAL BOARD. LET'S MAKE SOUVENIR 2026 MEMORABLE!
                  </p>
                  <button 
                    onClick={() => {
                      setSouvenirSubmitted(false);
                      setSouvenirName('');
                      setSouvenirYear('');
                      setSouvenirMemory('');
                    }}
                    style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'underline', fontWeight: 700 }}
                  >
                    SUBMIT ANOTHER RESPONSE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
