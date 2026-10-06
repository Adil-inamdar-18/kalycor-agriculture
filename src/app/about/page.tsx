import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { AboutSplit, CTABand, Intro, WhyGrid } from "@/components/Sections";
import { Placeholder } from "@/components/Placeholder";
export const metadata = pageMeta("About Us", "Learn about Kalycor Agriculture, the agriculture business of the Kalycor group, focused on agricultural products and the complete crop lifecycle.", "/about");
export default function About() {
  return (<>
    <PageHero title="About Kalycor Agriculture" intro="The agriculture business of the Kalycor group, focused on products and the full crop lifecycle." />
    <AboutSplit cta={false} />
    <section className="pb-24 sm:pb-32"><div className="wrap grid gap-12 lg:grid-cols-2">
      <div><h2 className="h-section text-forest-900">What we focus on</h2></div>
      <div className="space-y-5 text-lg text-stone"><p>Agricultural products and the complete crop lifecycle, starting from seeds and continuing through each stage of crop growth.</p><p>Founding story, leadership, team size and locations are left blank on purpose. Add them when confirmed. <Placeholder /></p></div>
    </div></section>
    <WhyGrid /><CTABand />
  </>);
}
