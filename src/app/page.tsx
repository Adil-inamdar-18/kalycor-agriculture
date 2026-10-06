import { HomeHero } from "@/components/HomeHero";
import { LifecycleScroll } from "@/components/LifecycleScroll";
import { AboutSplit, CTABand, Intro, Media, ProcessTimeline, ProductGrid, SustainabilityBlock, WhyGrid } from "@/components/Sections";
import { Button } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { productCategories, seedCategories } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSplit />
      <section className="pb-24 sm:pb-32">
        <div className="wrap">
          <Intro title="Agriculture products"><p>Our product catalogue is being finalised. The groups below are editable placeholders.</p></Intro>
          <div className="mt-14"><ProductGrid items={productCategories.slice(0, 3)} /></div>
          <Button href="/products" className="mt-14">See all products</Button>
        </div>
      </section>
      <section className="bg-humus py-24 text-paper sm:py-32">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="h-section">Everything begins with the seed.</h2>
            <p className="lead mt-6 text-paper/75">Seeds are a dedicated part of the business. Specific varieties will be listed once the client provides them.</p>
            <Button href="/seeds" variant="light" className="mt-8">Explore seeds</Button>
          </Reveal>
          <ul className="grid grid-cols-2 gap-4">
            {seedCategories.map((s, i) => (
              <li key={s.title} className="overflow-hidden rounded-2xl bg-forest-900/60">
                <div className="relative aspect-[4/3]"><Media alt={`${s.title} image placeholder`} index={i + 2} /></div>
                <div className="p-4"><h3 className="text-lg font-semibold">{s.title}</h3><Placeholder className="mt-2" /></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="lc"><h2 id="lc" className="sr-only">Complete crop lifecycle</h2><LifecycleScroll /></section>
      <section className="py-24 sm:py-32">
        <div className="wrap"><Intro title="Our agricultural process"><p>How we work through the crop journey, from understanding your requirement to delivery.</p></Intro><div className="mt-16"><ProcessTimeline /></div></div>
      </section>
      <SustainabilityBlock />
      <WhyGrid />
      <CTABand />
    </>
  );
}
