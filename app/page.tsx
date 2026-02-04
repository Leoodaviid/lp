import { AboutSection } from "./components/about-section";
import { BenefitsSection } from "./components/benefits-section";
import { FinalCtaSection } from "./components/final-cta-section";
import { HeroSection } from "./components/hero-section";
import { LocationSection } from "./components/location-section";
import { MentorsSection } from "./components/mentors-section";
import { FAQ } from "./components/faq";
import { DifferentialsSection } from "./components/differentials-section";
import { SolutionSection } from "./components/solution-section";
import { ScheduleSection } from "./components/schedule-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { UrgencyBanner } from "./components/urgency-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <UrgencyBanner />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <BenefitsSection />
      <MentorsSection />
      <ScheduleSection />
      <DifferentialsSection />
      <FAQ />
      <LocationSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
