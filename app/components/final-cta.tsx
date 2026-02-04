"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Clock, Users } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Vagas presenciais limitadas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
            Pronta para viver a{" "}
            <span className="text-primary">Nutri Expert Experience</span> em São
            Paulo?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Dois dias de formação estratégica para escalar seu faturamento,
            posicionar sua marca e se tornar referência na Nutrição. Garanta sua
            vaga e saia com clareza, direção e plano de ação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 group"
            >
              Garantir minha vaga
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>
              Mais de{" "}
              <strong className="text-foreground">
                nutricionistas de todo o Brasil
              </strong>{" "}
              já passaram pela metodologia Nutri Expert
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {[
            { value: "100%", label: "Conteúdo aplicável" },
            { value: "2 dias", label: "De imersão estratégica" },
            { value: "Negócios", label: "Posicionamento & Mentalidade" },
            { value: "Ao vivo", label: "Evento 100% presencial" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center"
            >
              <span className="text-2xl font-bold text-primary block">
                {badge.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
