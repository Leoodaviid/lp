"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";

const faqs = [
  {
    question: "Onde será o evento?",
    answer:
      "A Formação Nutri Expert Experience SP acontecerá presencialmente na Plataforma Global – Alphaville / São Paulo. O endereço completo será enviado após a confirmação da inscrição.",
  },
  {
    question: "Quais são as datas e horários?",
    answer:
      "O evento acontece nos dias 10 e 11 de abril, em dois dias de imersão completa, com programação intensa durante todo o dia.",
  },
  {
    question: "Para quem é essa formação?",
    answer:
      "Para nutricionistas que desejam escalar faturamento, construir uma metodologia autoral, se posicionar como referência, criar produtos e atuar no digital, além de desenvolver uma mentalidade de crescimento. Se você quer sair do comum e jogar o jogo do alto valor, essa formação é para você.",
  },
  {
    question: "Preciso ser Nutri Digital para participar?",
    answer:
      "Não. A formação foi pensada tanto para nutricionistas que ainda não atuam no digital, quanto para aquelas que já estão e querem estruturar, escalar e profissionalizar sua atuação.",
  },
  {
    question: "Esse evento é um congresso?",
    answer:
      "Não. A Formação Nutri Expert Experience não é um congresso tradicional. É uma formação estratégica, com foco em aplicação prática, negócios, posicionamento, mentalidade e crescimento profissional.",
  },
  {
    question: "Vou sair com algo prático ou é só conteúdo teórico?",
    answer:
      "Você sai com clareza, direção, estratégia, visão de negócios e um plano de ação aplicável. Nada de conteúdo genérico ou motivacional vazio.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/30 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mb-6 text-center sm:text-left">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Perguntas{" "}
              <span className="relative inline-block">
                <span className="text-primary">frequentes</span>
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Tire suas dúvidas sobre o evento e garanta sua participação
            </p>
          </div>
        </AnimationContainer>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimationContainer
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimationContainer>
            ))}
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
}
