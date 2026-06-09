import { ContentJson } from "./content";

export default class Album {
  id!: number;
  name!: string;

  static fromContentJson(contentJson: ContentJson): Album | null {
    const name = contentJson.contentMetasJson?.["name"] || contentJson.title || "";
    if (!name) return null;

    return {
      id: contentJson.id,
      name,
    } as Album;
  }
}
