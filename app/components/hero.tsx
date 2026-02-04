"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, MapPin, Users } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="border-primary/50 bg-primary/10 text-primary px-4 py-2 text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            FORMAÇÃO NUTRI EXPERT EXPERIENCE – SÃO PAULO
          </Badge>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            O evento que vai{" "}
            <span className="text-primary">escalar seu faturamento</span>,{" "}
            posicionar sua marca e te levar ao próximo nível na{" "}
            <span className="text-primary">Nutrição</span>.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Dois dias de imersão presencial para nutricionistas que querem sair
            do comum, construir autoridade e se tornar referência — dentro e
            fora do digital.
          </p>
        </div>

        {/* Speakers images */}
        <div className="relative flex justify-center mb-12">
          <div className="relative">
            <div className="flex items-end justify-center gap-2 sm:gap-4">
              {[
                { name: "Speaker 1", size: "w-20 h-24 sm:w-28 sm:h-36" },
                { name: "Speaker 2", size: "w-24 h-28 sm:w-32 sm:h-40" },
                { name: "Speaker 3", size: "w-28 h-32 sm:w-36 sm:h-44" },
                { name: "Speaker 4", size: "w-32 h-40 sm:w-44 sm:h-52" },
                { name: "Speaker 5", size: "w-28 h-32 sm:w-36 sm:h-44" },
                { name: "Speaker 6", size: "w-24 h-28 sm:w-32 sm:h-40" },
                { name: "Speaker 7", size: "w-20 h-24 sm:w-28 sm:h-36" },
              ].map((speaker, index) => (
                <div
                  key={index}
                  className={`${speaker.size} rounded-t-full bg-gradient-to-b from-primary/30 to-secondary overflow-hidden border-2 border-primary/30 transition-transform hover:scale-105`}
                >
                  <div className="w-full h-full bg-gradient-to-b from-muted to-secondary flex items-center justify-center">
                    <Users className="w-8 h-8 sm:w-12 sm:h-12 text-primary/50" />
                  </div>
                </div>
              ))}
            </div>
            {/* Glow effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-2xl" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Garantir minha vaga
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Event info badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              10 e 11 de Abril
            </span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Plataforma Global – Alphaville / SP
            </span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              +500 Nutricionistas
            </span>
          </div>
        </div>

        {/* Countdown */}
        <CountdownTimer targetDate="2026-04-10T09:00:00" />
      </div>
    </section>
  );
}
