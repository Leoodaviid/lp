"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  Wifi,
  Coffee,
  Utensils,
} from "lucide-react";

export function EventHighlight() {
  const amenities = [
    { icon: Wifi, label: "Wi-Fi Premium" },
    { icon: Coffee, label: "Coffee Break" },
    { icon: Utensils, label: "Almoço Incluso" },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary mb-4"
          >
            Programação Oficial
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            O que vai acontecer em{" "}
            <span className="text-primary">cada dia</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Venue / Location Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <Building2 className="w-24 h-24 text-primary/30" />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <h3 className="text-xl font-bold mb-1">
                  Plataforma Global – Alphaville / SP
                </h3>
                <p className="text-muted-foreground text-sm">
                  Espaço moderno, confortável e pensado para uma imersão
                  estratégica em negócios, posicionamento e Nutrição.
                </p>
              </div>
            </div>
          </div>

          {/* Event Details Card */}
          <div className="space-y-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Dois dias intensos para transformar sua forma de atuar na
                Nutrição
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Formação Nutri Expert Experience SP é uma imersão presencial e
                estratégica para você escalar faturamento, construir uma marca
                autoral forte e se posicionar como referência — dentro e fora do
                digital.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data</p>
                    <p className="font-medium">10 e 11 de Abril</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="font-medium">9h às 18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 col-span-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Local</p>
                    <p className="font-medium">
                      Plataforma Global – Alphaville / SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    📍 DAY 1
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Abertura Oficial</li>
                    <li>Método Autoral – Cybelle Monteiro</li>
                    <li>Construção de Comunidade – Thaísa Leal</li>
                    <li>Almoço</li>
                    <li>Escalando seu Faturamento – Mateus Cortez</li>
                    <li>Aluna Profissional Mentory</li>
                    <li>Intervalo</li>
                    <li>Posicionamento de Marca – Cybelle Monteiro</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    📍 DAY 2
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Posicionamento de Marca Autoral – Cybelle Monteiro</li>
                    <li>Mentalidade Nutri Expert – Mateus Cortez</li>
                    <li>Almoço</li>
                    <li>
                      Se Tornando Referência na Nutrição – Palestrante Convidada
                      (a revelar)
                    </li>
                    <li>Nutri Digital – Mateus Cortez</li>
                    <li>Intervalo</li>
                    <li>Plano Nutri 50K – Cybelle Monteiro</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2"
                >
                  <amenity.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{amenity.label}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Garantir minha vaga
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
