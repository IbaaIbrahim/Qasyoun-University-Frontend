import { ContentJson } from "../content";

export default class IEvent {
  id?: string;
  date?: string;
  title?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  mainImage?: string;
  slug?: string;

  static fromContentJson(contentJson: ContentJson): IEvent {
    return {
      id: `${contentJson.id}`,
      date: contentJson.contentMetasJson?.["date"] ?? "",
      title: contentJson.contentMetasJson?.["title"] ?? "",
      startTime: contentJson.contentMetasJson?.["start_time"] ?? "",
      endTime: contentJson.contentMetasJson?.["end_time"] ?? "",
      location: contentJson.contentMetasJson?.["location"] ?? "",
      mainImage: contentJson.contentMetasJson?.["main_image"] ?? "",
      slug: contentJson.contentMetasJson?.["slug"] ?? "",
    } as IEvent;
  }
}
