import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
const paths = [
  "",
  "/about",
  "/products",
  "/seeds",
  "/crop-lifecycle",
  "/solutions",
  "/process",
  "/sustainability",
  "/contact",
  "/privacy",
  "/terms",
];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
