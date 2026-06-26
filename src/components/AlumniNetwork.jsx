import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Award, Globe, Users } from 'lucide-react';

export default function AlumniNetwork() {
  const [likesCount, setLikesCount] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    { author: 'Santhosh Kumar', text: 'Proud to see the 1976 Batch leading by example!' },
    { author: 'Meera Nair', text: 'CET Indoor Stadium will look incredible!' }
  ]);
  const [newComment, setNewComment] = useState('');

  const distinguishedAlumni = [
    { name: 'G. Madhavan Nair', batch: 'ECE 1966', role: 'Former Chairman, ISRO', desc: 'Led ISRO during the landmark Chandrayaan-1 mission.' },
    { name: 'Dr. M. S. Valiathan', batch: 'Mech 1954', role: 'Renowned Cardiac Surgeon', desc: 'Pioneer of medical devices, Padma Vibhushan awardee.' },
    { name: 'Kris Gopalakrishnan', batch: 'Affiliate', role: 'Co-founder, Infosys', desc: 'Prominent entrepreneur, tech leader, and philanthropist.' },
    { name: 'Er. Kamala Pradhan', batch: 'Civil 1972', role: 'Infrastructure Pioneer', desc: 'Designed major highways and bridges in North-East India.' },
    { name: 'Dr. Suresh Das', batch: 'Chem 1979', role: 'Materials Scientist', desc: 'Executive VP of Kerala State Council for Science & Tech.' },
    { name: 'Er. S. Somanath', batch: 'Mech 1985', role: 'Chairman, ISRO', desc: 'Successfully guided the Chandrayaan-3 and Aditya-L1 missions.' }
  ];

  const chapters = [
    { name: 'Trivandrum (HQ)', flag: '🇮🇳', lead: 'Er. S. Gopakumar', email: 'tvm@cetaa.org' },
    { name: 'Bangalore Chapter', flag: '🇮🇳', lead: 'Ms. Ranjini Priya', email: 'blr@cetaa.org' },
    { name: 'Chennai Chapter', flag: '🇮🇳', lead: 'Mr. Arvind Krishnan', email: 'chn@cetaa.org' },
    { name: 'Middle East (UAE)', flag: '🇦🇪', lead: 'Er. Shaji Mon', email: 'uae@cetaa.org' },
    { name: 'North America (USA)', flag: '🇺🇸', lead: 'Dr. John Mathew', email: 'usa@cetaa.org' },
    { name: 'Singapore Chapter', flag: '🇸🇬', lead: 'Er. Wendy Tan', email: 'sg@cetaa.org' }
  ];

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => [...prev, { author: 'You (Alumni)', text: newComment }]);
    setNewComment('');
  };

  return (
    <section id="chapters" className="container animate-fade-in-up" style={{ marginBottom: '48px' }}>
      <div className="network-grid">
        {/* Distinguished Alumni Grid */}
        <div className="network-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Award style={{ color: 'var(--accent)' }} size={24} />
            <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>DISTINGUISHED ALUMNI</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '16px' }}>
            PIONEERS, INNOVATORS, AND LEADERS WHO HAVE MADE SIGNIFICANT GLOBAL IMPACTS IN ENGINEERING, TECHNOLOGY, AND SOCIETY.
          </p>
          <div className="alumni-grid">
            {distinguishedAlumni.map((alum, idx) => (
              <div key={idx} className="alumni-item">
                <img src="/distinguished_alumni.png" alt={alum.name} />
                <div className="alumni-hover-overlay">
                  <h4>{alum.name}</h4>
                  <p style={{ fontWeight: 700, color: 'var(--accent-foreground)' }}>{alum.batch}</p>
                  <p style={{ fontSize: '0.7rem', margin: '4px 0' }}><strong>{alum.role}</strong></p>
                  <p style={{ fontSize: '0.6rem', opacity: 0.85 }}>{alum.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CETAA Chapters List */}
        <div className="network-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Globe style={{ color: 'var(--accent)' }} size={24} />
            <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>GLOBAL CHAPTERS</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '16px' }}>
            CONNECT WITH LOCAL ALUMNI CHAPTERS IN YOUR CITY FOR PROFESSIONAL NETWORKING, GUIDANCE, AND SOCIAL GET-TOGETHERS.
          </p>
          <div className="chapters-container">
            {chapters.map((ch, idx) => (
              <div key={idx} className="chapter-item">
                <div className="chapter-info">
                  <span className="chapter-flag">{ch.flag}</span>
                  <div>
                    <div className="chapter-name">{ch.name}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>LEAD: {ch.lead}</div>
                  </div>
                </div>
                <a href={`mailto:${ch.email}`} className="chapter-email">
                  {ch.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Feed (Mock Facebook Stream) */}
        <div className="network-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Users style={{ color: 'var(--accent)' }} size={24} />
            <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>SOCIAL FEED</h3>
          </div>
          
          <div className="social-feed">
            <div className="social-profile-header">
              <div className="social-avatar">CT</div>
              <div className="social-profile-info">
                <h4>CET Alumni Association</h4>
                <p>2.1K FOLLOWERS • 2 HOURS AGO</p>
              </div>
            </div>

            <div className="social-post-content">
              <div>
                <p style={{ fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', color: 'var(--accent)', fontSize: '0.9rem' }}>
                  🎉 GRATITUDE TO THE 1976 BATCH!
                </p>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                  THEIR GENEROUS CONTRIBUTION OF ₹16 LAKHS IS KICKSTARTING THE REFURBISHING OF THE CET INDOOR STADIUM. THIS MILESTONE PROJECT STARTS NEXT WEEK! STAY TUNED FOR VIDEO UPDATES. #CETAA #LEGACY #GOLDENJUBILEE
                </p>
              </div>
              
              <div style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--muted-foreground)', display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase', fontWeight: 700 }}>
                <span>👍 {likesCount} LIKES</span>
                <span>💬 {comments.length} COMMENTS</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="social-actions" style={{ marginBottom: '12px' }}>
              <button 
                className={`social-action-btn ${hasLiked ? 'active' : ''}`}
                onClick={handleLike}
                style={{ color: hasLiked ? 'var(--accent)' : 'var(--muted-foreground)' }}
              >
                <ThumbsUp size={16} />
                <span>{hasLiked ? 'LIKED' : 'LIKE'}</span>
              </button>
              <button className="social-action-btn" onClick={() => document.getElementById('social-input').focus()}>
                <MessageSquare size={16} />
                <span>COMMENT</span>
              </button>
              <button className="social-action-btn" onClick={() => alert('POST LINK COPIED TO CLIPBOARD!')}>
                <Share2 size={16} />
                <span>SHARE</span>
              </button>
            </div>

            {/* Comments List */}
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '100px' }}>
              {comments.map((c, idx) => (
                <div key={idx} style={{ fontSize: '0.8rem', backgroundColor: 'var(--bg-secondary)', padding: '8px 12px', border: '1px solid var(--border-color)' }}>
                  <strong>{c.author.toUpperCase()}: </strong>
                  <span style={{ color: 'var(--muted-foreground)' }}>{c.text.toUpperCase()}</span>
                </div>
              ))}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', gap: '6px' }}>
              <input 
                id="social-input"
                type="text" 
                placeholder="WRITE A COMMENT..." 
                className="souvenir-input" 
                style={{ padding: '6px 12px', fontSize: '0.85rem', height: '40px' }}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" className="cta-btn" style={{ padding: '6px 12px', fontSize: '0.8rem', height: '40px' }}>
                POST
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Slower Moving Testimonial CSS Marquee */}
      <div className="marquee-wrap" style={{ marginTop: '24px', backgroundColor: 'var(--bg-secondary)', color: 'var(--foreground)' }}>
        <div className="marquee-content speed-slow">
          <div className="marquee-item">
            <span>"CET TAUGHT ME TO DREAM BIG. THE TIME SPENT IN TRIVANDRUM SHAPED MY ENTIRE CAREER." — DISENGUISHED ALUMNI</span>
            <span className="marquee-divider">///</span>
            <span>"RECONNECTING WITH BATCHMATES AFTER 25 YEARS WAS AN INCREDIBLE EMOTIONAL JOURNEY." — REUNION GRADUATE</span>
            <span className="marquee-divider">///</span>
            <span>"THE GLOBAL CETAA CHAPTERS ENABLE US TO FEEL AT HOME WHEREVER WE ARE IN THE WORLD." — CHAPTER LEAD</span>
          </div>
          <div className="marquee-item">
            <span>"CET TAUGHT ME TO DREAM BIG. THE TIME SPENT IN TRIVANDRUM SHAPED MY ENTIRE CAREER." — DISENGUISHED ALUMNI</span>
            <span className="marquee-divider">///</span>
            <span>"RECONNECTING WITH BATCHMATES AFTER 25 YEARS WAS AN INCREDIBLE EMOTIONAL JOURNEY." — REUNION GRADUATE</span>
            <span className="marquee-divider">///</span>
            <span>"THE GLOBAL CETAA CHAPTERS ENABLE US TO FEEL AT HOME WHEREVER WE ARE IN THE WORLD." — CHAPTER LEAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
