import { ContentJson } from "../content";

export default class MainText {
  id?: string;
  text?: string;

  static fromContentJson(contentJson: ContentJson): MainText {
    return {
      id: `${contentJson.id}`,
      text: contentJson.contentMetasJson?.["text"] ?? "",
    } as MainText;
  }
}