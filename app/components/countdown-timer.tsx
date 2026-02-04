"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="bg-primary rounded-2xl p-6 max-w-2xl mx-auto">
      <p className="text-center text-primary-foreground/80 text-sm font-medium mb-4 uppercase tracking-wider">
        O evento começa em
      </p>
      <div className="flex justify-center gap-4 sm:gap-8">
        {timeBlocks.map((block, index) => (
          <div key={block.label} className="flex items-center gap-4 sm:gap-8">
            <div className="text-center">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[60px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl font-bold text-primary-foreground">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/70 mt-2 block">
                {block.label}
              </span>
            </div>
            {index < timeBlocks.length - 1 && (
              <span className="text-2xl sm:text-4xl font-bold text-primary-foreground/50 -mt-6">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
