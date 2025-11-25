import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TreatmentsPageProps {
  onNavigate: (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => void;
}

export function TreatmentsPage({ onNavigate }: TreatmentsPageProps) {
  const treatments = [
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent titanium implants that look, feel, and function like natural teeth.',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$800 - $1,200',
      priceAbroad: '$3,000 - $6,000',
      duration: '3-6 months',
      benefits: [
        'Permanent solution for missing teeth',
        'Prevents bone loss',
        'Natural appearance and function',
        'No damage to adjacent teeth',
        '95% success rate'
      ]
    },
    {
      title: 'Porcelain Veneers',
      description: 'Ultra-thin custom shells designed to cover the front surface of teeth for a perfect smile transformation.',
      image: 'https://images.unsplash.com/photo-1656894592570-7c3af33e1477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwc21pbGUlMjB2ZW5lZXJzfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$300 - $450',
      priceAbroad: '$1,000 - $2,500',
      duration: '2-3 visits',
      benefits: [
        'Stain-resistant material',
        'Natural translucent appearance',
        'Corrects gaps and misalignment',
        'Long-lasting results (10-15 years)',
        'Minimally invasive procedure'
      ]
    },
    {
      title: 'Full Mouth Restoration',
      description: 'Comprehensive dental rehabilitation combining multiple procedures to restore function and aesthetics.',
      image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$8,000 - $15,000',
      priceAbroad: '$30,000 - $60,000',
      duration: '3-12 months',
      benefits: [
        'Complete smile transformation',
        'Restores oral function',
        'Customized treatment plan',
        'Combines implants, crowns, bridges',
        'Improves quality of life'
      ]
    },
    {
      title: 'Smile Makeover',
      description: 'Cosmetic dental procedures combined to create your dream smile with veneers, whitening, and contouring.',
      image: 'https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NjMyNTE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$2,000 - $5,000',
      priceAbroad: '$8,000 - $20,000',
      duration: '2-4 weeks',
      benefits: [
        'Personalized aesthetic treatment',
        'Boosts confidence',
        'Whitening and contouring',
        'Natural-looking results',
        'Quick transformation'
      ]
    },
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic therapy to save infected teeth using modern technology and pain-free techniques.',
      image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$150 - $300',
      priceAbroad: '$1,000 - $2,000',
      duration: '1-2 visits',
      benefits: [
        'Saves natural tooth',
        'Pain-free procedure',
        'Prevents further infection',
        'High success rate',
        'Quick recovery'
      ]
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional-grade whitening treatments for dramatically whiter teeth in just one session.',
      image: 'https://images.unsplash.com/photo-1656894592570-7c3af33e1477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwc21pbGUlMjB2ZW5lZXJzfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      priceIndia: '$150 - $300',
      priceAbroad: '$500 - $1,000',
      duration: '1 visit',
      benefits: [
        'Immediate visible results',
        'Safe and effective',
        'Removes deep stains',
        'Boost confidence instantly',
        'Long-lasting effects'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#007AB6] to-[#00A676] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Dental Treatments in India</h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of dental treatments performed by world-class specialists 
            in state-of-the-art facilities at affordable prices.
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            className="bg-white text-[#007AB6] hover:bg-gray-100 rounded-lg px-8"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>

      {/* Treatments List */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-80">
                    <ImageWithFallback
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-gray-900 mb-4">{treatment.title}</h2>
                  <p className="text-gray-600 mb-6">{treatment.description}</p>

                  {/* Pricing Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Price in India</p>
                      <p className="text-[#00A676]">{treatment.priceIndia}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Price Abroad</p>
                      <p className="text-gray-500 line-through">{treatment.priceAbroad}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-600 text-sm mb-1">Treatment Duration</p>
                      <p className="text-gray-900">{treatment.duration}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <p className="text-gray-900 mb-3">Key Benefits:</p>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={20} className="text-[#00A676] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => onNavigate('quote')}
                    className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg group"
                  >
                    Request Quote for This Treatment
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#007AB6]/10 to-[#00A676]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-gray-600 mb-8">
            Get a personalized treatment plan and free quote from our dental experts.
          </p>
          <Button 
            onClick={() => onNavigate('quote')}
            size="lg"
            className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg px-8"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}