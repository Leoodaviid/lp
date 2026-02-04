"use client";

import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Target,
  Megaphone,
  DollarSign,
  Heart,
  Lightbulb,
  Award,
  Rocket,
} from "lucide-react";

const learnings = [
  {
    icon: DollarSign,
    title: "Escalar seu faturamento",
    description:
      "Estratégias para crescer com intenção, lucro e previsibilidade — sem depender apenas do atendimento 1:1.",
  },
  {
    icon: Award,
    title: "Metodologia Nutri Autoral",
    description:
      "Passo a passo para construir uma metodologia nutricional autoral que te diferencia no mercado.",
  },
  {
    icon: Megaphone,
    title: "Se tornar Nutri Digital",
    description:
      "Como criar produtos e programas que vendem, usando o digital de forma estratégica e profissional.",
  },
  {
    icon: Users,
    title: "Comunidade e audiência qualificada",
    description:
      "Como construir uma base de pessoas certas em volta da sua mensagem e do seu trabalho.",
  },
  {
    icon: Target,
    title: "Posicionamento de marca autoral",
    description:
      "Estratégias para se posicionar de forma única, consistente e alinhada com a sua essência.",
  },
  {
    icon: Rocket,
    title: "Plano Nutri 50K",
    description:
      "A Metodologia Nutri Expert aplicada para você estruturar um plano realista rumo aos 50K.",
  },
  {
    icon: TrendingUp,
    title: "Se tornar referência na Nutrição",
    description:
      "Os pilares para ser reconhecida como autoridade dentro e fora do digital.",
  },
  {
    icon: Lightbulb,
    title: "Mentalidade Nutri Expert",
    description:
      "Crescimento, decisão e liderança para sustentar o próximo nível de resultados.",
  },
];

export function WhatYouLearn() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary mb-4"
          >
            Conteúdo Exclusivo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdos práticos e aplicáveis para você implementar imediatamente
            na sua carreira e ver resultados reais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnings.map((item) => (
            <div
              key={item.title}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
