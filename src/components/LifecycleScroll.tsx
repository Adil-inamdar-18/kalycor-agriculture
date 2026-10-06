"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { PlantArt } from "./PlantArt";
import { lifecycle } from "@/content/site";
import { cn } from "@/lib/cn";

/** Scroll-driven lifecycle: the plant grows and the active stage changes as the page scrolls. */
export function LifecycleScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [active, setActive] = useState(0);
  const n = lifecycle.length;
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(n - 1, Math.floor(v * n))));

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / n) * range, behavior: "smooth" });
  };
  const stage = lifecycle[active];

  return (
    <div ref={ref} className="relative bg-forest-950 text-paper" style={{ height: `${n * 70 + 100}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-16">
        <div className="wrap grid items-center gap-4 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm text-sprout">Stage {active + 1} of {n}</p>
            <AnimatePresence mode="wait">
              <motion.div key={stage.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="min-h-[190px] sm:min-h-[230px]">
                <h2 className="mt-2 font-display text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl">{stage.name}</h2>
                <p className="lead mt-4 max-w-lg text-paper/75">{stage.text}</p>
                <p className="mt-3 text-sm text-wheat">{stage.focus}</p>
              </motion.div>
            </AnimatePresence>
            <ol className="mt-4 flex flex-wrap gap-1.5" aria-label="Lifecycle stages">
              {lifecycle.map((s, i) => (
                <li key={s.id}>
                  <button onClick={() => jump(i)} aria-current={i === active ? "step" : undefined} className={cn("min-h-9 rounded-full border px-3 text-[13px] transition-colors", i === active ? "border-sprout bg-sprout text-forest-950" : i < active ? "border-leaf/60 text-paper/80 hover:bg-white/10" : "border-white/20 text-paper/50 hover:bg-white/10")}>
                    {s.name}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 mx-auto w-full max-w-[200px] sm:max-w-[300px] lg:order-2 lg:max-w-[460px]">
            <PlantArt progress={smooth} className="h-auto max-h-[38svh] w-full lg:max-h-[68svh]" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10"><motion.div className="h-full origin-left bg-sprout" style={{ scaleX: smooth }} /></div>
      </div>
    </div>
  );
}
