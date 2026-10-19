import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
export const metadata = pageMeta(
  "Terms & Conditions",
  "Terms & Conditions for Naturiza Agro.",
  "/terms",
);
export default function Page() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        intro="Draft placeholder. Replace with text reviewed by the client's legal adviser before launch."
      />
      <section className="py-16 sm:py-24">
        <div className="wrap max-w-3xl space-y-4 text-stone">
          <p>Add the approved Terms & Conditions here.</p>
        </div>
      </section>
    </>
  );
}
