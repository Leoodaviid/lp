"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { TrendingDown, ShieldCheck, UserX, ClipboardList } from "lucide-react";

const painPoints = [
  {
    title: "Faturamento abaixo do esperado",
    description:
      "Cansado de trabalhar muito e não ver o retorno financeiro que sua dedicação merece.",
    icon: TrendingDown,
  },
  {
    title: "Falta de autoridade no mercado",
    description:
      "Dificuldade em ser reconhecido como especialista e referência na sua região.",
    icon: ShieldCheck,
  },
  {
    title: "Dificuldade em escalar",
    description:
      "Sua agenda está lotada, mas seu lucro estagnado. Você precisa de um modelo de negócio.",
    icon: UserX,
  },
  {
    title: "Ausência de um método",
    description:
      "Sentir que está apagando incêndio todos os dias sem um processo de vendas claro.",
    icon: ClipboardList,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
              Este evento é para você?
            </h2>
            <p className="text-lg text-muted-foreground">
              Se você se identifica com algum destes pontos, você está perdendo
              dinheiro por não estar aqui.
            </p>
          </div>
        </AnimationContainer>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimationContainer
                key={item.title}
                animation="fadeUp"
                delay={index * 0.2}
              >
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-primary/50">
                  <Icon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
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
