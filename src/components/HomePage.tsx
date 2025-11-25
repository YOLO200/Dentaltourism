import { HeroSection } from './HeroSection';
import { TrustBar } from './TrustBar';
import { TreatmentsSection } from './TreatmentsSection';
import { DestinationsSection } from './DestinationsSection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhyIndiaSection } from './WhyIndiaSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogSection } from './BlogSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'treatments' | 'destinations' | 'clinics' | 'quote') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <TrustBar />
      <TreatmentsSection onNavigate={onNavigate} />
      <DestinationsSection onNavigate={onNavigate} />
      <HowItWorksSection />
      <WhyIndiaSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}