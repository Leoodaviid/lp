"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import {
  TrendingDown,
  UserSquare2,
  ClipboardList,
  TrendingUp,
  Award,
} from "lucide-react";

const painPoints = [
  {
    title: "Trabalha muito, mas o faturamento não acompanha",
    description:
      "Sua agenda está cheia, mas a receita não cresce no mesmo ritmo.",
    icon: TrendingDown,
  },
  {
    title: "Ainda depende apenas de atendimento individual",
    description:
      "Sem escala, o seu teto de ganhos fica limitado pelo seu tempo.",
    icon: UserSquare2,
  },
  {
    title: "Não tem uma metodologia autoral clara",
    description:
      "Sem processo, fica difícil vender valor e criar consistência.",
    icon: ClipboardList,
  },
  {
    title: "Vê outros nutris crescendo no digital enquanto você fica estagnada",
    description:
      "A sensação é de correr muito e não sair do lugar.",
    icon: TrendingUp,
  },
  {
    title: "Quer ser reconhecida como referência, mas não sabe como se posicionar",
    description:
      "Falta clareza para construir autoridade e atrair o público certo.",
    icon: Award,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl">
              Se você é nutricionista e sente que:
            </h2>
            <p className="text-lg text-muted-foreground">
              Essa formação foi criada exatamente para você.
            </p>
          </div>
        </AnimationContainer>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
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
