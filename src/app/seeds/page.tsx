import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CTABand, Intro, ProductGrid } from "@/components/Sections";
import { seedCategories } from "@/content/site";
export const metadata = pageMeta("Seeds", "Seeds from Naturiza Agro: the starting point of the crop lifecycle. Categories and varieties listed as confirmed.", "/seeds");
export default function Seeds() {
  return (<>
    <PageHero title="Seeds" intro="The crop lifecycle starts here. Seed categories are placeholders until the client confirms the range." />
    <section className="py-24 sm:py-32"><div className="wrap"><Intro title="Seed categories"><p>No varieties are named on this page because none have been provided yet.</p></Intro><div className="mt-14"><ProductGrid items={seedCategories} linkLabel="Ask about seeds" /></div></div></section>
    <CTABand title="Let’s plan your next crop." text="Share what you plan to grow and we will talk through seed options." />
  </>);
}
