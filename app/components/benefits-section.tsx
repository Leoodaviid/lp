"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { Compass, BadgeCheck, Users, CreditCard } from "lucide-react";

const pillars = [
  {
    title: "Metodologia 10X",
    description:
      "O passo a passo estratégico para transformar seu consultório tradicional em um ecossistema de lucro.",
    icon: Compass,
  },
  {
    title: "Branding Premium",
    description:
      "Como construir uma marca magnética que atrai clientes dispostos a pagar pelo seu valor, não pelo preço.",
    icon: BadgeCheck,
  },
  {
    title: "Comunidade Expert",
    description:
      "Ambiente propício para networking com profissionais que estão no mesmo nível de ambição que você.",
    icon: Users,
  },
  {
    title: "Plano 50K",
    description:
      "A rota matemática e operacional clara para atingir e sustentar os 50 mil reais de faturamento mensal.",
    icon: CreditCard,
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary/40 py-24 scroll-mt-28">
      <Wrapper>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AnimationContainer animation="fadeUp" delay={0}>
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
                O que você vai dominar
              </h2>
              <p className="text-lg text-muted-foreground">
                Os 4 pilares fundamentais para transformar sua carreira em um
                negócio de alto ticket.
              </p>
            </div>
          </AnimationContainer>
          <AnimationContainer animation="fadeLeft" delay={1}>
            <div className="hidden text-7xl font-black text-primary/20 lg:block">
              CORE
            </div>
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
