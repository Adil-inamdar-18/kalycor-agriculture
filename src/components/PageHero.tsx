import type { ReactNode } from "react";
export function PageHero({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 pb-16 pt-32 text-paper sm:pb-28 sm:pt-48">
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 w-full text-forest-900"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${20 + i * 6} Q300 ${i * 6} 600 ${20 + i * 6} T1200 ${20 + i * 6}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        ))}
      </svg>
      <div className="wrap relative">
        <h1 className="max-w-4xl break-words font-display text-[clamp(2.25rem,11vw,3rem)] font-semibold leading-[1] sm:text-7xl">
          {title}
        </h1>
        <p className="lead mt-6 max-w-2xl text-paper/75">{intro}</p>
        {children && (
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
        )}
      </div>
    </section>
  );
}
