import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kolitech.in";
  
  const pages = ["", "/work", "/services", "/about", "/contact", "/terms", "/privacy", "/refund"];
  const caseStudies = ["/work/finflow-core", "/work/edustack-lms", "/work/logitrack-api"];

  const routes = [...pages, ...caseStudies].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/work/") ? 0.7 : 0.5,
  }));

  return routes;
}
