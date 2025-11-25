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

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'treatments' && <TreatmentsPage onNavigate={setCurrentPage} />}
      {currentPage === 'destinations' && <DestinationsPage onNavigate={setCurrentPage} />}
      {currentPage === 'clinics' && <ClinicsPage onNavigate={setCurrentPage} />}
      {currentPage === 'quote' && <QuoteFormPage />}
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}