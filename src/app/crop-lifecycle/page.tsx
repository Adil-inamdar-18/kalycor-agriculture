import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { LifecycleScroll } from "@/components/LifecycleScroll";
import { CTABand } from "@/components/Sections";
import { lifecycle } from "@/content/site";
export const metadata = pageMeta("Crop Lifecycle", "Follow the complete crop lifecycle with Kalycor Agriculture: seed, soil preparation, sowing, germination, growth, crop care, harvest, processing and distribution.", "/crop-lifecycle");
export default function Lifecycle() {
  return (<>
    <PageHero title="The Complete Crop Lifecycle" intro="Nine stages, from seed to distribution. Scroll to watch a crop grow through them." />
    <LifecycleScroll />
    <section className="py-24 sm:py-32"><div className="wrap"><h2 className="h-section text-forest-900">Every stage at a glance</h2>
      <ol className="mt-12 divide-y divide-forest-900/15 border-y border-forest-900/15">
        {lifecycle.map((s, i) => (<li key={s.id} className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr_1.4fr] sm:gap-8"><span className="font-display text-xl text-leaf">{i + 1}</span><h3 className="text-2xl font-semibold text-forest-900">{s.name}</h3><p className="text-stone">{s.text}</p></li>))}
      </ol></div></section>
    <CTABand />
  </>);
}
