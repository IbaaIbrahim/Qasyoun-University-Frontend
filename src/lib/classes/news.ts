import { ContentJson, ContentMetaJson } from "./content";

export default class News {
  id?: string;
  title?: string;
  excerpt?: string;
  href?: string | null;
  imageUrl?: string | null;

  static fromContentJson(contentJson: ContentJson): News | null {
    const headline = contentJson.contentMetasJson?.["news-title"] || contentJson.contentMetasJson?.["title"] || contentJson.contentMetasJson?.title || "";
    const excerpt = contentJson.contentMetasJson?.["subtitle"] || contentJson.contentMetasJson?.["excerpt"] || contentJson.contentMetasJson?.["description"] || contentJson.contentMetasJson?.["summary"] || contentJson.contentMetasJson?.["body"] || contentJson.contentMetasJson?.["text"] || "";
    const href = contentJson.contentMetasJson?.["link"] || contentJson.contentMetasJson?.["url"] || contentJson.contentMetasJson?.["href"] || null;
    const imageUrl = contentJson.contentMetasJson?.["image"] || null;

    if (!headline && !excerpt) return null;

    return {
      id: `news-${contentJson.id}`,
      title: headline || excerpt.slice(0, 100),
      excerpt: headline ? excerpt : "",
      href,
      imageUrl,
    } as News;
  }
}
