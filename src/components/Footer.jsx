import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer animate-fade-in">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <h4>About CETAA</h4>
            <p style={{ marginBottom: '16px' }}>
              The College of Engineering Trivandrum Alumni Association (CETAA) works to foster lifelong connections, collaborate on student developments, and support our alma mater in becoming a world-class academic institution.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-icon flex-center" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="footer-social-icon flex-center" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="footer-social-icon flex-center" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="footer-social-icon flex-center" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">Legacy & History</a></li>
              <li><a href="#chapters">Global Chapters</a></li>
              <li><a href="#news">Newsroom</a></li>
              <li><a href="#events">Upcoming Events</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="footer-col">
            <h4>Alumni Resources</h4>
            <ul className="footer-links">
              <li><a href="#register" onClick={(e) => { e.preventDefault(); alert('Please click "Register" on the top bar or Hero banner to create your profile.'); }}>Join Directory</a></li>
              <li><a href="#jobs">Job Opportunities</a></li>
              <li><a href="#mentorship">Mentorship Program</a></li>
              <li><a href="#souvenir">Souvenir 2026</a></li>
              <li><a href="#newsletter">Monthly Newsletters</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>CETAA OFFICE, COLLEGE OF ENGINEERING, TRIVANDRUM, THIRUVANANTHAPURAM, KERALA - 695016</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} style={{ color: 'var(--accent)' }} />
              <span>+91 62380 71274</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} style={{ color: 'var(--accent)' }} />
              <span>CETAAHQ@GMAIL.COM / INFO@CETAA.ORG</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} COLLEGE OF ENGINEERING TRIVANDRUM ALUMNI ASSOCIATION (CETAA). ALL RIGHTS RESERVED.</p>
          <p style={{ marginTop: '6px', fontSize: '0.75rem', opacity: 0.5 }}>ESTABLISHED 1939 | POWERED BY CETAA IT CELL</p>
        </div>
      </div>
    </footer>
  );
}
