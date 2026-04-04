import { contentApi } from "@/lib/api/content.api";
import { contentMetaApi } from "@/lib/api/content-meta.api";
import type { ContentMetaDto } from "@/lib/classes/content-meta";

/** Stable key for React; combines content row id + ContentMeta id so multiple meta rows become multiple slides. */
export type HomeHeroSlide = {
  id: string;
  bgImg: string;
};

const fallbackSlides: HomeHeroSlide[] = [
  {
    id: "fb-1",
    bgImg: "/assets/img/hero/hero-bg-1.jpg",
  },
  {
    id: "fb-2",
    bgImg: "/assets/img/hero/hero-bg-2.jpg",
  },
  {
    id: "fb-3",
    bgImg: "/assets/img/hero/hero-bg-3.jpg",
  },
];

function toNumber(value: number | string): number {
  return typeof value === "number" ? value : Number(value);
}

function pickLocalizedValue(value: string | null, valueAr: string | null, locale: string): string {
  if (locale === "ar") {
    return valueAr || value || "";
  }
  return value || valueAr || "";
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

function normalizeImageUrl(raw: string): string {
  if (!raw) return "";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  if (raw.startsWith("/")) return raw;
  return raw;
}

/** Only values that can work as CSS `background-image: url(...)` (avoids using arbitrary text as URLs). */
function isUsableBackgroundUrl(url: string): boolean {
  return (
    url.startsWith("https://") ||
    url.startsWith("http://") ||
    url.startsWith("/")
  );
}

/**
 * Builds one slide per ContentMeta row with a usable image URL.
 * Backend may use `type=image` or other types (e.g. numeric) as long as `value` / `value_AR` holds the URL — see API samples.
 */
export async function listHomeHeroSlides(locale: string): Promise<HomeHeroSlide[]> {
  try {
    const contentResult = await contentApi.readByFilters(
      "referenceType~eq~home,type~eq~hero-slider",
      { page: 1, pageSize: 100 },
    );

    const contentItems = (contentResult.data ?? [])
      .filter((item) => item.isActive)
      // Guard in case backend does not apply filters.
      .filter((item) => item.referenceType === "home" && item.type === "hero-slider")
      .sort((a, b) => toNumber(a.displayOrder) - toNumber(b.displayOrder));

    if (!contentItems.length) return fallbackSlides;

    const idSet = new Set(contentItems.map((item) => toNumber(item.id)));
    const ids = Array.from(idSet);
    if (!ids.length) return fallbackSlides;

    const metaFilter =
      ids.length === 1
        ? `contentId~eq~'${ids[0]}'`
        : `(${ids.map((id) => `contentId~eq~'${id}'`).join("~or~")})`;

    const metaResult = await contentMetaApi.readByFilter(metaFilter, { page: 1, pageSize: 500 });
    const allMetas = metaResult.data ?? [];

    const slides: HomeHeroSlide[] = contentItems.flatMap((contentItem) => {
      const contentId = toNumber(contentItem.id);
      const rowMetas = sortedMetasForContent(allMetas, contentId);
      const out: HomeHeroSlide[] = [];

      for (const m of rowMetas) {
        const imageRaw = pickLocalizedValue(m.value, m.value_AR, locale);
        const url = normalizeImageUrl(imageRaw.trim());
        if (!url || !isUsableBackgroundUrl(url)) continue;

        out.push({
          id: `${contentId}-${toNumber(m.id)}`,
          bgImg: url,
        });
      }

      return out;
    });

    return slides.length ? slides : fallbackSlides;
  } catch {
    return fallbackSlides;
  }
}
