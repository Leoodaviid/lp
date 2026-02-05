"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { AnimatedButton } from "@/components/ui/animate-button";
import {
  CheckCircle2,
  Sparkles,
  Target,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    text: "Escalar faturamento com estratégia",
    highlight: "10x mais resultados",
  },
  {
    icon: Sparkles,
    text: "Construir produtos e programas nutricionais autorais",
    highlight: "Sua metodologia",
  },
  {
    icon: Award,
    text: "Desenvolver marca pessoal forte",
    highlight: "Autoridade real",
  },
  {
    icon: Users,
    text: "Criar comunidade engajada",
    highlight: "Clientes fiéis",
  },
  {
    icon: Target,
    text: "Se tornar uma Nutri de alto valor no mercado",
    highlight: "Posicionamento premium",
  },
];

const differentials = [
  { text: "Não é congresso.", icon: "✕" },
  { text: "Não é palestra rasa.", icon: "✕" },
];

const formationHighlights = [
  "É formação prática",
  "mentalidade",
  "posicionamento",
  "negócios.",
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-background py-8">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Wrapper className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6 text-center sm:text-left">
              <AnimationContainer delay={0.2}>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  A FORMAÇÃO <br />
                  NUTRI EXPERT <br />
                  <span className="text-primary">EXPERIENCE</span> SP
                </h2>
              </AnimationContainer>

              <AnimationContainer delay={0.3}>
                <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground sm:mx-0 sm:text-xl">
                  Foi feita para você! Um evento{" "}
                  <span className="font-semibold text-foreground">
                    presencial, intensivo e estratégico
                  </span>
                  , criado para nutricionistas que querem ir além.
                </p>
              </AnimationContainer>
            </div>

            {/* Differentials */}
            <AnimationContainer delay={0.4}>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 -mb-4">
                {differentials.map((item, index) => (
                  <p
                    key={index}
                    className="text-xl font-bold text-muted-foreground line-through"
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </AnimationContainer>

            <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
              {formationHighlights.map((item, index) => (
                <AnimationContainer key={item} delay={0.5 + index * 0.12}>
                  <p className="text-2xl font-semibold text-primary leading-tight">
                    {item}
                    {index < formationHighlights.length - 1 ? " +" : ""}
                  </p>
                </AnimationContainer>
              ))}
              <AnimationContainer
                delay={0.5 + formationHighlights.length * 0.12}
                className="mt-4"
              >
                <AnimatedButton
                  title="Quero minha vaga agora"
                  href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0"
                />
              </AnimationContainer>
            </div>
          </div>

          {/* Right Column - Outcomes Card */}
          <div className="w-full lg:w-[520px] relative">
            <AnimationContainer delay={0.3}>
              <div className="relative">
                {/* Card glow */}
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent blur-xl" />

                <div className="relative rounded-[28px] border border-border/60 bg-card/90 p-8 backdrop-blur-xl sm:p-10">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-foreground">
                      O que você vai conquistar
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Outcomes list */}
                  <div className="space-y-4">
                    {outcomes.map((item, index) => (
                      <AnimationContainer
                        key={index}
                        delay={0.4 + index * 0.08}
                      >
                        <div className="group relative flex cursor-default items-start gap-4 rounded-2xl border border-transparent bg-muted/30 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-muted/50">
                          {/* Icon */}
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-base font-medium leading-tight text-foreground">
                              {item.text}
                            </p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary/80">
                              {item.highlight}
                            </p>
                          </div>

                          {/* Check */}
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                        </div>
                      </AnimationContainer>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="mt-8 border-t border-border/60 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Vagas limitadas
                        </p>
                      </div>
                      <div className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1">
                        <span className="text-sm font-bold text-primary">
                          Presencial
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationContainer>

            {/* Floating elements */}
            <AnimationContainer delay={0.9}>
              <div className="absolute -right-4 -top-6 rotate-6 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-2xl shadow-primary/30 transition-transform duration-300 hover:rotate-3 sm:-right-8">
                <p className="text-sm font-black">2026</p>
                <p className="text-xs font-semibold opacity-80">São Paulo</p>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
