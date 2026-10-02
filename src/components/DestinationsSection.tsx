import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function DestinationsSection() {
  const navigate = useNavigate();
  const destinations = [
    {
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1662408976803-d94e2e0cb57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBza3lsaW5lJTIwY2l0eXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlight: 'India\'s financial capital with world-class dental clinics and vibrant culture'
    },
    {
      city: 'New Delhi',
      image: 'https://images.unsplash.com/photo-1705077171489-b5dfcf144676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBEZWxoaSUyMEluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlight: 'Capital city with historic landmarks and top-tier medical facilities'
    },
    {
      city: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1734183929831-0bbc0267ac8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIeWRlcmFiYWQlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYzMjgyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlight: 'Tech hub with modern healthcare infrastructure and rich heritage'
    },
    {
      city: 'Goa',
      image: 'https://images.unsplash.com/photo-1625505826977-66d796089d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMHBhbG18ZW58MXx8fHwxNzYzMjgyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlight: 'Beach paradise - combine dental treatment with a relaxing vacation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Popular Destinations in India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from India's premier cities, each offering exceptional dental care and unique cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              onClick={() => navigate('/destinations')}
              className="group relative h-80 rounded-lg overflow-hidden cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,122,182,0.15)] transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={20} />
                  <h3 className="text-white">{destination.city}</h3>
                </div>
                <p className="text-white/90 text-sm">{destination.highlight}</p>
              </div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => onNavigate('destinations')}
            variant="outline"
            className="border-[#007AB6] text-[#007AB6] hover:bg-[#007AB6] hover:text-white rounded-lg px-8"
          >
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}