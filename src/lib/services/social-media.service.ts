import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import SocialMedia from "../classes/social-media";

export async function getSocialMedia(locale: string): Promise<SocialMedia | null> {
  const items = await readContentAsJsonByFilter(
    { 
      referenceType: ReferenceTypes.social_media_and_communication.value, 
      section: ReferenceTypes.social_media_and_communication.sections.social_media.value
    }, 
    locale
  );

  if (items.length > 0) {
    return items[0].toSocialMedia();
  }
  
  return null;
}
