import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TreatmentsSection() {
  const navigate = useNavigate();
  const treatments = [
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement with titanium implants. Restore your smile with natural-looking results.',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 70%'
    },
    {
      title: 'Porcelain Veneers',
      description: 'Transform your smile with custom porcelain veneers. Achieve a Hollywood smile at affordable prices.',
      image: 'https://images.unsplash.com/photo-1656894592570-7c3af33e1477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwc21pbGUlMjB2ZW5lZXJzfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 65%'
    },
    {
      title: 'Full Mouth Restoration',
      description: 'Complete dental rehabilitation combining implants, crowns, and bridges for a complete smile makeover.',
      image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 75%'
    },
    {
      title: 'Smile Makeover',
      description: 'Comprehensive cosmetic dentistry combining veneers, whitening, and contouring for your dream smile.',
      image: 'https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NjMyNTE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 60%'
    },
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic treatment with modern technology. Pain-free procedures with experienced specialists.',
      image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 55%'
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments for a brighter, more confident smile in just one session.',
      image: 'https://images.unsplash.com/photo-1656894592570-7c3af33e1477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwc21pbGUlMjB2ZW5lZXJzfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      savings: 'Save up to 50%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Our Dental Treatments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of dental treatments performed by highly qualified specialists 
            in state-of-the-art facilities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,122,182,0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#00A676] text-white px-3 py-1 rounded-full">
                  {treatment.savings}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <button 
                  onClick={() => navigate('/treatments')}
                  className="text-[#007AB6] hover:text-[#005A8A] flex items-center gap-2 group/link transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => onNavigate('treatments')}
            variant="outline"
            className="border-[#007AB6] text-[#007AB6] hover:bg-[#007AB6] hover:text-white rounded-lg px-8"
          >
            View All Treatments
          </Button>
        </div>
      </div>
    </section>
  );
}