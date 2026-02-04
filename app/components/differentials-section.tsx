"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Conteúdo aplicável",
  "Estrategia de negócios",
  "Mentalidade de crescimento",
  "Networking de alto nível",
  "Formação, nao inspiração vazia",
];

export function DifferentialsSection() {
  return (
    <section className="bg-background py-24">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
              Por que essa formação é diferente
            </h2>
            <p className="text-lg text-muted-foreground">
              Voce sai com clareza, direção e plano de ação.
            </p>
          </div>
        </AnimationContainer>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {differentials.map((item, index) => (
            <AnimationContainer
              key={item}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-6 py-4 shadow-lg">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-base font-semibold text-foreground">
                  {item}
                </p>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
