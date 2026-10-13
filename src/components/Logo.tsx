import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Naturiza Agro home"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/images/logo-4.png"
        alt="Naturiza Agro"
        width={240}
        height={160}
        className="h-24 w-36 shrink-0 object-contain sm:h-28 sm:w-48"
        priority
      />
    </Link>
  );
}
