"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Escalar faturamento com estratégia",
  "Construir produtos e programas nutricionais autorais",
  "Desenvolver marca pessoal forte",
  "Criar comunidade",
  "Se tornar uma Nutri de alto valor no mercado",
];

export function SolutionSection() {
  return (
    <section className="bg-secondary/30 py-24">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
              A Formação Nutri Expert Experience SP
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Um evento presencial, intensivo e estratégico, criado para
              nutricionistas que querem:
            </p>
          </div>
        </AnimationContainer>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4">
          {outcomes.map((item, index) => (
            <AnimationContainer
              key={item}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-6 py-4 text-left shadow-lg">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-base font-semibold text-foreground">
                  {item}
                </p>
              </div>
            </AnimationContainer>
          ))}
        </div>

        <AnimationContainer animation="fadeUp" delay={outcomes.length * 0.15}>
          <div className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold text-foreground">
            <p>Não é congresso.</p>
            <p>Não é palestra rasa.</p>
            <p className="text-primary">
              É formação prática + mentalidade + posicionamento + negócios.
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </section>
  );
}
