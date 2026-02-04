import { EventGallery } from "./components/event-gallery";
import { FAQ } from "./components/faq";
import { UrgencyBanner } from "./components/urgency-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <UrgencyBanner />
      {/* <EventGallery /> */}
      <FAQ />
    </main>
  );
}
