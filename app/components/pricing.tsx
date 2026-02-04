"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Acesso Executivo",
    price: "35,16",
    totalPrice: "421,92",
    installments: 12,
    features: [
      "Acesso aos 2 dias de formação presencial",
      "Material de apoio digital",
      "Certificado de participação",
      "Networking com outros participantes",
    ],
    popular: false,
    soldOut: false,
  },
  {
    name: "Acesso Pérola",
    price: "53,92",
    totalPrice: "647,04",
    installments: 12,
    features: [
      "Tudo do plano Executivo",
      "Área de assentos privilegiada",
      "Acesso ao grupo exclusivo",
      "Brindes especiais",
      "Coffee break premium",
    ],
    popular: true,
    soldOut: false,
  },
  {
    name: "Acesso VIP",
    price: "99,00",
    totalPrice: "1.188,00",
    installments: 12,
    features: [
      "Tudo do plano Pérola",
      "Área VIP com vista privilegiada",
      "Almoço exclusivo com palestrantes",
      "Mentoria em grupo",
      "Acesso às gravações da formação",
      "Kit exclusivo VIP",
    ],
    popular: false,
    soldOut: true,
  },
];

export function Pricing() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary mb-4"
          >
            Investimento
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Escolha seu <span className="text-primary">ingresso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invista na sua carreira e garanta sua vaga na formação que vai
            transformar seu negócio como nutricionista
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/50"
              } ${plan.soldOut ? "opacity-70" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Mais vendido
                  </Badge>
                </div>
              )}

              {/* Sold out overlay */}
              {plan.soldOut && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-2 border-destructive text-destructive"
                  >
                    ESGOTADO
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">
                    {plan.installments}x de R$
                  </span>
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  ou R$ {plan.totalPrice} à vista
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
                disabled={plan.soldOut}
              >
                {plan.soldOut ? "Esgotado" : "Garantir minha vaga"}
                {!plan.soldOut && <Sparkles className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
