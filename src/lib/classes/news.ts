import { ContentMetaJson } from "./content";

export default class News {
  id?: string;
  title?: string;
  excerpt?: string;
  href?: string | null;
  imageUrl?: string | null;

  static fromContentJson(id: number | string, baseTitle: string | null, meta: ContentMetaJson): News | null {
    const headline = meta["news-title"] || meta["title"] || baseTitle || "";
    const excerpt = meta["subtitle"] || meta["excerpt"] || meta["description"] || meta["summary"] || meta["body"] || meta["text"] || "";
    const href = meta["link"] || meta["url"] || meta["href"] || null;
    const imageUrl = meta["image"] || null;

    if (!headline && !excerpt) return null;

    return {
      id: `news-${id}`,
      title: headline || excerpt.slice(0, 100),
      excerpt: headline ? excerpt : "",
      href,
      imageUrl,
    } as News;
  }
}
