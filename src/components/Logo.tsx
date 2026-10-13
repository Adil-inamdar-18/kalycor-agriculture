import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Green Harvest Organic Farms home"
      className="flex shrink-0 items-center gap-2"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <Image
          src="/images/kalycor-logo-3.png"
          alt=""
          width={64}
          height={64}
          className="h-14 w-14 object-contain"
          priority
        />
      </span>

      <span className="flex flex-col gap-1 whitespace-nowrap">
        <span
          className={`font-display text-xl font-bold leading-none tracking-tight sm:text-2xl ${
            light ? "text-paper" : "text-forest-900"
          }`}
        >
          GREEN HARVEST
        </span>

        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${
            light ? "text-[#B5D96A]" : "text-[#6B9844]"
          }`}
        >
          ORGANIC FARMS
        </span>
      </span>
    </Link>
  );
}
