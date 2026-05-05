import { ContentJson } from "../content";

export default class Timeline {
  id?: string;
  image?: string;
  title?: string;
  description?: string;
  date?: string;

  static fromContentJson(contentJson: ContentJson): Timeline {
    return {
      id: `${contentJson.id}`,
      image: contentJson.contentMetasJson?.["image"] ?? "",
      title: contentJson.contentMetasJson?.["title"] ?? "",
      description: contentJson.contentMetasJson?.["description"] ?? "",
      date: contentJson.contentMetasJson?.["date"] ?? ""
    } as Timeline;
  }
}