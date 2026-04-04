import { contentApi } from "@/lib/api/content.api";
import { contentMetaApi } from "@/lib/api/content-meta.api";
import { Content, ContentJson } from "../classes/content";

/**
 * Global and Standardized Method for fetching and resolving Content alongside its Metas.
 * 
 * Fetches Content recursively by using any Telerik filter dictionary.
 * It automatically maps the result to a normalized `ContentJson` structural class, ensuring that all 
 * nested `contentMetas` array entries are cleanly mapped into a simplified object mapping 
 * based on the meta item's `keyName`.
 * 
 * This enables easily converting data into conventional component props (e.g. `toSlider()`).
 */
export async function readContentAsJsonByFilter(filter: { [key: string]: string }, locale: string): Promise<ContentJson[]> {
  try {
    // Generate Telerik filter expression
    const filterString = Object.entries(filter).map(([key, value]) => `${key}~eq~'${value}'`).join("~and~");

    const contentResult = await contentApi.readByFilters(filterString);

    // Identify rows that are completely missing the `contentMetas` key
    const missingMetasItems = contentResult.data.filter(item => item.contentMetas === undefined);

    if (missingMetasItems.length > 0) {
      const ids = missingMetasItems.map(item => item.id);

      let metaFilter = "";
      if (ids.length === 1) {
        metaFilter = `contentId~eq~'${ids[0]}'`;
      } else if (ids.length > 1) {
        metaFilter = `(${ids.map((id) => `contentId~eq~'${id}'`).join("~or~")})`;
      }

      if (metaFilter) {
        const metaResult = await contentMetaApi.readByFilter(metaFilter, { page: 1, pageSize: 500 });
        const allFetchedMetas = metaResult.data ?? [];

        // Attach fetched metas back to the respective content items
        missingMetasItems.forEach(item => {
          item.contentMetas = allFetchedMetas.filter(
            m => String(m.contentId) === String(item.id)
          );
        });
      }
    }

    const content = contentResult.data.map((item) => Content.fromDto(item));

    const jsonContent = content.map((item) => new ContentJson(item, locale));

    return jsonContent;
  } catch (error) {
    console.error("Error reading content:", error);
    return [];
  }
}
