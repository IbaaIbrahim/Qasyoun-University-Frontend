import { ContentJson } from "./content";

export default class StaticPage {
  id?: string;
  title?: string;
  body?: string;
  heroImage?: string;
  file?: string;
  table?: { [key: string]: string }[];

  static fromContentJson(contentJson: ContentJson): StaticPage {
    let tableData = [];
    try {
      const rawTable = contentJson.contentMetasJson?.["table"];
      if (typeof rawTable === "string" && rawTable.trim().length > 0) {
        tableData = JSON.parse(rawTable);
      } else if (Array.isArray(rawTable)) {
        tableData = rawTable;
      }
    } catch {
      // ignore
    }

    return {
      id: `${contentJson.id}`,
      title: contentJson.title ?? "",
      body: contentJson.contentMetasJson?.["body"] ?? "",
      heroImage: contentJson.contentMetasJson?.["hero_image"] ?? "",
      file: contentJson.contentMetasJson?.["file"] ?? contentJson.contentMetasJson?.["pdf_file"] ?? "",
      table: tableData,
    } as StaticPage;
  }
}
