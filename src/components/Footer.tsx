import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import logo from '../assets/logo.png';

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="City Dental Medical Tourism" className="h-12 w-auto" />
              <div>
                <div className="text-white">City Dental</div>
                <div className="text-xs text-gray-400">Medical Tourism</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for affordable, world-class dental care in India. 
              Transform your smile while exploring incredible destinations.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#007AB6] flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#007AB6] flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#007AB6] flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#007AB6] flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate('/treatments')} className="text-gray-400 hover:text-white transition-colors">
                  Treatments
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/destinations')} className="text-gray-400 hover:text-white transition-colors">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/clinics')} className="text-gray-400 hover:text-white transition-colors">
                  Clinics
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/quote')} className="text-gray-400 hover:text-white transition-colors">
                  Get Quote
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#00A676] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+1 (800) 123-4567</p>
                  <p className="text-gray-400">+91 22 1234 5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#00A676] mt-1 flex-shrink-0" />
                <a href="mailto:info@citydentalmedtourism.com" className="text-gray-400 hover:text-white transition-colors">
                  info@citydentalmedtourism.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00A676] mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Mumbai, New Delhi, Hyderabad & Goa<br />
                  India
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get updates on dental care tips, special offers, and travel insights.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-lg"
              />
              <Button className="bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg">
                Subscribe
              </Button>
            </div>
            
            {/* Accreditation Badges */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Accredited & Certified</p>
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">ISO</span>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">JCI</span>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">IDA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 City Dental Medical Tourism. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}