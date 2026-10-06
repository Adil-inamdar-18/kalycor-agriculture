import type { Metadata } from "next";
import { SITE_URL } from "@/content/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | Kalycor Agriculture`, description, url: `${SITE_URL}${path}`, siteName: "Kalycor Agriculture", type: "website", locale: "en", images: [{ url: "/images/agri-field.jpg", width: 735, height: 490, alt: "Green wheat crop in a field" }] },
    twitter: { card: "summary_large_image", title: `${title} | Kalycor Agriculture`, description },
  };
}
