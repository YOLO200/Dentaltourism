import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TreatmentsPage } from './components/TreatmentsPage';
import { DestinationsPage } from './components/DestinationsPage';
import { ClinicsPage } from './components/ClinicsPage';
import { QuoteFormPage } from './components/QuoteFormPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'treatments' | 'destinations' | 'clinics' | 'quote'>('home');

  const handleNavigate = (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'treatments' && <TreatmentsPage onNavigate={handleNavigate} />}
      {currentPage === 'destinations' && <DestinationsPage onNavigate={handleNavigate} />}
      {currentPage === 'clinics' && <ClinicsPage onNavigate={handleNavigate} />}
      {currentPage === 'quote' && <QuoteFormPage />}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}