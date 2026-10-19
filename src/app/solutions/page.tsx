import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CTABand, Intro } from "@/components/Sections";
import { Placeholder } from "@/components/Placeholder";
import { solutions } from "@/content/site";
export const metadata = pageMeta(
  "Agricultural Solutions",
  "Agricultural solutions from Naturiza Agro across the crop lifecycle, from seed supply to distribution.",
  "/solutions",
);
export default function Solutions() {
  return (
    <>
      <PageHero
        title="Agricultural Solutions"
        intro="Ways we can support your operation. The exact service list should be confirmed with the client."
      />
      <section className="py-16 sm:py-32">
        <div className="wrap">
          <Intro title="How we can help">
            <p>
              Each solution is editable and should reflect only what the
              business offers.
            </p>
          </Intro>
          <ul className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
            {solutions.map((s) => (
              <li
                key={s.title}
                className="rounded-3xl border border-forest-900/15 p-6 transition sm:p-8-colors hover:border-leaf hover:bg-white"
              >
                <h3 className="text-2xl font-semibold text-forest-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-stone">{s.text}</p>
                <Placeholder className="mt-4" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
