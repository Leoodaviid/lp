"use client";

import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-1">
              Nutri Expert Experience SP
            </h3>
            <p className="text-sm text-muted-foreground">
              Transformando carreiras de nutricionistas
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Ainda está em dúvida?</span>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Falar com o time comercial
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="p-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © 2025 Nutri Expert. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Este site não faz parte do site do Facebook ou Facebook Inc. e não
              é endossado pelo Facebook.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
