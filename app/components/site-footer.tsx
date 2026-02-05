"use client";

import Wrapper from "@/components/globals/wrapper";
import AnimationContainer from "@/components/globals/animate";
import { Share2, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Sobre o Evento", href: "#about" },
  { label: "Cronograma", href: "#schedule" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Políticas de Privacidade", href: "#" },
];

const supportLinks = [
  {
    label: "suporte@nutriexpert.com.br",
    icon: Mail,
  },
  {
    label: "WhatsApp: (11) 99999-9999",
    icon: Phone,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-16">
      <Wrapper>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <AnimationContainer animation="fadeUp" delay={0}>
            <div className="md:col-span-2">
              <h3 className="mb-6 text-2xl font-thin tracking-tight text-foreground font-display">
                NUTRI EXPERT <span className="text-primary">EXPERIENCE</span> SP
              </h3>
              <p className="mb-8 max-w-sm text-muted-foreground">
                A maior plataforma de educação em negócios e marketing para
                profissionais de nutrição que desejam liberdade, lucro e
                propósito.
              </p>
              <div className="flex gap-4">
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card/70 text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  href="#"
                >
                  <Share2 className="h-4 w-4" />
                </a>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card/70 text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  href="#"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card/70 text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  href="#"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1}>
            <div>
              <h4 className="mb-6 font-bold text-primary">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a className="hover:text-foreground" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={2}>
            <div>
              <h4 className="mb-6 font-bold text-primary">Suporte</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {supportLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>
            © 2024 Nutri Expert Experience. Todos os direitos reservados. CNPJ:
            00.000.000/0001-00
          </p>
          <p>Desenvolvido com foco em alta conversão.</p>
        </div>
      </Wrapper>
    </footer>
  );
}
