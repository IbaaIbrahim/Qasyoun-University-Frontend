import { ContentJson } from "./content";

export default class Photo {
  id!: number;
  albumId!: number;
  imageUrl!: string;

  static fromContentJson(contentJson: ContentJson): Photo | null {
    const imageUrl = contentJson.contentMetasJson?.["image"] || null;
    if (!imageUrl) return null;

    return {
      id: contentJson.id,
      albumId: contentJson.referenceId,
      imageUrl,
    } as Photo;
  }
}
