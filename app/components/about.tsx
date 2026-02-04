"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function About() {
  const benefits = [
    "Trabalha muito, mas o faturamento não acompanha",
    "Ainda depende apenas de atendimento individual",
    "Não tem uma metodologia autoral clara",
    "Vê outros nutris crescendo no digital enquanto você fica estagnada",
    "Quer ser reconhecida como referência, mas não sabe como se posicionar",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Se você é nutricionista e sente que:
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Formação Nutri Expert Experience SP foi criada para a nutri que
              quer sair do comum, organizar seu negócio, escalar faturamento e
              ser vista como referência — sem depender apenas de atendimento
              individual.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Durante dois dias de imersão presencial, você vai ter contato com
              metodologia, mentalidade, posicionamento e estratégia de negócios
              para se tornar uma Nutri de alto valor no mercado.
            </p>

            <div className="mb-8">
              <p className="font-semibold text-foreground mb-3">
                Por que essa formação é diferente:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✔ Conteúdo aplicável, nada de teoria solta.</li>
                <li>✔ Estratégia de negócios pensada para Nutri.</li>
                <li>✔ Mentalidade de crescimento e decisão.</li>
                <li>✔ Networking de alto nível com outras nutricionistas.</li>
                <li>✔ Formação, não inspiração vazia.</li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 group"
            >
              Essa formação é para mim
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8">
              <div className="space-y-6">
                {[
                  { number: "6.0", label: "Sexta edição do evento" },
                  { number: "500+", label: "Nutricionistas formados" },
                  { number: "3", label: "Dias de imersão" },
                  { number: "15+", label: "Palestrantes experts" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                  >
                    <span className="text-4xl font-bold text-primary">
                      {stat.number}
                    </span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
