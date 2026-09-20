import type { MetadataRoute } from "next";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";
import { getAllNews } from "@/lib/services/news.service";
import { getAllEvents } from "@/lib/services/event.service";
import { getAllExhibitions } from "@/lib/services/exhibition.service";
import { getAllAlbums } from "@/lib/services/gallery.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";

  // Core static & CMS section paths
  const staticPaths: Array<{
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly";
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/faculties", priority: 0.9, changeFrequency: "weekly" },
    { path: "/admission/admission-requirements", priority: 0.9, changeFrequency: "weekly" },
    { path: "/admission/tuition-fees", priority: 0.9, changeFrequency: "weekly" },
    { path: "/admission/why-qpu", priority: 0.8, changeFrequency: "monthly" },
    { path: "/admission/study-system", priority: 0.8, changeFrequency: "monthly" },
    { path: "/admission/discounts-scholarships", priority: 0.8, changeFrequency: "monthly" },
    { path: "/admission/registration-documents", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/vision-mission", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/university-goals", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/establishment", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/board-of-trustees", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/university-council", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/organizational-structure", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/location-infrastructure", priority: 0.7, changeFrequency: "monthly" },
    { path: "/student-life/academic-guidance", priority: 0.7, changeFrequency: "monthly" },
    { path: "/student-life/exams", priority: 0.8, changeFrequency: "weekly" },
    { path: "/student-life/academic-calendar", priority: 0.8, changeFrequency: "weekly" },
    { path: "/student-life/student-guide", priority: 0.7, changeFrequency: "monthly" },
    { path: "/directorates", priority: 0.7, changeFrequency: "monthly" },
    { path: "/decisions", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/news", priority: 0.85, changeFrequency: "daily" },
    { path: "/events", priority: 0.85, changeFrequency: "daily" },
    { path: "/exhibitions", priority: 0.75, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/vacancies", priority: 0.8, changeFrequency: "weekly" },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static paths with proper Arabic & English alternates
  for (const item of staticPaths) {
    const arUrl = `${baseUrl}${item.path}`;
    const enUrl = `${baseUrl}/en${item.path}`;

    sitemapEntries.push({
      url: arUrl,
      lastModified: new Date(),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
      alternates: {
        languages: {
          ar: arUrl,
          en: enUrl,
          "x-default": arUrl,
        },
      },
    });
  }

  // 1. Dynamic Faculties
  try {
    const faculties = await listFacultiesForPublic({ take: 100 });
    for (const f of faculties) {
      if (f.slug) {
        const arUrl = `${baseUrl}/faculties/${encodeURIComponent(f.slug)}`;
        const enUrl = `${baseUrl}/en/faculties/${encodeURIComponent(f.slug)}`;
        sitemapEntries.push({
          url: arUrl,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.85,
          alternates: {
            languages: {
              ar: arUrl,
              en: enUrl,
              "x-default": arUrl,
            },
          },
        });
      }
    }
  } catch {
    // Continue with remaining entries if API fails
  }

  // 2. Dynamic News Articles
  try {
    const newsItems = await getAllNews("ar");
    for (const n of newsItems) {
      if (n.slug) {
        const arUrl = `${baseUrl}/news/${encodeURIComponent(n.slug)}`;
        const enUrl = `${baseUrl}/en/news/${encodeURIComponent(n.slug)}`;
        sitemapEntries.push({
          url: arUrl,
          lastModified: n.date ? new Date(n.date) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: {
            languages: {
              ar: arUrl,
              en: enUrl,
              "x-default": arUrl,
            },
          },
        });
      }
    }
  } catch {
    // Continue
  }

  // 3. Dynamic Events
  try {
    const events = await getAllEvents("ar");
    for (const ev of events) {
      if (ev.slug) {
        const arUrl = `${baseUrl}/events/${encodeURIComponent(ev.slug)}`;
        const enUrl = `${baseUrl}/en/events/${encodeURIComponent(ev.slug)}`;
        sitemapEntries.push({
          url: arUrl,
          lastModified: ev.date ? new Date(ev.date) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: {
            languages: {
              ar: arUrl,
              en: enUrl,
              "x-default": arUrl,
            },
          },
        });
      }
    }
  } catch {
    // Continue
  }

  // 4. Dynamic Exhibitions
  try {
    const exhibitions = await getAllExhibitions("ar");
    for (const ex of exhibitions) {
      if (ex.slug) {
        const arUrl = `${baseUrl}/exhibitions/${encodeURIComponent(ex.slug)}`;
        const enUrl = `${baseUrl}/en/exhibitions/${encodeURIComponent(ex.slug)}`;
        sitemapEntries.push({
          url: arUrl,
          lastModified: ex.date ? new Date(ex.date) : new Date(),
          changeFrequency: "monthly",
          priority: 0.65,
          alternates: {
            languages: {
              ar: arUrl,
              en: enUrl,
              "x-default": arUrl,
            },
          },
        });
      }
    }
  } catch {
    // Continue
  }

  // 5. Dynamic Photo Albums
  try {
    const albums = await getAllAlbums("ar");
    for (const album of albums) {
      if (album.id) {
        const arUrl = `${baseUrl}/gallery/${album.id}`;
        const enUrl = `${baseUrl}/en/gallery/${album.id}`;
        sitemapEntries.push({
          url: arUrl,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
          alternates: {
            languages: {
              ar: arUrl,
              en: enUrl,
              "x-default": arUrl,
            },
          },
        });
      }
    }
  } catch {
    // Continue
  }

  return sitemapEntries;
}
