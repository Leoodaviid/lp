"use client";

import { Badge } from "@/components/ui/badge";
import { User, Instagram, Linkedin, Lock } from "lucide-react";

const speakers = [
  {
    name: "Cybelle Monteiro",
    role: "Criadora da Metodologia Nutri Expert",
    bio: "Nutricionista, estrategista de negócios e posicionamento, referência em formar Nutris de alto valor no mercado.",
  },
  {
    name: "Mateus Cortez",
    role: "Estrategista de Negócios",
    bio: "Especialista em escala, faturamento e construção de ofertas digitais para nutricionistas.",
  },
  {
    name: "Convidado Especial",
    role: "A ser revelado",
    bio: "Conteúdo inédito com convidado(a) especial focado em referência, autoridade e resultados na Nutrição.",
  },
  {
    name: "Convidado Especial",
    role: "A ser revelado",
    bio: "Palestrante surpresa para complementar a experiência com visão estratégica e prática.",
  },
];

export function Speakers() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary mb-4"
          >
            Palestrantes & Convidados
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Especialistas que vão conduzir a{" "}
            <span className="text-primary">Nutri Expert Experience SP</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cybelle Monteiro e Mateus Cortez à frente da formação, além de
            convidados especiais que serão revelados em breve para potencializar
            ainda mais a sua experiência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-b from-secondary to-card flex items-center justify-center relative overflow-hidden">
                {speaker.role === "A ser revelado" ? (
                  <Lock className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                ) : (
                  <User className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-colors" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {speaker.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {speaker.bio}
                </p>

                {/* Social links */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <button className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                    <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
