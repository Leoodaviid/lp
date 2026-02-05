"use client";
import { CSSProperties, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href?: string;
  title?: string;
}

export function AnimatedButton({
  href = "/auth/register",
  title = "GARANTIR MINHA VAGA",
}: AnimatedButtonProps) {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLElement | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const glow1 = glow1Ref.current;

    // Find the anchor element inside the Link
    const glow2Button = glow1?.querySelector("a") as HTMLElement | null;

    if (!glow1 || !glow2Button) return;

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    setIsHovering(true);

    const glow1Rect = glow1.getBoundingClientRect();
    const mouseX = event.clientX - glow1Rect.left;
    const mousePercentage = Math.min(Math.max(mouseX / glow1Rect.width, 0), 1);

    glow1.style.setProperty("--before-opacity", mousePercentage.toFixed(2));
    glow1.style.setProperty(
      "--after-opacity",
      (1 - mousePercentage).toFixed(2),
    );

    const buttonRect = glow2Button.getBoundingClientRect();
    const relativeMouseX = event.clientX - buttonRect.left;
    const translateX = (relativeMouseX / buttonRect.width) * 100 - 100;
    glow2Button.style.setProperty("--button-translate-x", `${translateX}%`);
  };

  const handleMouseLeave = () => {
    const glow1 = glow1Ref.current;
    const glow2Button = glow1?.querySelector("a") as HTMLElement | null;

    if (!glow1 || !glow2Button) return;

    setIsHovering(false);
    timeoutIdRef.current = setTimeout(() => {
      glow1.style.setProperty("--before-opacity", "1");
      glow1.style.setProperty("--after-opacity", "0");
      glow2Button.style.setProperty("--button-translate-x", "-10%");
    }, 1200);
  };

  return (
    <div
      ref={glow1Ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glow1 relative w-fit overflow-visible rounded-full p-0 z-1"
      style={
        {
          outline: "4px solid #FFFFFF4F",
          "--before-opacity": "1",
          "--after-opacity": "0",
        } as CSSProperties
      }
    >
      <Link
        href={href}
        className={`glow2 relative z-5 flex h-auto w-full items-center justify-center gap-3 overflow-hidden rounded-full border-[3px] border-white bg-[#D1D1D1] px-6 py-2 text-xl font-semibold transition-[2s] md:w-auto ${
          isHovering ? "hovering" : ""
        }`}
        style={
          {
            "--button-translate-x": "-10%",
          } as CSSProperties
        }
      >
        <span className="z-5 flex items-center self-center whitespace-nowrap text-black">
          {title}
          <ArrowRight className="ml-2 size-6" />
        </span>
      </Link>
    </div>
  );
}
