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
    <section id="faq" className="py-24 bg-secondary/30 scroll-mt-28">
      <Wrapper>
        <div className="mx-auto max-w-3xl">
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="border-primary/50 text-primary mb-4"
            >
              Dúvidas
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
              Perguntas <span className="text-primary">frequentes</span>
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre o evento e garanta sua participação
            </p>
          </div>
        </AnimationContainer>

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
