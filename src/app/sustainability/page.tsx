import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/Sections";
import { ImageReveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { sustainability } from "@/content/site";
export const metadata = pageMeta(
  "Sustainability",
  "Naturiza Agro's approach to responsible agriculture, resource efficiency, sustainable practices and quality.",
  "/sustainability",
);
export default function Sustainability() {
  return (
    <>
      <PageHero
        title="Sustainability"
        intro="Responsible agriculture, described honestly. No claim appears here until the client confirms it."
      />
      <section className="py-16 sm:py-32">
        <div className="wrap grid gap-10 sm:gap-14 lg:grid-cols-2">
          <ImageReveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/sustainability.jpg"
              alt="Green landscape representing sustainable farming"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <ul className="divide-y divide-forest-900/15 border-y border-forest-900/15">
            {sustainability.map((s) => (
              <li key={s.title} className="py-6">
                <h2 className="text-2xl font-semibold text-forest-900">
                  {s.title}
                </h2>
                <p className="mt-2 text-stone">{s.text}</p>
                <Placeholder className="mt-3" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
