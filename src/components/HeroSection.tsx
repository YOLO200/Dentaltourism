import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NjMyNTE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Smiling patient in modern dental clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6">
            World-class Dental Care in India – Smile Confidently, Travel Comfortably
          </h1>
          <p className="text-white/95 mb-8 max-w-2xl">
            High-quality implants, veneers and full-mouth restorations in top Indian clinics 
            at a fraction of your home country cost
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => onNavigate('quote')}
              className="bg-[#007AB6] hover:bg-[#005A8A] text-white px-8 py-6 rounded-lg"
              size="lg"
            >
              Request Free Quote
            </Button>
            <Button 
              onClick={() => onNavigate('treatments')}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#007AB6] px-8 py-6 rounded-lg"
              size="lg"
            >
              Browse Treatments
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}