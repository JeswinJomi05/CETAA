import React, { useState } from 'react';
import { ArrowRight, BookOpen, User } from 'lucide-react';

export default function Messages() {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null); // 'president' or 'secretary' or null

  const historyTextShort = `The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd July 1939 during the reign of the Travancore King, Sri Chithira Thirunal Balarama Varma and as the head of the then Travancore state he deserves his share of credit in the establishment of the college. Initially the College was housed in the former office and bungalow of the Chief Engineer (present PMG Office)...`;
  
  const historyTextFull = `The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd July 1939 during the reign of the Travancore King, Sri Chithira Thirunal Balarama Varma and as the head of the then Travancore state he deserves his share of credit in the establishment of the college. Initially the College was housed in the former office and bungalow of the Chief Engineer (present PMG Office).

Over the last eight decades, CET has grown into a premier institution of national and global repute. The alumni association (CETAA) was formed to maintain a lifelong connection between the institute and its graduates, promoting professional development, mentorship programs, infrastructure enhancements, and community engagement. Today, CET alumni occupy leading roles in research institutions, global corporations, government organizations, and academia around the world.`;

  const messagesData = {
    president: {
      title: "President's Message",
      author: "Dr. SURESH K (President, CETAA)",
      text: "College of Engineering Trivandrum, established in the year 1939 has completed 81 glorious years. The institution has been imparting quality engineering education to students over these years resulting in more than 48,000 alumni shining in various professions across the globe. Our alumni include eminent engineers, great scientists, renowned academicians, top bureaucrats, industrialists, and entrepreneurs.College of Engineering Trivandrum had a humble beginning with three Engineering branches: namely Civil, Mechanical and Electrical Engineering with 18 students in each branch.Over these years, CET has been elevated to one of the top Engineering institutions of India. Currently CET offers 7 B. Tech programs, 27 different M. Tech specialisations, B. Arch, M. Arch, MCA, MBA and doctoral programs comprising of 4500 students, 300 faculty members and 250 nonteaching staff.",
      role: "Class of 1994 EC"
    },
    secretary: {
      title: "Secretary's Message",
      author: "Dr. DEEPA RANI R (Secretary, CETAA)",
      text: "Every student is unique and has chosen a different career path for themselves, but not everyone receives the proper guidance to fulfil their dreams. As a result, we must equip our students both financially and academically so that they can be the change the world requires today. No one is more qualified to guide them than our alumni, who have overcome many obstacles to reach the highest positions in a variety of fields today. Hence, the College of Engineering Trivandrum Alumni Association (CETAA) is working round the clock to harness the true potential of our alumni around the world to brighten the lives of aspiring CETians.",
      role: "Class of 2000 AR"
    }
  };

  return (
    <section id="about" className="container animate-fade-in-up" style={{ marginBottom: '48px' }}>
      {/* Welcome Section - Full Width */}
      <div className="welcome-box-full">
        <div>
          <span className="welcome-tag">Our Legacy</span>
          <h2>Welcome to CET Alumni Association</h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            {showFullHistory ? historyTextFull : historyTextShort}
          </p>
        </div>
        <div>
          <button 
            className="read-more-link" 
            onClick={() => setShowFullHistory(!showFullHistory)}
          >
            <span>{showFullHistory ? 'Show Less' : 'Read Full History'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Message Cards Row (Split 50/50) */}
      <div className="messages-grid-row">
        {/* President Card */}
        <div className="message-card">
          <div className="message-card-image">
            <img src="/pre.png" alt="President Message Cover" />
          </div>
          <div className="message-card-content">
            <h3>President's Message</h3>
            <p>The College of Engineering Trivandrum, established in the year 1939 has completed 81 glorious years. The institution has been imparting ...</p>
            <button 
              className="message-link" 
              onClick={() => setActiveMessage('president')}
            >
              <span>Read Full Message</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <span className="bg-num-overlay">01</span>
        </div>

        {/* Secretary Card */}
        <div className="message-card">
          <div className="message-card-image">
            <img src="/sec.png" alt="Secretary Message Cover" />
          </div>
          <div className="message-card-content">
            <h3>Secretary's Message</h3>
            <p>Greetings to my fellow CETians! Our alumni network is our greatest asset. Through this new portal, we are establishing closer communication links across chapters worldwide...</p>
            <button 
              className="message-link" 
              onClick={() => setActiveMessage('secretary')}
            >
              <span>Read Full Message</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <span className="bg-num-overlay">02</span>
        </div>
      </div>

      {/* Message Modal/Drawer Overlay */}
      {activeMessage && (
        <div className="modal-overlay" onClick={() => setActiveMessage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3>{messagesData[activeMessage].title}</h3>
              <button className="modal-close-btn" onClick={() => setActiveMessage(null)}>
                <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '12px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <User size={32} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{messagesData[activeMessage].author}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 600 }}>{messagesData[activeMessage].role}</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {messagesData[activeMessage].text}
              </p>
              <button 
                className="submit-btn" 
                onClick={() => setActiveMessage(null)}
                style={{ marginTop: '24px' }}
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
