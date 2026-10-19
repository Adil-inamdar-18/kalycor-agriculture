import Link from "next/link";
import { Logo } from "./Logo";
import { businesses, nav, site } from "@/content/site";

export function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Agriculture Products", href: "/products" },
    { label: "Seeds", href: "/seeds" },
    { label: "Crop Lifecycle", href: "/crop-lifecycle" },
    { label: "Agricultural Solutions", href: "/solutions" },
    { label: "Our Process", href: "/process" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact Us", href: "/contact" },
  ];
  void nav;
  return (
    <footer className="bg-humus text-paper">
      <div className="wrap grid gap-10 py-14 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-paper/70">{site.description}</p>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-paper/70 underline-offset-4 hover:text-sprout hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-semibold">Explore</h2>
          <ul className="mt-4 space-y-2 text-paper/70">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sprout">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-lg font-semibold">Our Businesses</h2>
          <ul className="mt-4 space-y-2 text-paper/70">
            {businesses.map((b) => (
              <li key={b.name}>
                <a
                  href={b.href}
                  {...(b.current
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="hover:text-sprout"
                >
                  {b.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold">Contact</h2>
          <address className="mt-4 space-y-2 break-words not-italic text-paper/70">
            <p>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-sprout"
              >
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-sprout"
              >
                {site.contact.email}
              </a>
            </p>
            <p>{site.contact.location}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Naturiza Agro. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-sprout">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sprout">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
