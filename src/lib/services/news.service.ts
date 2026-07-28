import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import News from "../classes/news";

/**
 * Sort news items by date descending (newest first).
 * Falls back to `createdAt` when the CMS `date` meta is missing.
 */
export function sortNewsByNewest(items: News[]): News[] {
  return [...items].sort((a, b) => {
    const aDate = a.date ? new Date(a.date).getTime() : 0;
    const bDate = b.date ? new Date(b.date).getTime() : 0;
    return bDate - aDate;
  });
}

export async function getNewsBySlug(slug: string, locale: string): Promise<News | null> {
  const newsItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.home.value,
      section: ReferenceTypes.home.sections.news.value
    },
    locale
  );

  const news = newsItems.map(item => item.toNews()).filter(Boolean);

  return news.find(n => n.slug === slug) || null;
}

export async function getAllNews(locale: string): Promise<News[]> {
  const newsItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.home.value,
      section: ReferenceTypes.home.sections.news.value
    },
    locale
  );

  const news = newsItems.map(item => item.toNews()).filter(Boolean);
  return sortNewsByNewest(news);
}
