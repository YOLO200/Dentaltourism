import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', page: 'treatments' as const },
    { label: 'Destinations', page: 'destinations' as const },
    { label: 'Clinics', page: 'clinics' as const },
    { label: 'How It Works', page: 'home' as const, scrollTo: 'how-it-works' },
    { label: 'Testimonials', page: 'home' as const, scrollTo: 'testimonials' },
    { label: 'Contact', page: 'home' as const, scrollTo: 'footer' },
  ];

  const handleNavClick = (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote', scrollTo?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={logo} alt="City Dental Medical Tourism" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="text-[#007AB6]">City Dental</div>
              <div className="text-xs text-gray-600">Medical Tourism</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page, link.scrollTo)}
                className={`text-gray-700 hover:text-[#007AB6] transition-colors ${
                  currentPage === link.page ? 'text-[#007AB6]' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('quote')}
              className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg px-6"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page, link.scrollTo)}
                  className={`text-left text-gray-700 hover:text-[#007AB6] transition-colors ${
                    currentPage === link.page ? 'text-[#007AB6]' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('quote')}
                className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg w-full"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}