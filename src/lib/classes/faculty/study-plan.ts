import { ContentJson } from "../content";
import { resolveUploadSrc } from "../../api/client";

export default class StudyPlan {
  id?: string;
  text?: string;
  file?: string;

  static fromContentJson(contentJson: ContentJson): StudyPlan {
    const rawFile = contentJson.contentMetasJson?.["file"] ?? "";
    return {
      id: `${contentJson.id}`,
      text: contentJson.contentMetasJson?.["text"] ?? "",
      file: rawFile ? resolveUploadSrc(rawFile, "") : "",
    } as StudyPlan;
  }
}
