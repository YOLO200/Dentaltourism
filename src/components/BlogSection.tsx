import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const articles = [
    {
      title: 'Complete Guide to Dental Tourism in India',
      excerpt: 'Everything you need to know about traveling to India for dental care, from choosing clinics to planning your trip.',
      image: 'https://images.unsplash.com/photo-1705077171489-b5dfcf144676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBEZWxoaSUyMEluZGlhJTIwZ2F0ZXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'November 10, 2025',
      category: 'Travel Tips'
    },
    {
      title: 'Dental Implants: What to Expect in India',
      excerpt: 'A detailed overview of the dental implant procedure, recovery timeline, and why India is a top destination.',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc2MzI4MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'November 5, 2025',
      category: 'Treatment Guide'
    },
    {
      title: 'Top 10 Places to Visit While in India',
      excerpt: 'Make the most of your dental tourism trip with these must-see destinations and cultural experiences.',
      image: 'https://images.unsplash.com/photo-1662408976803-d94e2e0cb57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBza3lsaW5lJTIwY2l0eXxlbnwxfHx8fDE3NjMyODI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'October 28, 2025',
      category: 'Travel Tips'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Resources & Travel Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, travel guides, and everything you need to plan your dental tourism journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,122,182,0.15)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#007AB6] text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-gray-900 mb-3 group-hover:text-[#007AB6] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <button className="text-[#007AB6] hover:text-[#005A8A] flex items-center gap-2 group/link transition-colors">
                  Read More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-[#007AB6] text-[#007AB6] hover:bg-[#007AB6] hover:text-white rounded-lg px-8"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
