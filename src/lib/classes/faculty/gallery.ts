import { ContentJson } from "../content";

export default class Gallery {
  id?: string;
  image?: string;

  static fromContentJson(contentJson: ContentJson): Gallery {
    return {
      id: `${contentJson.id}`,
      image: contentJson.contentMetasJson?.["image"] ?? "",
    } as Gallery;
  }
}