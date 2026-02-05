"use client";

import Wrapper from "@/components/globals/wrapper";
import { Headset } from "lucide-react";

const navLinks = [
  { label: "O Evento", href: "#about" },
  { label: "Vantagens", href: "#benefits" },
  { label: "Mentores", href: "#mentors" },
  { label: "Programação", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-16 md:top-10 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Wrapper className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="text-xs md:text-xl font-black tracking-tight text-foreground">
            NUTRI EXPERT <span className="text-primary">EXPERIENCE</span> SP
          </h2>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="hidden items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary lg:flex"
            href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Headset className="h-4 w-4" />
            Dúvidas?
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=558597526586&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+forma%C3%A7%C3%A3o+Nutri+Expert+SP&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-6 py-2 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
          >
            GARANTIR VAGA
          </a>
        </div>
      </Wrapper>
    </header>
  );
}
