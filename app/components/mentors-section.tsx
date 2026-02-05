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
    <section id="mentors" className="bg-background py-20 scroll-mt-28">
      <Wrapper>
          <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 sm:mx-0 sm:text-left">
            <h2 className="text-4xl font-thin leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Mentores da sua{" "}
              <span className="relative inline-block">
                <span className="text-primary">jornada</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-primary md:-bottom-3 md:h-4"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C50 2 150 2 198 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </AnimationContainer>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
              <AnimationContainer
                key={mentor.name}
                animation="fadeUp"
                delay={0.1 + index * 0.08}
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
