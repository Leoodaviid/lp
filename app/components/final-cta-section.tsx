"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";
import { MessageCircle } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animate-button";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      <Wrapper className="relative z-10">
        <div>
          <AnimationContainer animation="fadeUp" delay={0}>
            <div className="mx-auto max-w-4xl text-center sm:ml-auto sm:mr-0 sm:text-right">
              <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-foreground sm:w-full sm:text-5xl lg:text-6xl">
                Você está a uma{" "}
                <span className="relative inline-block">
                  <span className="text-primary">decisão</span>
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
                </span>{" "}
                do próximo nível.
              </h2>
            </div>
          </AnimationContainer>
          <div className="mx-auto max-w-4xl text-center">
            <AnimationContainer animation="fadeUp" delay={1}>
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                As vagas para a imersão presencial são limitadas para garantir
                que cada mentorado tenha atenção e a experiência seja
                transformadora.
              </p>
            </AnimationContainer>
            <AnimationContainer animation="fadeUp" delay={2}>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <AnimatedButton href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0" />
                <a
                  href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card/20 px-6 py-3 text-xl font-bold text-foreground transition-colors hover:bg-card/40 md:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com consultor
                </a>
              </div>
            </AnimationContainer>
            <AnimationContainer animation="fadeUp" delay={3}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">
                    Pagamento 100% Seguro
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">
                    Últimas Vagas Disponíveis
                  </span>
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
