import { HeroSection } from './HeroSection';
import { TrustBar } from './TrustBar';
import { TreatmentsSection } from './TreatmentsSection';
import { DestinationsSection } from './DestinationsSection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhyIndiaSection } from './WhyIndiaSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogSection } from './BlogSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <TreatmentsSection />
      <DestinationsSection />
      <HowItWorksSection />
      <WhyIndiaSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}