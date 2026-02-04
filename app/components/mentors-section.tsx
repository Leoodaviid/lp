"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { Lock } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Cybelle Monteiro",
    role: "Estrategista de Negócios",
    description:
      "Especialista em escala de clínicas, gestão de processos e alta performance comercial para o setor de saúde.",
    image: "/images/CA1A0962.jpg",
  },
  {
    name: "Mateus Cortez",
    role: "Expert em Marketing Digital",
    description:
      "Referência nacional em tráfego pago e construção de autoridade digital inabalável para profissionais liberais.",
    image: "/images/DSC01014.jpg",
  },
  {
    name: "Convidado Especial",
    role: "Revelação em breve",
    description:
      "Um dos maiores nomes do Brasil em vendas de alto ticket, vindo para compartilhar seus maiores segredos.",
    image: "",
  },
];

export function MentorsSection() {
  return (
    <section id="mentors" className="bg-background py-24 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <h2 className="mb-20 text-center text-4xl font-black text-foreground lg:text-5xl">
            Mentores da sua jornada
          </h2>
        </AnimationContainer>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <AnimationContainer
              key={mentor.name}
              animation="fadeUp"
              delay={index * 0.2}
            >
              <div className="flex flex-col items-center text-center">
                {mentor.image ? (
                  <div className="relative mb-8 h-64 w-64 overflow-hidden rounded-3xl ring-8 ring-primary/10 shadow-2xl">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover object-top"
                      sizes="256px"
                    />
                  </div>
                ) : (
                  <div className="relative mb-8 flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl border border-dashed border-border bg-card">
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                    <Lock className="relative z-10 h-12 w-12 text-muted-foreground" />
                  </div>
                )}
                <h3 className="mb-2 text-3xl font-bold text-foreground">
                  {mentor.name}
                </h3>
                <span className="mb-4 block text-lg font-bold text-primary">
                  {mentor.role}
                </span>
                <p className="max-w-xs text-muted-foreground">
                  {mentor.description}
                </p>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
