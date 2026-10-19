"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { clipPath: "inset(0 0 100% 0)" },
          shown: { clipPath: "inset(0 0 0% 0)" },
        }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}