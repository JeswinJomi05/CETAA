import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function EventsHub() {
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'

  const events = [
    {
      id: 1,
      title: 'CETAA AGM-2024 (Annual General Body Meeting)',
      date: 'May 25, 2024',
      month: 'MAY',
      day: '25',
      time: '3:00 PM IST',
      location: 'CETAA Hall, CET Campus',
      description: 'The Annual General Body Meeting of the Alumni Association, reviewing activities of the past year and mapping out key strategies for campus development.',
      type: 'past'
    },
    {
      id: 2,
      title: 'CETAA Day 2023 - Celebration & Reunion',
      date: 'July 22, 2023',
      month: 'JUL',
      day: '22',
      time: '10:00 AM IST',
      location: 'Diamond Jubilee Hall, College of Engineering Trivandrum',
      description: 'Celebrating the legacy of the College of Engineering, featuring alumni achievements, cultural events, and reunion programs for various silver and golden jubilee batches.',
      type: 'past'
    },
    {
      id: 3,
      title: 'CETAA Day 2026 & Golden Jubilee Souvenir Launch',
      date: 'July 25, 2026',
      month: 'JUL',
      day: '25',
      time: '9:30 AM IST',
      location: 'Diamond Jubilee Hall & CET Indoor Stadium',
      description: 'Our mega alumni meetup! The event features the launch of the CETAA Souvenir 2026, honoring the 1976 Batch, interactive panels, campus tours, and cultural programmes.',
      type: 'upcoming'
    },
    {
      id: 4,
      title: 'Global Chapters Synergy Summit 2026',
      date: 'September 12, 2026',
      month: 'SEP',
      day: '12',
      time: '6:00 PM IST',
      location: 'Online (Virtual Zoom Event)',
      description: 'A global synergy discussion involving Chapter Presidents and Secretaries from Singapore, Middle East, USA, Europe, and India to standardise alumni mentorship initiatives.',
      type: 'upcoming'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    return event.type === filter;
  });

  return (
    <section id="events" className="container animate-fade-in-up" style={{ marginBottom: '48px' }}>
      <div className="section-header">
        <div>
          <span className="welcome-tag">Calendar</span>
          <h2 className="section-title">Events Hub</h2>
        </div>
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`filter-tab ${filter === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={`filter-tab ${filter === 'past' ? 'active' : ''}`}
            onClick={() => setFilter('past')}
          >
            Past
          </button>
        </div>
      </div>

      <div className="events-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            {/* Date Badge */}
            <div className="event-date-badge">
              <span className="event-month">{event.month}</span>
              <span className="event-day">{event.day}</span>
              <span className="event-status" style={{ 
                backgroundColor: event.type === 'upcoming' ? 'var(--accent)' : 'var(--muted)',
                color: event.type === 'upcoming' ? 'var(--accent-foreground)' : 'var(--foreground)'
              }}>
                {event.type}
              </span>
            </div>

            {/* Info Section */}
            <div className="event-info">
              <h3>{event.title}</h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '16px' }}>
                {event.description}
              </p>
              
              <div className="event-meta">
                <div className="event-meta-item">
                  <Calendar size={14} style={{ color: 'var(--accent)' }} />
                  <span>{event.date}</span>
                </div>
                <div className="event-meta-item">
                  <Clock size={14} style={{ color: 'var(--accent)' }} />
                  <span>{event.time}</span>
                </div>
                <div className="event-meta-item">
                  <MapPin size={14} style={{ color: 'var(--accent)' }} />
                  <span>{event.location}</span>
                </div>
              </div>

              {event.type === 'upcoming' && (
                <div style={{ marginTop: '20px' }}>
                  <button 
                    onClick={() => alert(`RSVP registration for "${event.title}" is successful! We look forward to seeing you.`)}
                    className="cta-btn" 
                    style={{ 
                      padding: '12px 24px', 
                      fontSize: '0.85rem'
                    }}
                  >
                    <span>RSVP NOW</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No events found for this filter.
          </div>
        )}
      </div>
    </section>
  );
}
