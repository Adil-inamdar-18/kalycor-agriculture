import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "solid" | "outline" | "light"; className?: string };
const styles = {
  solid: "bg-forest-900 text-paper hover:bg-forest-700",
  light: "bg-sprout text-forest-950 hover:bg-paper",
  outline: "border border-current hover:bg-white/10",
};
export function Button({ href, children, variant = "solid", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-colors duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
