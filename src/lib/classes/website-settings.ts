import { ContentJson } from "./content";
import { resolveUploadSrc } from "../api/client";

export default class WebsiteSettings {
  email?: string;
  phoneNumber?: string;
  logo?: string;

  static fromContentJson(contentJson: ContentJson): WebsiteSettings | null {
    const metas = contentJson.contentMetasJson;
    if (!metas) return null;

    return {
      email: metas["email"] || "",
      phoneNumber: metas["phone_number"] || "",
      logo: resolveUploadSrc(metas["logo"], ""),
    } as WebsiteSettings;
  }
}
