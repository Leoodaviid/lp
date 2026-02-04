"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { CalendarDays, MapPin, Rocket, Users } from "lucide-react";

const heroHighlights = [
  {
    title: "10 e 11 de Abril",
    description: "Dois dias de imersão presencial",
    icon: CalendarDays,
  },
  {
    title: "Alphaville, São Paulo",
    description: "Plataforma Global",
    icon: MapPin,
  },
  {
    title: "+500 Nutricionistas",
    description: "Networking premium e colaborativo",
    icon: Users,
  },
];

export function HeroSection() {
  return (
    <section className="pt-24">
      <div className="relative min-h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://s3.leoodaviid.tech/packets/NUTRI-01750.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/80 to-background/40" />
        <Wrapper className="relative z-10 grid gap-12 py-20 md:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <AnimationContainer animation="fadeUp" delay={0}>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  Imersão presencial de elite
                </span>
              </div>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={1}>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                FORMAÇÃO <br />
                NUTRI EXPERT <br />
                <span className="text-primary">EXPERIENCE</span>
              </h1>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={2}>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground lg:text-xl">
                O evento que vai escalar seu faturamento, posicionar sua marca e
                te levar ao próximo nível na Nutrição.
              </p>
            </AnimationContainer>

            <AnimationContainer animation="fadeUp" delay={3}>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-black text-primary-foreground shadow-2xl shadow-primary/30 transition-transform hover:scale-105 sm:w-auto">
                  GARANTIR MINHA VAGA
                  <Rocket className="h-5 w-5" />
                </button>
                <div className="flex flex-col">
                  <span className="flex items-center gap-2 font-bold text-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    10 e 11 de Abril
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Alphaville, São Paulo
                  </span>
                </div>
              </div>
            </AnimationContainer>
          </div>

          <div className="hidden items-center justify-end md:flex">
            <AnimationContainer animation="fadeLeft" delay={2}>
              <div className="w-full max-w-sm rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                    Destaques
                  </span>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                    Ao vivo
                  </span>
                </div>
                <div className="space-y-6">
                  {heroHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimationContainer>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
