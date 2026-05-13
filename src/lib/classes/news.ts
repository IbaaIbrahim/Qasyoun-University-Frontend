import { ContentJson } from "./content";

export default class News {
  id?: string;
  title?: string;
  slug?: string;
  description?: string;
  date?: string;
  href?: string | null;
  imageUrl?: string | null;

  static fromContentJson(contentJson: ContentJson): News | null {
    const title = contentJson.contentMetasJson?.["text"] || contentJson.contentMetasJson?.["title"] || "";
    const slug = contentJson.contentMetasJson?.["slug"] || "";
    const description = contentJson.contentMetasJson?.["description"] || "";
    const imageUrl = contentJson.contentMetasJson?.["image"] || contentJson.contentMetasJson?.["src"] || null;
    const date = contentJson.createdAt;

    if (!title && !slug) return null;

    return {
      id: `news-${contentJson.id}`,
      title,
      slug,
      description,
      date,
      href: slug ? `/news/${slug}` : (contentJson.contentMetasJson?.["href"] || null),
      imageUrl,
    } as News;
  }
}
