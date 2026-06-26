import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Messages from './components/Messages';
import EventsHub from './components/EventsHub';
import Newsroom from './components/Newsroom';
import AlumniNetwork from './components/AlumniNetwork';
import RenovationPage from './components/RenovationPage';
import RegisterModal from './components/RegisterModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Sync hash links on initialization
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#renovation') {
      setCurrentPage('renovation');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    // Optionally update window hash
    if (page === 'renovation') {
      window.location.hash = 'renovation';
    } else {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Bar with page switching support */}
      <Header 
        onRegisterClick={handleRegisterOpen} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main content grid */}
      <main style={{ flex: '1 0 auto' }}>
        {currentPage === 'home' ? (
          <>
            {/* Banner and slider */}
            <HeroCarousel onRegisterClick={handleRegisterOpen} onNavigate={handleNavigate} />

            {/* History legacy and Message boards */}
            <Messages />

            {/* Calendar and Events list */}
            <EventsHub />

            {/* Newsroom updates and Souvenir contribution progress */}
            <Newsroom />

            {/* Networks list (Alumni profiles, chapters, and social stream) */}
            <AlumniNetwork />
          </>
        ) : (
          /* Diamond Jubilee Hall Renovation Page view */
          <RenovationPage onBackToHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* Profile register overlay modal */}
      <RegisterModal isOpen={isRegisterOpen} onClose={handleRegisterClose} />

      {/* Footer component */}
      <Footer />
    </div>
  );
}
