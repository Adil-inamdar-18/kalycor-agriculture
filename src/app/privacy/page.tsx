import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
export const metadata = pageMeta("Privacy Policy", "Privacy Policy for Kalycor Agriculture.", "/privacy");
export default function Page() {
  return (<><PageHero title="Privacy Policy" intro="Draft placeholder. Replace with text reviewed by the client's legal adviser before launch." />
    <section className="py-24"><div className="wrap max-w-3xl space-y-4 text-stone"><p>Add the approved Privacy Policy here.</p></div></section></>);
}
