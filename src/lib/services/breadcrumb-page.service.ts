import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import BreadcrumbPage from "../classes/breadcrumb-page";

/**
 * Fetches the single, general breadcrumb page content record
 * and returns it as a BreadcrumbPage domain instance.
 */
export async function getBreadcrumbPageContent(locale: string): Promise<BreadcrumbPage | null> {
  try {
    const ref = ReferenceTypes.breadcrumb_page;
    const section = ref.sections.breadcrumb_page.value;

    const rows = await readContentAsJsonByFilter(
      {
        referenceType: ref.value,
        section: section,
      },
      locale
    );

    const activeRows = rows
      .filter((row) => row.isActive)
      .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

    const content = activeRows[0];
    if (content) {
      return content.toBreadcrumbPage();
    }
    return null;
  } catch {
    return null;
  }
}
