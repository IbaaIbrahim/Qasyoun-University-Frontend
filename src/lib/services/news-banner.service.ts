import { contentApi } from "@/lib/api/content.api";
import { contentMetaApi } from "@/lib/api/content-meta.api";
import type { ContentMetaDto } from "@/lib/classes/content-meta";

export type NewsBannerItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string | null;
  imageUrl: string | null;
};

function toNumber(value: number | string): number {
  return typeof value === "number" ? value : Number(value);
}

function pickLocalizedValue(value: string | null, valueAr: string | null, locale: string): string {
  if (locale === "ar") {
    return valueAr || value || "";
  }
  return value || valueAr || "";
}

/** Single-ID filters must not be wrapped in `(...)` — some Telerik endpoints only return one row when parenthesized. */
function contentMetaFilterForIds(ids: number[]): string {
  if (ids.length === 0) return "";
  if (ids.length === 1) return `contentId~eq~'${ids[0]}'`;
  return `(${ids.map((id) => `contentId~eq~'${id}'`).join("~or~")})`;
}

function sortedMetasForContent(metas: ContentMetaDto[], contentId: number): ContentMetaDto[] {
  return metas
    .filter((m) => m.isActive && toNumber(m.contentId) === contentId)
    .sort((a, b) => {
      const order = toNumber(a.displayOrder) - toNumber(b.displayOrder);
      if (order !== 0) return order;
      return toNumber(a.id) - toNumber(b.id);
    });
}

function isTitleMeta(m: ContentMetaDto): boolean {
  const kn = m.keyName?.trim().toLowerCase() ?? "";
  const ty = m.type?.trim().toLowerCase() ?? "";
  return ty === "title" || kn === "title" || kn === "news-title";
}

function isExcerptMeta(m: ContentMetaDto): boolean {
  const kn = m.keyName?.trim().toLowerCase() ?? "";
  const ty = m.type?.trim().toLowerCase() ?? "";
  return (
    ty === "subtitle" ||
    ty === "excerpt" ||
    ty === "description" ||
    ty === "text" ||
    ty === "body" ||
    kn === "subtitle" ||
    kn === "excerpt" ||
    kn === "description" ||
    kn === "summary" ||
    kn === "body"
  );
}

function isLinkMeta(m: ContentMetaDto): boolean {
  const kn = m.keyName?.trim().toLowerCase() ?? "";
  const ty = m.type?.trim().toLowerCase() ?? "";
  return ty === "link" || ty === "url" || kn === "link" || kn === "url" || kn === "href";
}

function firstImageUrl(rowMetas: ContentMetaDto[], locale: string): string | null {
  for (const m of rowMetas) {
    if (m.type?.trim().toLowerCase() !== "image") continue;
    const raw = pickLocalizedValue(m.value, m.value_AR, locale).trim();
    if (
      raw &&
      (raw.startsWith("https://") ||
        raw.startsWith("http://") ||
        raw.startsWith("/"))
    ) {
      return raw;
    }
  }
  return null;
}

/**
 * Header news strip: `Content` rows identify items; localized copy and links come from `ContentMeta`
 * (same pattern as the home hero integration).
 */
export async function listNewsBannerItems(locale: string): Promise<NewsBannerItem[]> {
  try {
    const contentResult = await contentApi.readByFilters(
      "referenceId~eq~0,referenceType~eq~news,type~eq~home",
      { page: 1, pageSize: 100 },
    );

    const contentItems = (contentResult.data ?? [])
      .filter((item) => item.isActive)
      .filter(
        (item) =>
          toNumber(item.referenceId) === 0 &&
          item.referenceType === "news" &&
          item.type === "home",
      )
      .sort((a, b) => toNumber(a.displayOrder) - toNumber(b.displayOrder));

    if (!contentItems.length) return [];

    const ids = contentItems.map((item) => toNumber(item.id));
    const metaFilter = contentMetaFilterForIds(ids);
    const metaResult = await contentMetaApi.readByFilter(metaFilter, { page: 1, pageSize: 500 });
    const allMetas = metaResult.data ?? [];

    const items: NewsBannerItem[] = [];

    for (const row of contentItems) {
      const contentId = toNumber(row.id);
      const rowMetas = sortedMetasForContent(allMetas, contentId);
      const titleMeta = rowMetas.find(isTitleMeta);
      const excerptMeta = rowMetas.find(isExcerptMeta);
      const linkMeta = rowMetas.find(isLinkMeta);

      const titleFromMeta = titleMeta
        ? pickLocalizedValue(titleMeta.value, titleMeta.value_AR, locale).trim()
        : "";
      const dtoTitle = row.title?.trim() ?? "";
      const headline = titleFromMeta || dtoTitle;

      const excerpt = excerptMeta
        ? pickLocalizedValue(excerptMeta.value, excerptMeta.value_AR, locale).trim()
        : "";

      const hrefRaw = linkMeta
        ? pickLocalizedValue(linkMeta.value, linkMeta.value_AR, locale).trim()
        : "";
      const href = hrefRaw || null;

      const imageUrl = firstImageUrl(rowMetas, locale);

      if (!headline && !excerpt) continue;

      items.push({
        id: `news-${contentId}`,
        title: headline || excerpt.slice(0, 100),
        excerpt: headline ? excerpt : "",
        href,
        imageUrl,
      });
    }

    return items;
  } catch {
    return [];
  }
}
