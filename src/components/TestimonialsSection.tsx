import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1615462696310-09736533dbb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweXxlbnwxfHx8fDE3NjMyMjEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Dental Implants',
      quote: 'I was amazed by the quality of care I received in Mumbai. The clinic was modern, the staff professional, and I saved over £6,000 compared to UK prices. Plus, I got to explore incredible India!',
      rating: 5
    },
    {
      name: 'John Peterson',
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NjMyNTE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Full Mouth Restoration',
      quote: 'After years of dental problems, I finally got the treatment I needed in New Delhi. The doctors were internationally trained and the facilities exceeded my expectations. Best decision ever!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1615462696310-09736533dbb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjBoYXBweXxlbnwxfHx8fDE3NjMyMjEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Porcelain Veneers',
      quote: 'I combined my veneers treatment in Goa with a beach vacation. The dental work was flawless, the team was caring, and the experience was unforgettable. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1684607632845-723f8f427110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBwYXRpZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NjMyNTE0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      treatment: 'Smile Makeover',
      quote: 'The attention to detail and personalized care in Hyderabad was outstanding. I saved thousands and got a Hollywood smile. The coordinators made everything so easy!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from international patients who transformed their smiles in India.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-12">
            <Quote className="text-[#007AB6] opacity-20 mb-6" size={48} />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#007AB6]/20">
                  <ImageWithFallback
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#00A676] text-[#00A676]" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <p className="text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].country}</p>
                  <p className="text-[#007AB6] text-sm mt-1">{testimonials[currentIndex].treatment}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-[#007AB6] text-[#007AB6] hover:bg-[#007AB6] hover:text-white"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#007AB6] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-[#007AB6] text-[#007AB6] hover:bg-[#007AB6] hover:text-white"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-[#007AB6]/10 to-[#00A676]/10 rounded-lg">
            <div className="text-[#007AB6] mb-2">98%</div>
            <p className="text-gray-700">Patient Satisfaction</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#007AB6]/10 to-[#00A676]/10 rounded-lg">
            <div className="text-[#007AB6] mb-2">2,000+</div>
            <p className="text-gray-700">International Patients</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#007AB6]/10 to-[#00A676]/10 rounded-lg">
            <div className="text-[#007AB6] mb-2">50+</div>
            <p className="text-gray-700">Partner Clinics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
