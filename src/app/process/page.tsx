import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CTABand, ProcessTimeline } from "@/components/Sections";
export const metadata = pageMeta(
  "Our Process",
  "How Naturiza Agro works through the agricultural lifecycle, from understanding your requirement to delivery.",
  "/process",
);
export default function Process() {
  return (
    <>
      <PageHero
        title="Our Process"
        intro="How we work with you through the agricultural lifecycle."
      />
      <section className="py-16 sm:py-32">
        <div className="wrap">
          <ProcessTimeline />
        </div>
      </section>
      <CTABand />
    </>
  );
}
