"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimationContainerProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp";
  delay?: number;
}

const getAnimationVariants = (animation: string) => {
  switch (animation) {
    case "fadeUp":
      return { opacity: 0, y: 16 };
    case "fadeDown":
      return { opacity: 0, y: -16 };
    case "fadeLeft":
      return { opacity: 0, x: -16 };
    case "fadeRight":
      return { opacity: 0, x: 16 };
    case "scaleUp":
      return { opacity: 0, scale: 0.97 };
    default:
      return { opacity: 0, y: 16 };
  }
};

const AnimationContainer = ({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={className}
      initial={getAnimationVariants(animation)}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: delay * 0.12,
        ease: [0.21, 0.61, 0.35, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
