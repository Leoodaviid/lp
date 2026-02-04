"use client";

import { useState, useEffect } from "react";
import { Flame } from "lucide-react";

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-04-10T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-primary py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-primary-foreground text-sm font-medium">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 animate-pulse" />
          <span className="font-bold">VAGAS LIMITADAS</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
        <div className="flex items-center gap-3">
          <span>Evento em:</span>
          <div className="flex items-center gap-1 font-mono font-bold">
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">
              {String(timeLeft.days).padStart(2, "0")}d
            </span>
            <span>:</span>
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            <span>:</span>
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            <span>:</span>
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
