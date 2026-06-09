import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import News from "../classes/news";

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
    
      return newsItems.map(item => item.toNews()).filter(Boolean);
}
