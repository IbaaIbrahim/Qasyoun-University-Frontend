import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";
import type { ContentMetaJson } from "@/lib/classes/content";
import type { StaticPageFolder } from "@/lib/static-pages/config";
import { getSectionConfig } from "@/lib/static-pages/config";

export type LoadedStaticPage = {
  cmsTitle: string | null;
  meta: ContentMetaJson | undefined;
};

/**
 * Loads the first active Content row for a global static page (referenceId 0)
 * and merged ContentMeta as JSON (locale-aware body, hero image URL, etc.).
 */
export async function loadStaticPageContent(
  folder: StaticPageFolder,
  slug: string,
  locale: string,
): Promise<LoadedStaticPage> {
  const cfg = getSectionConfig(folder, slug);
  if (!cfg) {
    return { cmsTitle: null, meta: undefined };
  }

  const ref = ReferenceTypes[cfg.referenceKey];
  const rows = await readContentAsJsonByFilter(
    {
      referenceType: ref.value,
      referenceId: "0",
      section: cfg.sectionValue,
    },
    locale,
  );

  const active = rows
    .filter((r) => r.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

  const row = active[0];
  if (!row) {
    return { cmsTitle: null, meta: undefined };
  }

  return {
    cmsTitle: row.title,
    meta: row.contentMetasJson,
  };
}

/** Loads a `site_pages` Content row by section (directorates, higher_education_decisions, …). */
export async function loadSitePagesSection(
  sectionValue: string,
  locale: string,
): Promise<LoadedStaticPage> {
  const ref = ReferenceTypes.site_pages;
  const sections = ref.sections as Record<string, { value: string }>;
  const valid = Object.values(sections).some((s) => s.value === sectionValue);
  if (!valid) {
    return { cmsTitle: null, meta: undefined };
  }

  const rows = await readContentAsJsonByFilter(
    {
      referenceType: ref.value,
      referenceId: "0",
      section: sectionValue,
    },
    locale,
  );

  const active = rows
    .filter((r) => r.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

  const row = active[0];
  if (!row) {
    return { cmsTitle: null, meta: undefined };
  }

  return {
    cmsTitle: row.title,
    meta: row.contentMetasJson,
  };
}

export type LoadedSitePageItem = LoadedStaticPage & { contentId: number };

/** All active Content rows for a `site_pages` section (e.g. multiple council decisions). */
export async function loadSitePagesSectionItems(
  sectionValue: string,
  locale: string,
): Promise<LoadedSitePageItem[]> {
  const ref = ReferenceTypes.site_pages;
  const sections = ref.sections as Record<string, { value: string }>;
  const valid = Object.values(sections).some((s) => s.value === sectionValue);
  if (!valid) {
    return [];
  }

  const rows = await readContentAsJsonByFilter(
    {
      referenceType: ref.value,
      referenceId: "0",
      section: sectionValue,
    },
    locale,
  );

  const active = rows
    .filter((r) => r.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

  return active.map((row) => ({
    contentId: row.id,
    cmsTitle: row.title,
    meta: row.contentMetasJson,
  }));
}
