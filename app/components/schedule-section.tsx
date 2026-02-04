"use client";

import AnimationContainer from "@/components/globals/animate";
import Wrapper from "@/components/globals/wrapper";

const schedule = [
  {
    label: "DIA 01",
    date: "10 de Abril",
    items: [
      {
        time: "08:30",
        title: "Credenciamento & Welcome Coffee",
        description:
          "Inicie sua jornada com networking de alto nível e café gourmet.",
      },
      {
        time: "09:30",
        title: "Abertura: O Novo Mercado",
        description:
          "As grandes janelas de oportunidade para nutricionistas em 2024 e 2025.",
      },
      {
        time: "11:00",
        title: "Branding de Autoridade",
        description:
          "Construindo um posicionamento que elimina a concorrência por preço.",
      },
      {
        time: "14:00",
        title: "Método de Vendas High Ticket",
        description:
          "Como vender programas de 4, 5 ou 10 mil reais com naturalidade.",
      },
    ],
  },
  {
    label: "DIA 02",
    date: "11 de Abril",
    items: [
      {
        time: "09:00",
        title: "Tráfego & Escala Digital",
        description:
          "Como atrair leads qualificados todos os dias para seu WhatsApp.",
      },
      {
        time: "11:00",
        title: "Operação & Equipes",
        description:
          "Saindo do operacional e construindo uma equipe que vende para você.",
      },
      {
        time: "14:30",
        title: "Workshop: Plano 50K",
        description:
          "Desenhando seu próprio plano de ação personalizado para os próximos 90 dias.",
      },
      {
        time: "17:00",
        title: "Encerramento & Coquetel",
        description:
          "Momento de selar parcerias e celebrar o novo nível do seu negócio.",
      },
    ],
  },
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-secondary/40 py-24 scroll-mt-28">
      <Wrapper>
        <AnimationContainer animation="fadeUp" delay={0}>
          <h2 className="mb-16 text-4xl font-black text-foreground lg:text-5xl">
            Programação Completa
          </h2>
        </AnimationContainer>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {schedule.map((day, index) => (
            <AnimationContainer
              key={day.label}
              animation="fadeUp"
              delay={index * 0.3}
            >
              <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-xl lg:p-12">
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
