"use client";

import Image from "next/image";
import { Camera, Users, Mic2, Award, Sparkles, Heart, X } from "lucide-react";
import { useState, useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimationContainer from "@/components/globals/animate";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Wrapper from "@/components/globals/wrapper";

const galleryItems = [
  {
    title: "Networking de Alto Nível",
    description: "Conecte-se com nutricionistas de todo o Brasil",
    image: "/images/06467.jpg",
    icon: <Users className="h-4 w-4 text-primary" />,
    className: "md:col-span-2",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            A Formação Nutri Expert Experience SP oferece momentos únicos de
            networking com nutricionistas de todo o Brasil. Durante os dois dias
            de evento, você terá a oportunidade de conectar-se com profissionais
            que compartilham os mesmos objetivos de crescimento e transformação.
          </p>
          <p>
            Esses encontros são fundamentais para construir uma rede sólida de
            contatos, trocar experiências e criar parcerias estratégicas que
            podem impulsionar sua carreira para o próximo nível.
          </p>
        </div>
      );
    },
  },
  {
    title: "Palestras Transformadoras",
    description: "Conteúdo estratégico e aplicável",
    image: "/images/09445.jpg",
    icon: <Mic2 className="h-4 w-4 text-primary" />,
    className: "",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Nossas palestras são cuidadosamente estruturadas para entregar
            conteúdo estratégico e totalmente aplicável. Cada apresentação é
            pensada para que você saia com clareza, direção e um plano de ação
            concreto.
          </p>
          <p>
            Nada de teoria solta ou motivação vazia. Aqui você encontra
            metodologias testadas, estratégias comprovadas e ferramentas
            práticas que podem ser implementadas imediatamente na sua rotina
            profissional.
          </p>
        </div>
      );
    },
  },
  {
    title: "Experiência Única",
    description: "Momentos marcantes e inspiradores",
    image: "/images/06913.jpg",
    icon: <Sparkles className="h-4 w-4 text-primary" />,
    className: "",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            A Nutri Expert Experience SP não é apenas um evento, é uma
            experiência transformadora. Cada momento é cuidadosamente planejado
            para criar memórias marcantes e inspiração duradoura.
          </p>
          <p>
            Do ambiente acolhedor às interações significativas, tudo foi pensado
            para que você viva uma experiência única que vai além do aprendizado
            técnico, tocando também na sua mentalidade e propósito profissional.
          </p>
        </div>
      );
    },
  },
  {
    title: "Aprendizado Prático",
    description: "Metodologia aplicável imediatamente",
    image: "/images/07082.jpg",
    icon: <Award className="h-4 w-4 text-primary" />,
    className: "md:col-span-2",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Nossa metodologia foi desenvolvida para ser aplicada imediatamente.
            Durante a formação, você não apenas aprende conceitos, mas também
            pratica, estrutura e sai com um plano de ação personalizado para seu
            negócio.
          </p>
          <p>
            Cada estratégia apresentada é acompanhada de exemplos reais, casos
            de sucesso e ferramentas práticas que você pode usar desde o
            primeiro dia após o evento. O foco está em resultados mensuráveis e
            crescimento sustentável.
          </p>
        </div>
      );
    },
  },
  {
    title: "Comunidade Forte",
    description: "Nutricionistas unidas pelo crescimento",
    image: "/images/07165.jpg",
    icon: <Heart className="h-4 w-4 text-primary" />,
    className: "",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            A comunidade Nutri Expert é formada por nutricionistas comprometidas
            com o crescimento próprio e coletivo. Durante o evento, você faz
            parte de uma rede de apoio mútuo, onde cada participante contribui
            para o sucesso de todas.
          </p>
          <p>
            Essa conexão vai além dos dois dias de evento. Você terá acesso a
            grupos exclusivos, encontros periódicos e uma rede de profissionais
            que continuam se apoiando e crescendo juntas mesmo após a formação.
          </p>
        </div>
      );
    },
  },
  {
    title: "Transformação Real",
    description: "Resultados que mudam carreiras",
    image: "/images/00616.jpg",
    icon: <Camera className="h-4 w-4 text-primary" />,
    className: "",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            A Nutri Expert Experience SP não promete apenas inspiração, mas
            transformação real e mensurável. Nutricionistas que participaram de
            edições anteriores relatam mudanças significativas em seus negócios,
            faturamento e posicionamento profissional.
          </p>
          <p>
            Esses resultados são fruto de uma metodologia comprovada, conteúdo
            estratégico e uma mentalidade de crescimento que é desenvolvida ao
            longo dos dois dias de imersão. Você sai do evento com clareza,
            direção e ferramentas para transformar sua carreira.
          </p>
        </div>
      );
    },
  },
];

export function EventGallery() {
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-100 p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[600px] h-full md:h-fit md:max-h-[90vh] flex flex-col bg-card border border-border sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-3 right-3 z-10 flex items-center justify-center bg-card/90 border border-border rounded-full h-10 w-10 hover:bg-primary/10 transition-colors backdrop-blur"
                onClick={() => setActive(null)}
              >
                <X className="h-5 w-5 text-foreground" />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </motion.div>

              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-foreground mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-sm md:text-base flex flex-col gap-4"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <section className="bg-background py-20">
        <Wrapper>
          <AnimationContainer animation="fadeUp" delay={0}>
            <div className="mb-6 text-center sm:text-right">
              <h2 className="text-4xl font-thin leading-tight tracking-tight text-foreground sm:w-full sm:text-5xl lg:text-6xl">
                <span className="relative inline-block">
                  <span className="text-primary">Momentos</span>
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
                das Edições Anteriores
              </h2>
            </div>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Confira a energia e o clima transformador que você vai vivenciar
                no evento
              </p>
            </div>
          </AnimationContainer>

          <BentoGrid className="mx-0 w-full max-w-none md:auto-rows-[20rem]">
            {galleryItems.map((item, index) => (
              <AnimationContainer
                key={index}
                animation="scaleUp"
                delay={index * 0.15}
              >
                <motion.div layoutId={`card-${item.title}-${id}`}>
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={
                      <motion.div
                        layoutId={`image-${item.title}-${id}`}
                        className="relative h-full min-h-[12rem] w-full overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-card"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/bento:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    }
                    icon={item.icon}
                    className={item.className}
                    onClick={() => setActive(item)}
                  />
                </motion.div>
              </AnimationContainer>
            ))}
          </BentoGrid>
        </Wrapper>
      </section>
    </>
  );
}
