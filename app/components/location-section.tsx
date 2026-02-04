"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { MapPin } from "lucide-react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/map";

export function LocationSection() {
  const location = {
    name: "Alphaville Business Center, SP",
    lat: -23.495,
    lng: -46.848,
  };

  return (
    <section className="bg-background py-12">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="relative h-96 w-full overflow-hidden rounded-[3rem] border border-border bg-card shadow-2xl">
            <Map
              className="h-full w-full"
              center={[location.lng, location.lat]}
              zoom={13.5}
              minZoom={10}
              maxZoom={18}
              attributionControl={false}
              theme="dark"
            >
              <MapControls position="bottom-right" showZoom showCompass={false} />
              <MapMarker latitude={location.lat} longitude={location.lng}>
                <MarkerContent className="relative">
                  <span className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_8px_rgba(212,175,55,0.25)]" />
                  <MarkerLabel className="border border-border bg-card/90">
                    {location.name}
                  </MarkerLabel>
                </MarkerContent>
              </MapMarker>
            </Map>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="pointer-events-auto absolute bottom-6 left-6 z-10 max-w-sm rounded-3xl border border-primary/20 bg-card/90 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-lg font-black text-foreground">
                    LOCALIZAÇÃO
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    {location.name}
                  </p>
                </div>
              </div>
              <button className="w-full rounded-xl bg-primary/10 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/20">
                Ver no Google Maps
              </button>
            </div>
          </div>
        </AnimationContainer>
      </Wrapper>
    </section>
  );
}
