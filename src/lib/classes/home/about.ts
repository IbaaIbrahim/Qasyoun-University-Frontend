import { ContentJson } from "../content";

export default class AboutHome {
  id?: string;
  text?: string;
  image1?: string;
  image2?: string;
  yearsOfExperience?: string;
  concept1Title?: string;
  concept1Text?: string;
  concept2Title?: string;
  concept2Text?: string;

  static fromContentJson(contentJson: ContentJson): AboutHome {
    return {
      id: `${contentJson.id}`,
      text: contentJson.contentMetasJson?.["text"] ?? "",
      image1: contentJson.contentMetasJson?.["image1"] ?? "",
      image2: contentJson.contentMetasJson?.["image2"] ?? "",
      yearsOfExperience: contentJson.contentMetasJson?.["years_of_experience"] ?? "",
      concept1Title: contentJson.contentMetasJson?.["concept1_title"] ?? "",
      concept1Text: contentJson.contentMetasJson?.["concept1_text"] ?? "",
      concept2Title: contentJson.contentMetasJson?.["concept2_title"] ?? "",
      concept2Text: contentJson.contentMetasJson?.["concept2_text"] ?? "",
    } as AboutHome;
  }
}