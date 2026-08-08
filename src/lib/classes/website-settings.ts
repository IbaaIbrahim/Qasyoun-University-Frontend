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
      email: metas["email"]?.trim() || undefined,
      phoneNumber: metas["phone_number"]?.trim() || undefined,
      logo: resolveUploadSrc(metas["logo"], ""),
    } as WebsiteSettings;
  }
}
