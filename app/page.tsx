import { About } from "./components/about";
import { EventGallery } from "./components/event-gallery";
import { EventHighlight } from "./components/event-highlight";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Pricing } from "./components/pricing";
import { Speakers } from "./components/speakers";
import { WhatYouLearn } from "./components/what-you-learn";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <EventHighlight />
      <EventGallery />
      <About />
      <Speakers />
      <WhatYouLearn />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
