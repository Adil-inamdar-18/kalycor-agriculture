import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Placeholder } from "./Placeholder";
import { ImageReveal, Reveal } from "./Reveal";
import { why, sustainability, processSteps } from "@/content/site";

const tints = ["#2B6238", "#5E9B3A", "#9C7A27", "#3A2A1E", "#1F4A2B", "#6B8F3A"];

/** Stand-in for client photography: soft crop rows. Pass `src` to show a real photo. */
export function Media({ src, alt, index = 0, className = "" }: { src?: string; alt: string; index?: number; className?: string }) {
  if (src) return <Image src={src} alt={alt} fill sizes="(min-width:1024px) 40vw, 100vw" className={`object-cover ${className}`} />;
  const c = tints[index % tints.length];
  return (
    <div role="img" aria-label={alt} className={`absolute inset-0 ${className}`} style={{ background: c }}>
      <svg className="h-full w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 200 200" aria-hidden>
        {Array.from({ length: 16 }).map((_, i) => (<path key={i} d={`M-10 ${14 + i * 12} Q50 ${6 + i * 12 + (index % 3) * 4} 100 ${14 + i * 12} T210 ${14 + i * 12}`} fill="none" stroke="#fff" strokeWidth="1" />))}
      </svg>
    </div>
  );
}

export function Intro({ title, children }: { title: string; children: React.ReactNode }) {
  return (<div className="max-w-3xl"><h2 className="h-section text-forest-900">{title}</h2><div className="lead mt-5 text-stone">{children}</div></div>);
}

export function AboutSplit({ cta = true }: { cta?: boolean }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-br-[6rem]"><Image src="/images/agri-field.jpg" alt="Green wheat crop growing in an open field" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></ImageReveal>
        <Reveal>
          <h2 className="h-section text-forest-900">An agriculture business built around the whole crop journey.</h2>
          <p className="lead mt-6 text-stone">Naturiza Agro is part of the Kalycor group. It focuses on agricultural products and the complete crop lifecycle, starting from seeds and following the crop through each stage of growth.</p>
          <p className="mt-4 text-stone">Company history, scale and team details will be added here once confirmed. <Placeholder /></p>
          {cta && <Button href="/about" className="mt-8">Discover Our Agriculture Business</Button>}
        </Reveal>
      </div>
    </section>
  );
}

export function ProductGrid({ items, linkLabel = "Ask about this range" }: { items: { title: string; text: string }[]; linkLabel?: string }) {
  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <li key={p.title} className={i % 3 === 1 ? "lg:mt-14" : ""}>
          <Link href="/contact" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"><Media alt={`${p.title} image placeholder`} index={i} /></div>
              <span className="absolute bottom-3 left-3"><Placeholder /></span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-forest-900">{p.title}</h3>
            <p className="mt-2 max-w-sm text-stone">{p.text}</p>
            <span className="mt-3 inline-block text-[15px] font-semibold text-leaf underline-offset-4 group-hover:underline">{linkLabel}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ProcessTimeline({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l-2 border-leaf/40 pl-8 sm:pl-12">
      {processSteps.map((s, i) => (
        <li key={s.title} className="relative pb-12 last:pb-0">
          <span className={`absolute -left-[calc(2rem+9px)] top-1 flex h-4 w-4 rounded-full border-4 sm:-left-[calc(3rem+9px)] ${dark ? "border-leaf bg-forest-950" : "border-leaf bg-paper"}`} aria-hidden />
          <Reveal delay={0.05}>
            <p className="text-sm font-medium text-leaf">Step {i + 1}</p>
            <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{s.title}</h3>
            <p className={`mt-2 max-w-xl ${dark ? "text-paper/70" : "text-stone"}`}>{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function WhyGrid() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="wrap">
        <Intro title="Why choose Naturiza Agro"><p>Every point below is editable and should be replaced with claims the business can stand behind.</p></Intro>
        <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-forest-900/15 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <div key={w.title} className={`bg-paper p-8 transition-colors duration-300 hover:bg-white ${i === 0 ? "lg:col-span-1" : ""}`}>
              <dt className="font-display text-2xl font-semibold text-forest-900">{w.title}</dt>
              <dd className="mt-3 text-stone">{w.text}</dd>
              <Placeholder className="mt-4" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function SustainabilityBlock() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 text-paper sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="h-section">Growing with care for land and quality.</h2>
          <p className="lead mt-6 text-paper/75">Our approach to sustainability will be described here in the client&apos;s own words. We only make claims the business can support.</p>
          <Button href="/sustainability" variant="light" className="mt-8">Read about sustainability</Button>
        </div>
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {sustainability.map((s) => (
            <li key={s.title} className="py-6"><h3 className="text-2xl font-semibold">{s.title}</h3><p className="mt-2 text-paper/70">{s.text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CTABand({ title = "Let’s Grow Together.", text = "Tell us what you want to grow, source or supply, and we will get back to you." }: { title?: string; text?: string }) {
  return (
    <section className="bg-sprout py-24 text-forest-950 sm:py-32">
      <div className="wrap flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div><h2 className="h-display" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>{title}</h2><p className="lead mt-4 max-w-xl">{text}</p></div>
        <Button href="/contact">Contact Us</Button>
      </div>
    </section>
  );
}
