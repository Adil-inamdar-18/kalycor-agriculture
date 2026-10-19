import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/public-sans";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Naturiza Agro | Seeds, Agricultural Products and Crop Lifecycle",
    template: "%s | Naturiza Agro",
  },
  description:
    "Naturiza Agro focuses on agricultural products and the complete crop lifecycle, from seeds through growth, harvest, processing and distribution.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Naturiza Agro",
    title: "Naturiza Agro",
    description: "From seed to harvest, growing possibilities.",
    images: ["/images/agri-field.jpg"],
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2417",
  width: "device-width",
  initialScale: 1,
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Naturiza Agro",
  url: SITE_URL,
  parentOrganization: { "@type": "Organization", name: "Kalycor" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sprout focus:px-5 focus:py-3 focus:font-semibold focus:text-forest-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </body>
    </html>
  );
}
