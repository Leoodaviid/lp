"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { AnimatedButton } from "@/components/ui/animate-button";
import GitHubStarsAnimation from "@/components/smoothui/components/github-stars-animation";
import {
  Lightbulb,
  TrendingUp,
  Brain,
  Users,
  GraduationCap,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

const differentials = [
  {
    title: "Conteúdo aplicável",
    description:
      "Ferramentas práticas que você implementa já na segunda-feira. Nada de teoria sem aplicação.",
    icon: Lightbulb,
    highlight: "100% prático",
    benefits: ["Templates prontos", "Checklists", "Scripts de venda"],
    featured: true,
  },
  {
    title: "Estratégia de negócios",
    description:
      "Aprenda a precificar, vender e escalar seu consultório ou clínica com métodos validados.",
    icon: TrendingUp,
    highlight: "ROI garantido",
    benefits: ["Precificação", "Funil de vendas", "Escalabilidade"],
    featured: false,
  },
  {
    title: "Mentalidade de crescimento",
    description:
      "Desenvolva a mentalidade necessária para alcançar o próximo nível na sua carreira.",
    icon: Brain,
    highlight: "Mindset",
    benefits: ["Autoconfiança", "Liderança", "Resiliência"],
    featured: false,
  },
  {
    title: "Networking de alto nível",
    description:
      "Conecte-se com nutricionistas que faturam 6 e 7 dígitos por ano em um ambiente exclusivo.",
    icon: Users,
    highlight: "Conexões VIP",
    benefits: ["Mentores", "Parcerias", "Comunidade"],
    featured: true,
  },
  {
    title: "Formação, não inspiração vazia",
    description:
      "Saia com um plano de ação claro e estruturado, não apenas motivação temporária.",
    icon: GraduationCap,
    highlight: "Resultados reais",
    benefits: ["Plano de ação", "Metas claras", "Acompanhamento"],
    featured: false,
  },
];

export function DifferentialsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <Wrapper className="relative z-10">
        {/* Header */}
        <AnimationContainer delay={0}>
          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-24 sm:mx-0 sm:text-left">
            <h2 className="mb-6 text-4xl font-thin leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Por que essa formação é{" "}
              <span className="relative inline-block">
                <span className="text-primary">diferente</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-primary md:-bottom-3 md:h-4"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C50 2 150 2 198 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mx-0 sm:text-xl">
              Você sai com clareza, direção e um{" "}
              <span className="font-medium text-foreground">
                plano de ação concreto
              </span>{" "}
              para transformar sua carreira
            </p>
          </div>
        </AnimationContainer>

        {/* Cards Grid - Asymmetric Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {differentials.map((item, index) => {
            // Define grid spans for bento layout
            const gridSpans = [
              "lg:col-span-4", // Featured - larger
              "lg:col-span-2", // Small
              "lg:col-span-2", // Small
              "lg:col-span-4", // Featured - larger
              "lg:col-span-6", // Full width
            ];

            return (
              <AnimationContainer
                key={item.title}
                delay={0.15 + index * 0.08}
                className={`${gridSpans[index]} h-full`}
              >
                <div className="group relative h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-primary/20 to-primary/10 blur opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card */}
                  <div
                    className={`relative h-full rounded-2xl border border-border/80 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/40 md:p-8 ${
                      item.featured
                        ? "bg-linear-to-br from-card/95 via-card/90 to-primary/10"
                        : "bg-linear-to-b from-card/80 to-card/60"
                    }`}
                  >
                    {/* Top row: Icon + Highlight */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div
                        className={`relative ${
                          item.featured ? "w-16 h-16" : "w-14 h-14"
                        }`}
                      >
                        <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/30 to-primary/15 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div
                          className={`relative flex h-full w-full items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 ${
                            item.featured ? "" : ""
                          }`}
                        >
                          <item.icon
                            className={`text-primary transition-transform duration-500 group-hover:scale-110 ${
                              item.featured ? "w-8 h-8" : "w-7 h-7"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Highlight badge */}
                      <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5">
                        <Zap className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {item.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`mb-3 font-bold text-foreground transition-colors group-hover:text-primary/90 ${
                        item.featured
                          ? "text-2xl md:text-3xl"
                          : "text-xl md:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mb-6 leading-relaxed text-muted-foreground ${
                        item.featured ? "text-base md:text-lg" : "text-base"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Benefits tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 group-hover:border-primary/20 group-hover:bg-card/70"
                        >
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex translate-y-2 items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span>Explorar</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Corner accent for featured */}
                    {item.featured && (
                      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden rounded-tr-2xl">
                        <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-bl from-primary/10 to-transparent" />
                      </div>
                    )}
                  </div>
                </div>
              </AnimationContainer>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimationContainer delay={0.2}>
          <div className="mt-20 md:mt-24">
            <div className="relative max-w-3xl mx-auto">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary/15 via-primary/5 to-primary/10 blur-2xl" />

              <div className="relative rounded-2xl border border-border/60 bg-linear-to-b from-card/90 to-card/70 p-8 text-center md:p-10">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <GitHubStarsAnimation
                    owner="educlopez"
                    repo="smoothui"
                    maxAvatars={4}
                    showAvatars
                    className="text-primary"
                    countClassName="text-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    +500 nutricionistas
                  </span>
                </div>

                <p className="mb-8 text-lg text-muted-foreground">
                  Junte-se a quem já está{" "}
                  <span className="font-semibold text-primary">
                    transformando resultados
                  </span>
                </p>

                <div className="flex justify-center">
                  {" "}
                  <AnimatedButton
                    title="QUERO SER UM NUTRI EXPERT"
                    href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </Wrapper>
    </section>
  );
}
