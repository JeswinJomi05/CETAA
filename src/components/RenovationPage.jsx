import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, Award, Volume2, ShieldAlert, Sparkles, Building2, Wind } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RenovationPage({ onBackToHome }) {
  const [selectedTier, setSelectedTier] = useState('silver');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorYear, setDonorYear] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [totalRaised, setTotalRaised] = useState(4825000); // 48.25 Lakhs

  const tiers = [
    { id: 'bronze', name: 'BRONZE PATRON', amount: 10000, desc: 'CONTRIBUTES TO STAGE ACOUSTICS & COMFORT SPECS. NAME ETCHED ON DIGITAL COMMEMORATIVE WALL.' },
    { id: 'silver', name: 'SILVER BENEFACTOR', amount: 50000, desc: 'CONTRIBUTES TO ANCILLARY CODES & STAGE LIGHTS. NAME CARVED ON STADIUM & HALL WALL PLAQUES.' },
    { id: 'gold', name: 'GOLDEN SPONSOR', amount: 200000, desc: 'FUNDING CENTRAL AIR-CONDITIONING & ANCILLARY SPACES. INVITED AS VIP FOR DIAMOND LAUNCH IN 2026.' },
    { id: 'diamond', name: 'DIAMOND FOUNDER', amount: 500000, desc: 'CORE PATRON FUNDING OVERALL MODERN ARCHITECTURAL RECONSTRUCTION. LIFETIME PLATINUM CETAA MEMBER.' }
  ];

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (!donorName || !donorEmail || !donorYear) {
      alert('Please fill out all fields.');
      return;
    }

    const addedAmount = selectedTier === 'custom' ? parseInt(customAmount || 0) : tiers.find(t => t.id === selectedTier).amount;
    setTotalRaised(prev => prev + addedAmount);
    setSubmitted(true);

    // Confetti celebration!
    confetti({
      particleCount: 250,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const getActiveAmount = () => {
    if (selectedTier === 'custom') return customAmount ? `₹${parseInt(customAmount).toLocaleString('en-IN')}` : 'CUSTOM';
    return `₹${tiers.find(t => t.id === selectedTier).amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--foreground)' }}>
      {/* Slower Moving Renovation Infinite CSS Marquee */}
      <div className="marquee-wrap" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--foreground)' }}>
        <div className="marquee-content speed-slow">
          <div className="marquee-item">
            <span>DIAMOND JUBILEE HALL RENOVATION</span>
            <span className="marquee-divider">///</span>
            <span>SEEKING FINANCIAL SUPPORT FROM ALUMNI WORLDWIDE</span>
            <span className="marquee-divider">///</span>
            <span>MODERNISE CET AUDITORIUM FOR THE FUTURE</span>
            <span className="marquee-divider">///</span>
            <span>AIR-CONDITIONING AND ANCILLARY SPACES SUPPORT</span>
          </div>
          <div className="marquee-item">
            <span>DIAMOND JUBILEE HALL RENOVATION</span>
            <span className="marquee-divider">///</span>
            <span>SEEKING FINANCIAL SUPPORT FROM ALUMNI WORLDWIDE</span>
            <span className="marquee-divider">///</span>
            <span>MODERNISE CET AUDITORIUM FOR THE FUTURE</span>
            <span className="marquee-divider">///</span>
            <span>AIR-CONDITIONING AND ANCILLARY SPACES SUPPORT</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '32px' }}>
        {/* Back Link */}
        <button 
          onClick={onBackToHome} 
          className="outline-btn" 
          style={{ padding: '8px 16px', fontSize: '0.85rem', marginBottom: '40px', gap: '6px' }}
        >
          <ArrowLeft size={16} />
          <span>BACK TO HOME</span>
        </button>

        {/* Viewport display title */}
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <span className="welcome-tag">CET DEVELOPMENT INITIATIVE</span>
          <h2 style={{ fontSize: 'var(--text-display)', lineHeight: '0.8', margin: '12px 0 24px' }}>
            DIAMOND JUBILEE
          </h2>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--accent)', lineHeight: '0.8' }}>
            HALL RENOVATION
          </h2>
        </div>

        {/* Layout Grid: Overview & Objectives vs Tracker & Form */}
        <div className="news-section" style={{ gridTemplateColumns: '1.2fr 1fr', alignItems: 'start' }}>
          
          {/* Left Column: Details, Objectives and Architectural Renderings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Overview Box */}
            <div className="welcome-box-full" style={{ margin: 0 }}>
              <div>
                <span className="welcome-tag">PROJECT OVERVIEW</span>
                <p style={{ fontSize: '1.15rem', color: 'var(--foreground)', fontWeight: 600, marginBottom: '20px' }}>
                  THE DIAMOND JUBILEE HALL STANDS AS THE EPICENTRE OF CET'S CULTURAL, ACADEMIC, AND ALUMNI ACTIVITIES. ESTABLISHED TO MARK DECADES OF CAMPUS TRADITION, THE HALL REQUIRES AN ENTIRE STATE-OF-THE-ART MODERNIZATION PLAN.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)' }}>
                  This comprehensive project seeks to refit the entire auditorium to international standards. The core focus is to install central VRF air-conditioning systems, upgrade the stage mechanics, design specialized acoustic treatments, and recreate the ancillary rooms (green rooms, AV booths, VIP guest lounges) to support high-end academic symposia and student events.
                </p>
              </div>
            </div>

            {/* Renovation Image Rendering */}
            <div style={{ border: '2px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
              <img 
                src="/diamond_jubilee_renovation.png" 
                alt="Proposed renovated Diamond Jubilee Hall" 
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(0.2)' }}
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  backgroundColor: 'var(--accent)', 
                  color: 'var(--accent-foreground)', 
                  padding: '8px 16px',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase'
                }}
              >
                PROPOSED ARCHITECTURAL RENDERING
              </div>
            </div>

            {/* Core Objectives Cards */}
            <div className="hairline-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {/* Objective 1 */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', textAlign: 'left', border: '2px solid var(--border-color)' }}>
                <Wind size={32} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>AIR-CONDITIONING</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
                  INSTALLATION OF HIGH-CAPACITY VRF SYSTEM DELIVERING SILENT, ZONE-CONTROLLED DUAL AIR-FLOW ACROSS SEATING TIERS AND STAGE ENVIRONS.
                </p>
              </div>
              {/* Objective 2 */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', textAlign: 'left', border: '2px solid var(--border-color)' }}>
                <Building2 size={32} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>ANCILLARY SPACES</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
                  COMPLETE STRUCTURAL OVERHAUL OF STAGE WINGS, MODERN GREEN ROOMS, MEDIA AV CONTROL ROOMS, AND EXCLUSIVE GUEST RECEPTION LOUNGES.
                </p>
              </div>
              {/* Objective 3 */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', textAlign: 'left', border: '2px solid var(--border-color)' }}>
                <Volume2 size={32} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>ACOUSTICS & ILLUMINATION</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
                  DEPLOYMENT OF SUSPENDED PERFORATED BAFFLE PANELS, DIFFUSERS, AND DMX-CONTROLLABLE SCENE-LIGHTING MODULES FOR DISTINGUISHED PRESENTATIONS.
                </p>
              </div>
              {/* Objective 4 */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', textAlign: 'left', border: '2px solid var(--border-color)' }}>
                <Award size={32} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>COMMEMORATIVE DESIGN</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
                  A COMMEMORATIVE DIGITAL AND BRICK PATRON WALL HONORING ALUMNI SPONSORS IN PERPETUITY AT THE ENTRANCE GATE AND HALL lobby.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Donation Tracker & Interactive Payment Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Live Progress Tracker */}
            <div 
              style={{ 
                border: '2px solid var(--border-color)', 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '40px 32px',
                textAlign: 'left'
              }}
            >
              <span className="welcome-tag" style={{ color: 'var(--accent)' }}>LIVE CAMPAIGN STATISTICS</span>
              <h3 style={{ fontSize: '2.5rem', margin: '12px 0 8px', fontFamily: 'var(--font-heading)' }}>
                ₹{(totalRaised / 100000).toFixed(2)} LAKHS
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', fontWeight: 700, textTransform: 'uppercase' }}>
                CONTRIBUTED TOWARDS ₹1.5 CRORE TARGET ({(totalRaised / 15000000 * 100).toFixed(1)}%)
              </p>
              <div className="progress-bar-bg" style={{ height: '14px', margin: '24px 0 12px' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${Math.min(totalRaised / 15000000 * 100, 100)}%`, backgroundColor: 'var(--accent)' }}
                ></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--muted-foreground)', fontWeight: 700 }}>
                <span>MIN: ₹0</span>
                <span>TARGET: ₹1.5 CRORE</span>
              </div>
            </div>

            {/* Donation Form */}
            <div className="souvenir-card" style={{ gridTemplateRows: 'auto' }}>
              <div className="souvenir-header" style={{ display: 'block' }}>
                <h3 style={{ margin: 0 }}>SUPPORT DIAMOND JUBILEE</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                  SECURE YOUR PLACE IN CET'S ONGOING HISTORY
                </p>
              </div>

              <div className="souvenir-content">
                {!submitted ? (
                  <form onSubmit={handleDonateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Tier Selector cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-foreground)' }}>CHOOSE SPONSORSHIP TIER:</span>
                      {tiers.map((tier) => (
                        <div 
                          key={tier.id}
                          onClick={() => setSelectedTier(tier.id)}
                          style={{
                            border: `2px solid ${selectedTier === tier.id ? 'var(--accent)' : 'var(--border-color)'}`,
                            backgroundColor: selectedTier === tier.id ? 'rgba(223, 225, 4, 0.05)' : 'var(--bg-secondary)',
                            padding: '16px',
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ fontWeight: 800, fontSize: '0.85rem', color: selectedTier === tier.id ? 'var(--accent)' : 'var(--foreground)' }}>
                              {tier.name}
                            </span>
                            <span style={{ fontWeight: 900, color: 'var(--foreground)' }}>
                              ₹{tier.amount.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <p style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', lineHeight: '1.3' }}>
                            {tier.desc}
                          </p>
                        </div>
                      ))}
                      
                      {/* Custom Option */}
                      <div 
                        onClick={() => setSelectedTier('custom')}
                        style={{
                          border: `2px solid ${selectedTier === 'custom' ? 'var(--accent)' : 'var(--border-color)'}`,
                          backgroundColor: selectedTier === 'custom' ? 'rgba(223, 225, 4, 0.05)' : 'var(--bg-secondary)',
                          padding: '16px',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 800, fontSize: '0.85rem', color: selectedTier === 'custom' ? 'var(--accent)' : 'var(--foreground)' }}>
                            CUSTOM AMOUNT
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>ANY CONTRIBUTION HELPS</span>
                        </div>
                      </div>
                    </div>

                    {selectedTier === 'custom' && (
                      <div className="souvenir-form-group">
                        <input 
                          type="number" 
                          placeholder="INPUT CUSTOM AMOUNT IN INR" 
                          className="souvenir-input" 
                          style={{ height: '60px', fontSize: '1.2rem' }}
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    {/* Donor Details */}
                    <div className="souvenir-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <input 
                        type="text" 
                        placeholder="YOUR FULL NAME" 
                        className="souvenir-input" 
                        style={{ height: '60px', fontSize: '1.1rem' }}
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                      />
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <input 
                          type="email" 
                          placeholder="YOUR EMAIL" 
                          className="souvenir-input" 
                          style={{ height: '60px', fontSize: '1.1rem', flex: 1.5 }}
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          required
                        />
                        <input 
                          type="number" 
                          placeholder="BATCH YEAR" 
                          className="souvenir-input" 
                          style={{ height: '60px', fontSize: '1.1rem', flex: 1 }}
                          value={donorYear}
                          onChange={(e) => setDonorYear(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Payment note */}
                    <div 
                      style={{ 
                        border: '2px solid var(--border-color)', 
                        padding: '16px', 
                        fontSize: '0.75rem', 
                        color: 'var(--muted-foreground)', 
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center' 
                      }}
                    >
                      <ShieldAlert size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>THIS TRANSACTION IS IN SECURE SIMULATOR MODE. FUNDS WILL NOT BE DRAWN. CONFETTI BURST WILL INDICATE SUCCESSFUL SPONSOR ACCOUNTING.</span>
                    </div>

                    <button type="submit" className="cta-btn" style={{ width: '100%', height: '60px' }}>
                      <Sparkles size={16} />
                      <span>SPONSOR {getActiveAmount()} NOW</span>
                    </button>

                  </form>
                ) : (
                  <div 
                    className="animate-fade-in" 
                    style={{ 
                      textAlign: 'center', 
                      padding: '32px 24px', 
                      border: '2px solid var(--accent)', 
                      backgroundColor: 'rgba(223, 225, 4, 0.03)'
                    }}
                  >
                    <CheckCircle size={48} style={{ color: 'var(--accent)', marginBottom: '16px', display: 'inline-block' }} />
                    <h4 style={{ color: 'var(--accent)', marginBottom: '8px', fontSize: '1.4rem' }}>THANK YOU, BENEFACTOR!</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--foreground)', lineHeight: '1.5', fontWeight: 600, textTransform: 'uppercase' }}>
                      {donorName.toUpperCase()} (CLASS OF {donorYear})
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginTop: '8px' }}>
                      YOUR SPONSORSHIP TRANSACTION OF {getActiveAmount()} FOR THE DIAMOND JUBILEE RENOVATION HAS BEEN ACCOUNTED.
                    </p>
                    <div 
                      style={{ 
                        marginTop: '20px', 
                        fontSize: '0.75rem', 
                        border: '2px solid var(--border-color)', 
                        padding: '12px',
                        color: 'var(--muted-foreground)',
                        textTransform: 'uppercase',
                        fontWeight: 700 
                      }}
                    >
                      LEDGER TRANSACTION ID: CETAA-DJ-{Math.floor(Math.random() * 900000 + 100000)}
                    </div>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setDonorName('');
                        setDonorEmail('');
                        setDonorYear('');
                        setCustomAmount('');
                      }}
                      style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--accent)', textDecoration: 'underline', fontWeight: 800 }}
                    >
                      CONTRIBUTE ANOTHER AMOUNT
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
