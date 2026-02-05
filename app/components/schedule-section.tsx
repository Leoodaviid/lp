"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";

const schedule = [
  {
    label: "Dia 1",
    date: "10 de Abril",
    items: [
      {
        time: "08:30",
        title: "Abertura Oficial",
        description: "Boas-vindas e contexto da imersão.",
      },
      {
        time: "09:10",
        title: "Método Autoral – Cybelle Monteiro",
        description: "Estruturação do método e posicionamento inicial.",
      },
      {
        time: "10:20",
        title: "Construção de Comunidade – Thaísa Leal",
        description: "Audiência qualificada e engajamento real.",
      },
      {
        time: "12:00",
        title: "Almoço",
        description: "Pausa para networking e recarga.",
      },
      {
        time: "13:30",
        title: "Escalando seu Faturamento – Mateus Cortez",
        description: "Estratégias para crescer com previsibilidade.",
      },
      {
        time: "15:00",
        title: "Aluna Profissional Mentory",
        description: "Caso real e insights práticos.",
      },
      {
        time: "16:00",
        title: "Intervalo",
        description: "Pausa rápida para café.",
      },
      {
        time: "16:30",
        title: "Posicionamento de Marca – Cybelle Monteiro",
        description: "Marca autoral e diferenciação no mercado.",
      },
    ],
  },
  {
    label: "Dia 2",
    date: "11 de Abril",
    items: [
      {
        time: "09:00",
        title: "Posicionamento de Marca Autoral – Cybelle Monteiro",
        description: "Clareza de mensagem e percepção de valor.",
      },
      {
        time: "10:10",
        title: "Mentalidade Nutri Expert – Mateus Cortez",
        description: "Crescimento, decisão e liderança.",
      },
      {
        time: "12:00",
        title: "Almoço",
        description: "Pausa para networking e recarga.",
      },
      {
        time: "13:30",
        title:
          "Se Tornando Referência na Nutrição – Palestrante Convidada (a revelar)",
        description: "Autoridade e posicionamento no mercado.",
      },
      {
        time: "15:00",
        title: "Nutri Digital – Mateus Cortez",
        description: "Produtos, ofertas e presença digital.",
      },
      {
        time: "16:00",
        title: "Intervalo",
        description: "Pausa rápida para café.",
      },
      {
        time: "16:30",
        title: "Plano Nutri 50K – Cybelle Monteiro",
        description: "Plano prático para atingir 50k/mês.",
      },
    ],
  },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-secondary/40 py-24 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <div className="mx-auto mb-16 max-w-3xl text-center sm:ml-auto sm:mr-0 sm:text-right">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Programação{" "}
              <span className="relative inline-block">
                <span className="text-primary">Completa</span>
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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {schedule.map((day, index) => (
            <AnimationContainer
              key={day.label}
              animation="fadeUp"
              delay={index * 0.3}
              className="h-full"
            >
              <div className="h-full rounded-[2.5rem] border border-border bg-card p-8 shadow-xl lg:p-12">
                <div className="mb-10 flex items-center justify-between border-b border-border pb-6">
                  <span className="text-2xl font-black text-foreground">
                    {day.label}
                  </span>
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                    {day.date}
                  </span>
                </div>
                <div className="space-y-10">
                  {day.items.map((item) => (
                    <div key={item.time} className="group flex gap-6">
                      <div className="pt-1 text-xl font-black text-primary transition-transform group-hover:scale-110">
                        {item.time}
                      </div>
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
