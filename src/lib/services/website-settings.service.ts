import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import WebsiteSettings from "../classes/website-settings";

export async function getWebsiteSettings(locale: string): Promise<WebsiteSettings | null> {
  try {
    const ref = ReferenceTypes.home;
    const section = ref.sections.website_settings.value;

    const rows = await readContentAsJsonByFilter(
      {
        referenceType: ref.value,
        referenceId: "0",
        section: section,
      },
      locale
    );

    const activeRows = rows
      .filter((row) => row.isActive)
      .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

    const content = activeRows[0];
    if (content) {
      return WebsiteSettings.fromContentJson(content);
    }
    return null;
  } catch {
    return null;
  }
}
