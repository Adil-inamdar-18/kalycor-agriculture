"use client";
import { useEffect } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { PlantArt } from "./PlantArt";
import { Button } from "./Button";

const words = ["From", "Seed", "to", "Harvest,", "Growing", "Possibilities."];

export function HomeHero() {
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) { progress.set(0.9); return; }
    const c = animate(progress, 0.9, { duration: 4.2, delay: 0.4, ease: [0.45, 0, 0.2, 1] });
    return () => c.stop();
  }, [progress, reduce]);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-950 text-paper">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_80%,#1F4A2B_0%,#0F2417_60%)]" />
      <div className="wrap grid w-full items-end gap-8 pb-16 pt-32 lg:grid-cols-[1.25fr_0.75fr] lg:pb-0 lg:pt-28">
        <div className="pb-4 lg:pb-24">
          <p className="mb-6 text-base font-medium text-sprout">Naturiza Agro</p>
          <h1 className="h-display" aria-label="From Seed to Harvest, Growing Possibilities.">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom" aria-hidden>
                <motion.span className="inline-block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="lead mt-8 max-w-xl text-paper/75">
            Kalycor Agriculture focuses on agricultural products and crop lifecycle solutions, supporting every stage from the first seed to distribution.
          </motion.p>
          <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-9 flex flex-wrap gap-3">
            <Button href="/products" variant="light">Explore Agriculture</Button>
            <Button href="/contact" variant="outline" className="text-paper">Contact Us</Button>
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-[360px] self-end lg:max-w-none">
          <PlantArt progress={progress} className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
