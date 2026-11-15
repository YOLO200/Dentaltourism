import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

// Secondary pages load on demand so the home page downloads less JavaScript
const TreatmentsPage = lazy(() => import('./components/TreatmentsPage').then((m) => ({ default: m.TreatmentsPage })));
const DestinationsPage = lazy(() => import('./components/DestinationsPage').then((m) => ({ default: m.DestinationsPage })));
const ClinicsPage = lazy(() => import('./components/ClinicsPage').then((m) => ({ default: m.ClinicsPage })));
const QuoteFormPage = lazy(() => import('./components/QuoteFormPage').then((m) => ({ default: m.QuoteFormPage })));

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

      <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/quote" element={<QuoteFormPage />} />
      </Routes>
      </Suspense>

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