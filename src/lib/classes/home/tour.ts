import { ContentJson } from "../content";

export default class TourVideo {
  id?: string;
  video?: string;

  static fromContentJson(contentJson: ContentJson): TourVideo {
    return {
      id: `${contentJson.id}`,
      video: contentJson.contentMetasJson?.["video"] ?? ""
    } as TourVideo;
  }
}
