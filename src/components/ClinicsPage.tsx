import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Award,
  Phone,
  Mail,
  Globe,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cdhImage from "../assets/CDH.png";

export function ClinicsPage() {
  const navigate = useNavigate();
  const clinics = [
    {
      name: "Elite Dental Care Mumbai",
      location: "Bandra, Mumbai, Maharashtra",
      city: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      reviews: 520,
      specialties: [
        "Dental Implants",
        "Porcelain Veneers",
        "Full Mouth Rehabilitation",
        "Cosmetic Dentistry",
      ],
      accreditations: ["ISO 9001", "JCI Accredited", "NABH"],
      languages: ["English", "Hindi", "Marathi"],
      experience: "25+ years",
      description:
        "Premier dental clinic specializing in advanced implantology and cosmetic procedures with state-of-the-art technology.",
    },
    {
      name: "Smile Experts New Delhi",
      location: "South Extension, New Delhi",
      city: "New Delhi",
      image:
        "https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviews: 485,
      specialties: [
        "Orthodontics",
        "Invisalign",
        "Teeth Whitening",
        "Smile Makeover",
      ],
      accreditations: ["ISO 9001", "JCI Accredited"],
      languages: ["English", "Hindi", "Punjabi"],
      experience: "20+ years",
      description:
        "Award-winning cosmetic dentistry practice known for creating beautiful, natural-looking smiles using cutting-edge techniques.",
    },
    {
      name: "City Dental Hospital",
      location: "Virani Chowk, Rajkot",
      city: "Rajkot",
      image: cdhImage,
      rating: 5.0,
      reviews: 3500,
      specialties: [
        "Dental Implants",
        "Invisible Aligners",
        "Full Mouth Rehabilitation",
        "Laser Dentistry",
      ],
      accreditations: ["NABH Accredited", "Best Dental Hospital Award"],
      languages: ["English", "Hindi", "Gujarati"],
      experience: "15+ years",
      description:
        "First and only NABH accredited dental hospital in Saurashtra. Specializing in advanced implants with 10,500+ successful procedures and 30,000+ happy patients including 3,500+ international patients.",
    },
    {
      name: "Coastal Dental Goa",
      location: "Panaji, Goa",
      city: "Goa",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviews: 340,
      specialties: [
        "General Dentistry",
        "Aesthetic Dentistry",
        "Crowns & Bridges",
        "Teeth Cleaning",
      ],
      accreditations: ["ISO 9001", "NABH"],
      languages: ["English", "Hindi", "Konkani"],
      experience: "15+ years",
      description:
        "Modern dental practice in a serene beach setting, perfect for combining dental care with a relaxing vacation.",
    },
    {
      name: "Hyderabad Dental Specialists",
      location: "Jubilee Hills, Hyderabad",
      city: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      reviews: 390,
      specialties: [
        "Dental Implants",
        "Cosmetic Dentistry",
        "Pediatric Dentistry",
        "Laser Dentistry",
      ],
      accreditations: ["ISO 9001", "JCI Accredited"],
      languages: ["English", "Hindi", "Telugu"],
      experience: "18+ years",
      description:
        "High-tech dental facility offering comprehensive care with a focus on patient comfort and advanced treatment options.",
    },
    {
      name: "International Dental Center Mumbai",
      location: "Andheri West, Mumbai",
      city: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      reviews: 558,
      specialties: [
        "Full Mouth Implants",
        "Smile Design",
        "Maxillofacial Surgery",
        "Sedation Dentistry",
      ],
      accreditations: ["ISO 9001", "JCI Accredited", "NABH"],
      languages: ["English", "Hindi", "Gujarati", "Marathi"],
      experience: "28+ years",
      description:
        "Internationally recognized dental center catering specifically to medical tourists with comprehensive treatment packages.",
    },
    {
      name: "Precision Dental Hyderabad",
      location: "Banjara Hills, Hyderabad",
      city: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzI4MjUzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviews: 425,
      specialties: [
        "Digital Dentistry",
        "Same-Day Crowns",
        "Veneers",
        "Gum Treatment",
      ],
      accreditations: ["ISO 9001", "NABH"],
      languages: ["English", "Hindi", "Telugu", "Tamil"],
      experience: "22+ years",
      description:
        "Modern dental practice utilizing the latest digital dentistry technology for precise and efficient treatments.",
    },
    {
      name: "Goa Smile Studio",
      location: "Candolim, Goa",
      city: "Goa",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      reviews: 298,
      specialties: [
        "Cosmetic Dentistry",
        "Teeth Whitening",
        "Bonding",
        "Preventive Care",
      ],
      accreditations: ["ISO 9001"],
      languages: ["English", "Hindi", "Portuguese"],
      experience: "12+ years",
      description:
        "Boutique dental practice focusing on cosmetic procedures in a relaxing, spa-like atmosphere near the beach.",
    },
    {
      name: "Capital Dental Hub Delhi",
      location: "Connaught Place, New Delhi",
      city: "New Delhi",
      image:
        "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      reviews: 470,
      specialties: [
        "Implantology",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
      ],
      accreditations: ["ISO 9001", "JCI Accredited"],
      languages: ["English", "Hindi", "Urdu"],
      experience: "24+ years",
      description:
        "Centrally located multi-specialty dental clinic offering comprehensive care with easy access to major tourist attractions.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjEwNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#007AB6]/90 to-[#00A676]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-white mb-4">Our Partner Clinics</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Browse through our network of ISO-certified and JCI-accredited
            dental clinics across India. Each clinic is carefully selected for
            quality, expertise, and international standards.
          </p>
        </div>
      </div>

      {/* Clinics Grid */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-[#007AB6] mb-2">90+</div>
              <p className="text-gray-600">Partner Clinics</p>
            </div>
            <div className="text-center">
              <div className="text-[#007AB6] mb-2">100%</div>
              <p className="text-gray-600">Internationally Certified</p>
            </div>
            <div className="text-center">
              <div className="text-[#007AB6] mb-2">4.8+</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>

          {/* Clinics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinics.map((clinic, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(0,122,182,0.15)] transition-all duration-300 flex flex-col"
              >
                {/* Clinic Image */}
                <div className="h-56 overflow-hidden relative">
                  <ImageWithFallback
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="text-[#00A676] fill-[#00A676]" size={16} />
                    <span className="text-gray-900">{clinic.rating}</span>
                  </div>
                </div>

                {/* Clinic Details */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Name and Location */}
                  <div className="mb-4">
                    <h3 className="text-gray-900 mb-2">{clinic.name}</h3>
                    <div className="flex items-start gap-2 text-gray-600 text-sm">
                      <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{clinic.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {clinic.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {clinic.specialties.slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#007AB6]/10 text-[#007AB6] rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                      {clinic.specialties.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{clinic.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Accreditations */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {clinic.accreditations.map((acc, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 bg-[#00A676]/10 text-[#00A676] rounded text-xs"
                        >
                          <Award size={12} />
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="text-gray-600">
                        <span className="text-gray-700">
                          {clinic.experience}
                        </span>{" "}
                        experience
                      </div>
                      <div className="text-gray-600">
                        <span className="text-gray-700">{clinic.reviews}+</span>{" "}
                        reviews
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Globe size={14} className="text-gray-500" />
                      <span className="text-gray-600 text-sm">
                        {clinic.languages.join(", ")}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => navigate("/quote")}
                      className="w-full bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg"
                    >
                      Request Consultation
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Clinics Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Why Choose Our Partner Clinics?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every clinic in our network meets strict quality standards to
              ensure you receive world-class care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Internationally Certified",
                description: "All clinics hold ISO, JCI, or NABH accreditation",
              },
              {
                icon: Award,
                title: "Expert Specialists",
                description:
                  "Dentists with 15+ years of experience and international training",
              },
              {
                icon: Globe,
                title: "English Speaking Staff",
                description:
                  "Seamless communication in English and other languages",
              },
              {
                icon: Star,
                title: "Verified Reviews",
                description:
                  "Real patient testimonials and high satisfaction ratings",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#007AB6]/10 to-[#00A676]/10 rounded-full flex items-center justify-center">
                  <feature.icon className="text-[#007AB6]" size={32} />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#007AB6] to-[#00A676] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Not Sure Which Clinic to Choose?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our team will help you select the perfect clinic based on your
            specific treatment needs, budget, and preferred location. Get
            personalized recommendations today.
          </p>
          <Button
            onClick={() => navigate("/quote")}
            size="lg"
            className="bg-white text-[#007AB6] hover:bg-gray-100 rounded-lg px-8"
          >
            Get Personalized Clinic Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
}
