import type { MetadataRoute } from "next";
import { SITE, LEGAL } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, priority: 1 },
    ...treatments.map((t) => ({ url: `${SITE.url}/tedaviler/${t.slug}`, lastModified: now, priority: 0.8 })),
    ...LEGAL.map((l) => ({ url: `${SITE.url}/${l.slug}`, lastModified: now, priority: 0.2 })),
  ];
}
