import { Content, ContentJson, ContentMetaJson } from "./content";

export default class Slider {
  id?: string;
  bgImg?: string;
  title?: string;
  subTitle?: string;
  btnText?: string;
  btnLink?: string;

  static fromContentJson(contentJson: ContentJson): Slider {
    return {
      id: `${contentJson.id}`,
      bgImg: contentJson.contentMetasJson?.src ?? "",
      title: contentJson.contentMetasJson?.title ?? "",
      subTitle: contentJson.contentMetasJson?.subTitle ?? "",
      btnText: contentJson.contentMetasJson?.btnText ?? "",
      btnLink: contentJson.contentMetasJson?.btnLink ?? "",
    } as Slider;
  }
}