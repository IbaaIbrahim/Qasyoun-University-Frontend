import { ContentJson } from "./content";

export default class SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  portal?: string;

  static fromContentJson(contentJson: ContentJson): SocialMedia | null {
    const facebook = contentJson.contentMetasJson?.["facebook"] || "";
    const twitter = contentJson.contentMetasJson?.["twitter"] || "";
    const instagram = contentJson.contentMetasJson?.["instagram"] || "";
    const youtube = contentJson.contentMetasJson?.["youtube"] || "";
    const linkedin = contentJson.contentMetasJson?.["linkedin"] || "";
    const portal = contentJson.contentMetasJson?.["portal"] || "";

    return {
      facebook,
      twitter,
      instagram,
      youtube,
      linkedin,
      portal
    } as SocialMedia;
  }
}
