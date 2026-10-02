import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TreatmentsPage } from './components/TreatmentsPage';
import { DestinationsPage } from './components/DestinationsPage';
import { ClinicsPage } from './components/ClinicsPage';
import { QuoteFormPage } from './components/QuoteFormPage';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/quote" element={<QuoteFormPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}