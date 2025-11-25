import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function QuoteFormPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center py-20">
          <div className="w-20 h-20 bg-[#00A676] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h1 className="text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Your request has been received. Our dental tourism coordinator will review your information 
            and contact you within 24 hours with a personalized treatment plan and quote.
          </p>
          <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 text-left max-w-xl mx-auto">
            <h3 className="text-gray-900 mb-4">What Happens Next?</h3>
            <ol className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#007AB6] text-white rounded-full flex items-center justify-center text-sm">1</span>
                <span>Our team reviews your dental needs and medical history</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#007AB6] text-white rounded-full flex items-center justify-center text-sm">2</span>
                <span>We match you with the best clinic and specialist for your treatment</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#007AB6] text-white rounded-full flex items-center justify-center text-sm">3</span>
                <span>You receive a detailed quote including treatment, travel, and accommodation costs</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#007AB6] text-white rounded-full flex items-center justify-center text-sm">4</span>
                <span>We help you plan your entire journey from arrival to departure</span>
              </li>
            </ol>
          </div>
          <div className="mt-8">
            <p className="text-gray-600 mb-4">Questions? Contact us anytime:</p>
            <p className="text-[#007AB6]">+1 (800) 123-4567</p>
            <p className="text-[#007AB6]">info@dentaltourismindia.com</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Request Your Free Quote</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our dental tourism coordinator will create a personalized 
            treatment plan and cost estimate for you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-12">
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-gray-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    required 
                    className="mt-2 rounded-lg"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    required 
                    className="mt-2 rounded-lg"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="mt-2 rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    required 
                    className="mt-2 rounded-lg"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country of Residence *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2 rounded-lg">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="nz">New Zealand</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    className="mt-2 rounded-lg"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>

            {/* Treatment Details */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-gray-900 mb-6">Treatment Details</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="treatment">Treatment Type *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2 rounded-lg">
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="implants">Dental Implants</SelectItem>
                      <SelectItem value="veneers">Porcelain Veneers</SelectItem>
                      <SelectItem value="restoration">Full Mouth Restoration</SelectItem>
                      <SelectItem value="makeover">Smile Makeover</SelectItem>
                      <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                      <SelectItem value="whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Describe Your Dental Needs *</Label>
                  <Textarea 
                    id="description" 
                    required 
                    className="mt-2 rounded-lg min-h-32"
                    placeholder="Please describe your dental concerns, symptoms, or what you'd like to improve about your smile..."
                  />
                </div>

                <div>
                  <Label htmlFor="urgency">When Are You Planning to Travel? *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2 rounded-lg">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="3months">1-3 months</SelectItem>
                      <SelectItem value="6months">3-6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Destination Preferences */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-gray-900 mb-6">Destination Preferences</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="destination">Preferred City in India</Label>
                  <Select>
                    <SelectTrigger className="mt-2 rounded-lg">
                      <SelectValue placeholder="Select city (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">New Delhi</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="accommodation">Accommodation Preference</Label>
                  <Select>
                    <SelectTrigger className="mt-2 rounded-lg">
                      <SelectValue placeholder="Select preference (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5star">5-Star Hotel</SelectItem>
                      <SelectItem value="4star">4-Star Hotel</SelectItem>
                      <SelectItem value="3star">3-Star Hotel</SelectItem>
                      <SelectItem value="budget">Budget Accommodation</SelectItem>
                      <SelectItem value="arrange">I'll arrange my own</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additional">Additional Comments or Questions</Label>
                  <Textarea 
                    id="additional" 
                    className="mt-2 rounded-lg"
                    placeholder="Any special requirements, medical conditions we should know about, or questions you have..."
                  />
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-gray-900 mb-4">Medical History</h3>
              <p className="text-gray-600 text-sm mb-4">
                Do you have any existing medical conditions or allergies? (e.g., diabetes, heart conditions, 
                allergies to anesthesia)
              </p>
              <Textarea 
                id="medical" 
                className="rounded-lg"
                placeholder="Please list any relevant medical conditions or allergies..."
              />
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-gray-200">
              <div className="bg-[#007AB6]/5 rounded-lg p-6 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>Privacy Notice:</strong> Your information is secure and confidential. 
                  We will only use it to provide you with a treatment quote and plan. We never share 
                  your data with third parties.
                </p>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#007AB6] hover:bg-[#005A8A] text-white rounded-lg group"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Submit Request
              </Button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                You'll receive a response within 24 hours
              </p>
            </div>
          </div>
        </form>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by 2,000+ international patients</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00A676] rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span className="text-gray-700">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00A676] rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span className="text-gray-700">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00A676] rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span className="text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
