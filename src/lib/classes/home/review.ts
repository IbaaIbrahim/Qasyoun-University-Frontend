import { ContentJson } from "../content";

export default class Review {
  id?: string;
  image?: string;
  author?: string;
  text?: string;

  static fromContentJson(contentJson: ContentJson): Review {
    return {
      id: `${contentJson.id}`,
      image: contentJson.contentMetasJson?.["image"] ?? "",
      author: contentJson.contentMetasJson?.["author"] ?? "",
      text: contentJson.contentMetasJson?.["text"] ?? "",
    } as Review;
  }
}
