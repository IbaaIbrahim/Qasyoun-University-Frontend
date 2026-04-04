import { ContentMetaJson } from "./content";

export default class Slider {
  id?: string;
  bgImg?: string;
  title?: string;
  subTitle?: string;
  btnText?: string;
  btnLink?: string;

  static fromContentMetaJson(contentMetaJson: ContentMetaJson): Slider {
    return {
      id: `${contentMetaJson?.id ?? ""}`,
      bgImg: contentMetaJson?.bgImg ?? "",
      title: contentMetaJson?.title ?? "",
      subTitle: contentMetaJson?.subTitle ?? "",
      btnText: contentMetaJson?.btnText ?? "",
      btnLink: contentMetaJson?.btnLink ?? "",
    } as Slider;
  }
}