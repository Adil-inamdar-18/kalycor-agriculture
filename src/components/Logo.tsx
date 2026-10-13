import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Naturiza Agro home"
      className="flex shrink-0 items-center gap-1.5"
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center">
        <Image
          src="/images/kalycor-logo-2.png"
          alt=""
          width={80}
          height={80}
          className="h-16 w-16 object-contain"
          priority
        />
      </span>

      <span
        className={`whitespace-nowrap font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl ${
          light ? "text-paper" : "text-forest-900"
        }`}
      >
        Naturiza{" "}
        <span className={light ? "text-sprout" : "text-leaf"}>Agro</span>
      </span>
    </Link>
  );
}
