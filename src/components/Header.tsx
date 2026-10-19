"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { businesses, nav } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper shadow-[0_1px_0_rgba(23,54,31,0.12)]">
      <div className="wrap flex h-[72px] items-center justify-between">
        <Logo light={false} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex items-center rounded-full px-3 py-2 text-[15px] font-medium text-forest-900 transition-colors hover:bg-mist xl:px-4",
                  isActive(item.href) &&
                    "underline decoration-leaf decoration-2 underline-offset-8",
                )}
              >
                {item.label}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="rounded-2xl bg-paper p-2 shadow-xl ring-1 ring-forest-900/10">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-[15px] text-forest-900 hover:bg-mist"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="rounded-full px-3 py-2 text-[15px] font-medium text-forest-900 transition-colors hover:bg-mist xl:px-4"
            >
              Our Businesses
            </button>

            <div className="invisible absolute right-0 top-full w-[340px] translate-y-1 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <ul className="rounded-2xl bg-paper p-2 shadow-xl ring-1 ring-forest-900/10">
                {businesses.map((b) => (
                  <li key={b.name}>
                    <a
                      href={b.href}
                      {...(b.current
                        ? { "aria-current": "true" as const }
                        : {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                      className="block rounded-xl px-4 py-3 hover:bg-mist"
                    >
                      <span className="block font-display text-base font-semibold text-forest-900">
                        {b.name}
                      </span>
                      <span className="block text-sm text-stone">
                        {b.blurb}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/contact"
            className="ml-3 inline-flex min-h-11 items-center rounded-full bg-sprout px-6 text-[15px] font-semibold text-forest-950 transition-colors hover:bg-leaf-light"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-forest-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 bg-current transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 bg-current transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{
              clipPath: "circle(0% at calc(100% - 36px) 36px)",
            }}
            animate={{
              clipPath: "circle(150% at calc(100% - 36px) 36px)",
            }}
            exit={{
              clipPath: "circle(0% at calc(100% - 36px) 36px)",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 -z-10 overflow-y-auto bg-forest-950 px-5 pb-10 pt-24 text-paper lg:hidden"
          >
            <ul className="space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Agriculture Products", href: "/products" },
                { label: "Seeds", href: "/seeds" },
                { label: "Crop Lifecycle", href: "/crop-lifecycle" },
                { label: "Agricultural Solutions", href: "/solutions" },
                { label: "Our Process", href: "/process" },
                { label: "Sustainability", href: "/sustainability" },
              ].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className="block border-b border-white/10 py-3 font-display text-2xl font-medium"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-paper/60">Our Businesses</p>

            <ul className="mt-2 space-y-2">
              {businesses.map((b) => (
                <li key={b.name}>
                  <a
                    href={b.href}
                    {...(b.current
                      ? {}
                      : {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                    className="text-lg text-sprout"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-sprout font-semibold text-forest-950"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
