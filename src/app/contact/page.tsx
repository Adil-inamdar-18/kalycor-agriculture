import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "./ContactForm";
import { site } from "@/content/site";
import { Placeholder } from "@/components/Placeholder";
export const metadata = pageMeta("Contact Us", "Contact Naturiza Agro about agricultural products, seeds and crop lifecycle solutions.", "/contact");
export default function Contact() {
  return (<>
    <PageHero title="Contact Us" intro="Tell us what you want to grow, source or supply." />
    <section className="py-24 sm:py-32"><div className="wrap grid gap-16 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h2 className="h-section text-forest-900">Let’s Grow Together.</h2>
        <address className="mt-8 space-y-3 text-lg not-italic text-stone">
          <p><a className="hover:text-leaf" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a></p>
          <p><a className="hover:text-leaf" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          <p>{site.contact.location}</p>
          <Placeholder />
        </address>
      </div>
      <ContactForm />
    </div></section>
  </>);
}
