"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { MapPin } from "lucide-react";

export function LocationSection() {
  return (
    <section className="bg-background py-12">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="group relative flex h-96 w-full items-center justify-center overflow-hidden rounded-[3rem] bg-card shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNd5UsP3o72zvTS4sDG3wPpAe38iIjwZ7WzinxsY_gwTPmM8m4KfrBTYYczocoCJmqUoBYJea6rj5mueisn4QltEV7YEN2p6NUs_03W5dJp0Dm4lJ87pCs7dp7BzpO64w8eHlvk_jcckL_P8tdCau11CtMa-F43mttWUSujdb9iAdmZAJ92ZciMg53qgZhfiXT8mDIL-EAvEi6_nsaLo02JOk-sxbrk0plQdtNXo4I4N5jhStbfZ1hFXUsd8VHcnJROhwkEklBNBU')",
              }}
            />
            <div className="absolute inset-0 bg-background/60" />
            <div className="relative z-10 max-w-sm rounded-3xl border border-primary/20 bg-card/90 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-lg font-black text-foreground">
                    LOCALIZAÇÃO
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Alphaville Business Center, SP
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
