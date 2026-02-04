"use client";

import { Camera, Users, Mic2, Award } from "lucide-react";

export function EventGallery() {
  const images = [
    { icon: Users, span: "col-span-2 row-span-2" },
    { icon: Mic2, span: "col-span-1 row-span-1" },
    { icon: Award, span: "col-span-1 row-span-1" },
    { icon: Camera, span: "col-span-1 row-span-2" },
    { icon: Users, span: "col-span-1 row-span-1" },
    { icon: Mic2, span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Momentos das{" "}
            <span className="text-primary">Edições Anteriores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira a energia e o clima transformador que você vai vivenciar no
            evento
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative group rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-card border border-border`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <image.icon className="w-12 h-12 md:w-16 md:h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
