import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CTABand, ProductGrid } from "@/components/Sections";
import { productCategories } from "@/content/site";
export const metadata = pageMeta("Agriculture Products", "Explore the agricultural products offered by Kalycor Agriculture. Catalogue is easy to extend as products are confirmed.", "/products");
export default function Products() {
  return (<>
    <PageHero title="Agriculture Products" intro="The product catalogue will be listed here. Edit src/content/site.ts to add or change entries." />
    <section className="py-24 sm:py-32"><div className="wrap"><ProductGrid items={productCategories} /></div></section>
    <CTABand title="Looking for a specific product?" text="Tell us what you need and we will confirm availability." />
  </>);
}
