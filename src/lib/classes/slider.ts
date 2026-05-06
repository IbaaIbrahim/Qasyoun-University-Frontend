import { ContentJson } from "./content";
import { resolveUploadSrc } from "../api/client";

export default class Slider {
  id?: string;
  bgImg?: string;
  title?: string;
  subTitle?: string;
  btnText?: string;
  btnLink?: string;

  static fromContentJson(contentJson: ContentJson): Slider {
    const rawImg = contentJson.contentMetasJson?.src || contentJson.contentMetasJson?.image || "";
    return {
      id: `${contentJson.id}`,
      bgImg: resolveUploadSrc(rawImg, ""),
      title: contentJson.contentMetasJson?.title ?? "",
      subTitle: contentJson.contentMetasJson?.subTitle ?? "",
      btnText: contentJson.contentMetasJson?.btnText ?? "",
      btnLink: contentJson.contentMetasJson?.btnLink ?? "",
    } as Slider;
  }
}