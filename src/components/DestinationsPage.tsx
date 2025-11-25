import { MapPin, Hospital, Users, Star, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DestinationsPageProps {
  onNavigate: (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => void;
}

export function DestinationsPage({ onNavigate }: DestinationsPageProps) {
  const destinations = [
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      image: 'https://images.unsplash.com/photo-1662408976803-d94e2e0cb57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBza3lsaW5lJTIwY2l0eXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'India\'s financial capital and home to some of the country\'s most prestigious dental clinics. Experience world-class healthcare alongside vibrant city culture, Bollywood, and stunning coastal views.',
      clinics: 25,
      rating: 4.9,
      highlights: [
        'International airport with global connectivity',
        '25+ JCI-accredited dental clinics',
        'English-speaking medical staff',
        'Gateway to India and Marine Drive',
        '5-star hotels near medical facilities'
      ],
      attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Bollywood Studios']
    },
    {
      city: 'New Delhi',
      state: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1705077171489-b5dfcf144676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBEZWxoaSUyMEluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'The capital city offers unparalleled healthcare infrastructure with government-accredited hospitals and private dental centers. Explore rich history and heritage between your appointments.',
      clinics: 30,
      rating: 4.8,
      highlights: [
        'Major international airport hub',
        '30+ ISO-certified dental centers',
        'Top dental universities and specialists',
        'Historic monuments and UNESCO sites',
        'Wide range of accommodation options'
      ],
      attractions: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple']
    },
    {
      city: 'Hyderabad',
      state: 'Telangana',
      image: 'https://images.unsplash.com/photo-1734183929831-0bbc0267ac8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIeWRlcmFiYWQlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYzMjgyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A technology and healthcare hub with ultramodern medical facilities. Hyderabad combines cutting-edge dental care with affordable costs and rich cultural heritage.',
      clinics: 20,
      rating: 4.7,
      highlights: [
        'International airport with direct flights',
        '20+ advanced dental facilities',
        'Lower cost of living',
        'Known for medical tourism excellence',
        'Blend of tradition and modernity'
      ],
      attractions: ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Hussain Sagar Lake']
    },
    {
      city: 'Goa',
      state: 'Goa',
      image: 'https://images.unsplash.com/photo-1625505826977-66d796089d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMHBhbG18ZW58MXx8fHwxNzYzMjgyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect blend of dental care and beach vacation. Recover in paradise with pristine beaches, Portuguese heritage, and a relaxed atmosphere that promotes healing.',
      clinics: 15,
      rating: 4.8,
      highlights: [
        'International airport access',
        '15+ quality dental clinics',
        'Beach resorts and recovery retreats',
        'Relaxing healing environment',
        'Tourist-friendly infrastructure'
      ],
      attractions: ['Beaches', 'Portuguese Churches', 'Spice Plantations', 'Water Sports']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1662408976803-d94e2e0cb57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBza3lsaW5lJTIwY2l0eXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-white mb-4">Destinations & Clinics</h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Choose from India's premier cities, each offering world-class dental care and unique experiences.
          </p>
        </div>
      </div>

      {/* Destinations */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {destinations.map((destination, index) => (
              <div key={index} className="relative">
                {/* City Header */}
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="text-[#007AB6]" size={28} />
                      <h2 className="text-gray-900">{destination.city}</h2>
                    </div>
                    <p className="text-gray-600">{destination.state}, India</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="text-[#00A676] fill-[#00A676]" size={20} />
                        <span className="text-gray-900">{destination.rating}</span>
                      </div>
                      <p className="text-gray-600 text-sm">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-900 mb-1">{destination.clinics}+</p>
                      <p className="text-gray-600 text-sm">Clinics</p>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12`}>
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-96 sticky top-24">
                      <ImageWithFallback
                        src={destination.image}
                        alt={destination.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="w-full lg:w-3/5">
                    <p className="text-gray-600 mb-6">{destination.description}</p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h3 className="text-gray-900 mb-4">Why Choose {destination.city}?</h3>
                      <ul className="space-y-3">
                        {destination.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#00A676]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Hospital size={14} className="text-[#00A676]" />
                            </div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Attractions */}
                    <div className="mb-8">
                      <h3 className="text-gray-900 mb-4">Tourist Attractions</h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.attractions.map((attraction, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 bg-gradient-to-r from-[#007AB6]/10 to-[#00A676]/10 text-gray-700 rounded-full"
                          >
                            {attraction}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      onClick={() => onNavigate('quote')}
                      className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg"
                    >
                      Plan Your Visit to {destination.city}
                    </Button>
                  </div>
                </div>

                {/* Divider */}
                {index < destinations.length - 1 && (
                  <div className="mt-20 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Clinics Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Partner Clinics & Hospitals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with ISO-certified, JCI-accredited dental clinics that meet international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Elite Dental Care Mumbai', specialties: 'Implants, Veneers, Full Mouth', image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Smile Experts New Delhi', specialties: 'Cosmetic Dentistry, Orthodontics', image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Coastal Dental Goa', specialties: 'General Dentistry, Aesthetic', image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((clinic, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,122,182,0.15)] transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{clinic.name}</h3>
                  <p className="text-gray-600 mb-4">{clinic.specialties}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-[#00A676] fill-[#00A676]" size={16} />
                    <span className="text-gray-700">4.9 (500+ reviews)</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-[#007AB6]/10 text-[#007AB6] rounded">ISO</span>
                    <span className="px-2 py-1 bg-[#007AB6]/10 text-[#007AB6] rounded">JCI</span>
                    <span className="px-2 py-1 bg-[#00A676]/10 text-[#00A676] rounded">English</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#007AB6] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Plane className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-white mb-4">Ready to Plan Your Dental Journey?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get a customized treatment plan, clinic recommendations, and travel itinerary tailored to your needs.
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            size="lg"
            className="bg-white text-[#007AB6] hover:bg-gray-100 rounded-lg px-8"
          >
            Request Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}