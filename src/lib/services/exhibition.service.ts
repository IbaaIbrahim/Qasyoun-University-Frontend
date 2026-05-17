import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import Exhibition from "../classes/exhibition";

export async function getExhibitionBySlug(slug: string, locale: string): Promise<Exhibition | null> {
  const exhibitionsItems = await readContentAsJsonByFilter(
    { 
      referenceType: ReferenceTypes.home.value, 
      section: ReferenceTypes.home.sections.exhibitions.value 
    }, 
    locale
  );

  const exhibitions = exhibitionsItems.map(item => item.toExhibition()).filter(Boolean);
  
  return exhibitions.find(n => n.slug === slug) || null;
}

export async function getAllExhibitions(locale: string): Promise<Exhibition[]> {
  const exhibitionsItems = await readContentAsJsonByFilter(
    { 
      referenceType: ReferenceTypes.home.value, 
      section: ReferenceTypes.home.sections.exhibitions.value 
    }, 
    locale
  );
  
  return exhibitionsItems.map(item => item.toExhibition()).filter(Boolean);
}
