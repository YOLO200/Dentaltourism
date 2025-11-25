import { DollarSign, Building2, Palmtree, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyIndiaSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Save 50-75% compared to US, UK, or Australian prices without compromising quality'
    },
    {
      icon: Building2,
      title: 'Modern Facilities',
      description: 'State-of-the-art clinics with latest technology and internationally trained dentists'
    },
    {
      icon: Palmtree,
      title: 'Travel & Holiday',
      description: 'Combine dental treatment with an incredible vacation in diverse and beautiful India'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'ISO-certified clinics following international protocols with English-speaking staff'
    }
  ];

  const costComparison = [
    { treatment: 'Dental Implant', usa: '$3,500', india: '$800', savings: '77%' },
    { treatment: 'Porcelain Veneers', usa: '$1,200', india: '$350', savings: '71%' },
    { treatment: 'Full Mouth Restoration', usa: '$35,000', india: '$8,000', savings: '77%' },
    { treatment: 'Root Canal', usa: '$1,500', india: '$200', savings: '87%' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#007AB6]/5 via-white to-[#00A676]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Why Choose India for Dental Care?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            India has become a global leader in dental tourism, offering exceptional care at unbeatable prices.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#007AB6] to-[#00A676] flex items-center justify-center">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.05)] p-8">
          <h3 className="text-gray-900 mb-8 text-center">Cost Comparison: USA vs India</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-700">Treatment</th>
                  <th className="text-right py-4 px-4 text-gray-700">USA/UK/AUS</th>
                  <th className="text-right py-4 px-4 text-gray-700">India</th>
                  <th className="text-center py-4 px-4 text-gray-700">You Save</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-gray-900">{item.treatment}</td>
                    <td className="py-4 px-4 text-right text-gray-600">{item.usa}</td>
                    <td className="py-4 px-4 text-right text-[#00A676]">{item.india}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block bg-[#00A676] text-white px-3 py-1 rounded-full">
                        {item.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#007AB6]/10 to-[#00A676]/10 rounded-lg">
            <p className="text-gray-700 text-center">
              <strong>Even including flights and accommodation, dental tourism to India can save you thousands!</strong>
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1705077171489-b5dfcf144676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBEZWxoaSUyMEluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="India landmark"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1625505826977-66d796089d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMHBhbG18ZW58MXx8fHwxNzYzMjgyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Beach in India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
