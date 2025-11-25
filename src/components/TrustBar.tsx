import { Award, Users, Shield, Languages } from 'lucide-react';

export function TrustBar() {
  const trustStats = [
    { icon: Users, label: '2,000+ international patients served', color: '#007AB6' },
    { icon: Award, label: 'ISO-certified clinics', color: '#00A676' },
    { icon: Shield, label: '100% quality guarantee', color: '#007AB6' },
    { icon: Languages, label: 'English-speaking staff', color: '#00A676' },
  ];

  return (
    <div className="bg-gradient-to-r from-[#007AB6]/5 to-[#00A676]/5 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 justify-center lg:justify-start">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <p className="text-gray-700 text-center lg:text-left">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
