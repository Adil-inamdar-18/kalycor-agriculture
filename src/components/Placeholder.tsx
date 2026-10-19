import { SHOW_PLACEHOLDERS } from "@/content/site";

export function Placeholder({ className = "" }: { className?: string }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <span
      className={`inline-block rounded-full border border-wheat-deep/50 bg-paper px-2 py-0.5 text-[11px] font-medium text-wheat-deep ${className}`}
    >
      Placeholder
    </span>
  );
}
