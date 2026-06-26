import React, { useState } from 'react';
import { X, CheckCircle, GraduationCap, Building2, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegisterModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('Civil Engineering');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !year || !city) {
      alert('Please fill out all fields.');
      return;
    }

    setSubmitted(true);
    // Confetti effect!
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Alumni Portal Registration</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="reg-name">Full Name</label>
                <input 
                  id="reg-name"
                  type="text" 
                  className="form-input" 
                  placeholder="Er. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-email">Email Address</label>
                <input 
                  id="reg-email"
                  type="email" 
                  className="form-input" 
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reg-year">Graduation Year</label>
                  <input 
                    id="reg-year"
                    type="number" 
                    className="form-input" 
                    placeholder="2020"
                    min="1939"
                    max="2026"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-branch">Branch</label>
                  <select 
                    id="reg-branch"
                    className="form-input"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Electronics & Communication">Electronics & Comm.</option>
                    <option value="Computer Science & Eng.">Computer Science & Eng.</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                    <option value="Architecture">Architecture</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reg-city">Current City of Residence</label>
                <input 
                  id="reg-city"
                  type="text" 
                  className="form-input" 
                  placeholder="Singapore / Bangalore / Trivandrum"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required 
                />
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '20px', textAlign: 'left' }}>
                By registering, you agree to connect with our official chapters and receive institutional news updates.
              </p>

              <button type="submit" className="submit-btn">
                Create Alumni Profile
              </button>
            </form>
          ) : (
            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '16px 0' }}>
              <CheckCircle size={56} style={{ color: 'var(--accent)', marginBottom: '16px', display: 'inline-block' }} />
              <h4 style={{ color: 'var(--foreground)', fontSize: '1.4rem', marginBottom: '8px', textTransform: 'uppercase' }}>REGISTRATION SUCCESSFUL!</h4>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '24px' }}>
                WELCOME TO THE GLOBAL CETAA COMMUNITY, {name.toUpperCase()}. YOUR PROFILE HAS BEEN VERIFIED.
              </p>
              
              <div 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  padding: '24px', 
                  border: '2px solid var(--border-color)',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GraduationCap size={16} style={{ color: 'var(--accent)' }} />
                  <span><strong>BATCH:</strong> CLASS OF {year} — {branch.toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={16} style={{ color: 'var(--accent)' }} />
                  <span><strong>STATUS:</strong> VERIFIED CETAA MEMBER</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} style={{ color: 'var(--accent)' }} />
                  <span><strong>ASSIGNED CHAPTER:</strong> {city.toUpperCase()} CHAPTER</span>
                </div>
              </div>

              <button 
                className="submit-btn" 
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setYear('');
                  setCity('');
                  onClose();
                }}
                style={{ marginTop: '24px' }}
              >
                ENTER PORTAL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
