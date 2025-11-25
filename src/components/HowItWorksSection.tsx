import { Search, FileText, Plane, Heart } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Choose Treatment & Destination',
      description: 'Browse our treatment options and select your preferred city in India. Our experts will help you find the perfect match.'
    },
    {
      icon: FileText,
      number: '02',
      title: 'Get Quote & Travel Plan',
      description: 'Receive a detailed quote and personalized travel itinerary. We handle accommodation, airport pickup, and clinic appointments.'
    },
    {
      icon: Plane,
      number: '03',
      title: 'Travel & Receive Treatment',
      description: 'Fly to India and receive world-class dental care. Our coordinators assist you throughout your stay.'
    },
    {
      icon: Heart,
      number: '04',
      title: 'Aftercare & Follow-up',
      description: 'Get comprehensive aftercare instructions and remote follow-up consultations to ensure your complete satisfaction.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your journey to a perfect smile is simple and stress-free. We guide you through every step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007AB6] via-[#00A676] to-[#007AB6]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#007AB6] to-[#00A676] flex items-center justify-center text-white z-10 relative shadow-lg">
                      {step.number}
                    </div>
                    {/* Connecting line for mobile/tablet */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#007AB6] to-[#00A676]"></div>
                    )}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#007AB6]/10 to-[#00A676]/10 flex items-center justify-center">
                    <step.icon size={32} className="text-[#007AB6]" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
