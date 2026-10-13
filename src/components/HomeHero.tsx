"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { PlantArt } from "./PlantArt";
import { Button } from "./Button";

const words = ["From", "Seed", "to", "Harvest,", "Growing", "Possibilities."];

export function HomeHero() {
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      progress.set(0.9);
      return;
    }

    const animation = animate(progress, 0.9, {
      duration: 4.2,
      delay: 0.4,
      ease: [0.45, 0, 0.2, 1],
    });

    return () => animation.stop();
  }, [progress, reduce]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-forest-950 text-paper"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_80%,#1F4A2B_0%,#0F2417_60%)]" />

      <div className="wrap grid w-full grid-cols-1 items-center gap-8 pb-12 pt-28 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-16 lg:pt-28">
        {/* Hero Content */}
        <div className="relative z-10 min-w-0">
          <h1
            className="h-display max-w-4xl"
            aria-label="From Seed to Harvest, Growing Possibilities."
          >
            {words.map((word, index) => (
              <span
                key={word}
                className="mr-[0.22em] inline-block overflow-hidden align-bottom"
                aria-hidden="true"
              >
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lead mt-6 max-w-xl text-paper/75 sm:mt-8"
          >
            Naturiza Agro focuses on agricultural products and crop lifecycle
            solutions, supporting every stage from the first seed to
            distribution.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-7 flex flex-wrap gap-3 sm:mt-9"
          >
            <Button href="/products" variant="light">
              Explore Agriculture
            </Button>

            <Button href="/contact" variant="outline" className="text-paper">
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Plant Illustration */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none"
        >
          <PlantArt progress={progress} className="block h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}
