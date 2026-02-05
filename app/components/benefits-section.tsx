"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import {
  TrendingUp,
  ClipboardList,
  Laptop,
  Users,
  Sparkles,
  Target,
  Award,
  BrainCircuit,
} from "lucide-react";

const pillars = [
  {
    title: "Escalar seu faturamento de forma estratégica",
    description:
      "Organize processos, oferta e conversão para crescer com previsibilidade.",
    icon: TrendingUp,
  },
  {
    title: "Construir uma metodologia nutricional autoral",
    description:
      "Crie um método único que aumenta valor percebido e resultados.",
    icon: ClipboardList,
  },
  {
    title: "Se tornar Nutri Digital, criando produtos que vendem",
    description: "Estruture programas escaláveis e desejados pelo seu público.",
    icon: Laptop,
  },
  {
    title: "Construção de comunidade e audiência qualificada",
    description: "Atraia e retenha pessoas que compram e indicam seu trabalho.",
    icon: Users,
  },
  {
    title: "Posicionamento de marca autoral",
    description:
      "Destaque-se no mercado com identidade, narrativa e valor claro.",
    icon: Sparkles,
  },
  {
    title: "Metodologia Nutri Expert – Plano Nutri 50K",
    description:
      "Estratégia prática para alcançar e sustentar faturamento mensal.",
    icon: Target,
  },
  {
    title: "Como se tornar referência na Nutrição",
    description: "Construa autoridade com conteúdo, prova e consistência.",
    icon: Award,
  },
  {
    title: "Mentalidade Nutri Expert (crescimento, decisão e liderança)",
    description:
      "Postura de liderança para decisões rápidas e alta performance.",
    icon: BrainCircuit,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary/40 py-20 scroll-mt-28">
      <Wrapper>
        <div className="mb-16 space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <AnimationContainer animation="fadeLeft" delay={1}>
              <div className="hidden text-7xl font-black text-primary/20 lg:block">
                CORE
              </div>
            </AnimationContainer>
            <AnimationContainer animation="fadeUp" delay={0}>
              <div className="mx-auto max-w-2xl text-center sm:ml-auto sm:mr-0 sm:text-right">
                <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  O que você vai{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">aprender</span>
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
              </div>
            </AnimationContainer>
          </div>
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Conteúdos estratégicos para transformar sua carreira em um negócio
              de alto valor.
            </p>
          </AnimationContainer>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <AnimationContainer
                key={pillar.title}
                animation="fadeUp"
                delay={index * 0.2}
              >
                <div className="group h-full rounded-3xl border border-border bg-card p-10 shadow-xl shadow-black/10 transition-transform hover:-translate-y-2">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </AnimationContainer>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
