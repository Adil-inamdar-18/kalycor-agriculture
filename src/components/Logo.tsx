import Image from "next/image";
import Link from "next/link";
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Kalycor Agriculture home"
      className="flex items-center gap-2.5"
    >
      <span className="flex h-10 w-12 items-center justify-center rounded-lg bg-paper">
        <Image
          src="/images/kalycor-logo.png"
          alt=""
          width={40}
          height={31}
          className="h-7 w-auto"
          priority
        />
      </span>
      <span
        className={`font-display text-xl font-semibold leading-none ${light ? "text-paper" : "text-forest-900"}`}
      >
        Naturiza {" "}
        <span className={light ? "text-sprout" : "text-leaf"}>Agro</span>
      </span>
    </Link>
  );
}
