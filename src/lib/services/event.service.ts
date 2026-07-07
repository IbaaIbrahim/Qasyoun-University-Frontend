import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import IEvent from "../classes/home/event";

export async function getEventBySlug(slug: string, locale: string): Promise<IEvent | null> {
  const eventsItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.home.value,
      section: ReferenceTypes.home.sections.upcoming_events.value,
    },
    locale
  );

  const events = eventsItems.map((item) => item.toEvent()).filter(Boolean);

  return events.find((e) => e.slug === slug) || null;
}

export async function getAllEvents(locale: string): Promise<IEvent[]> {
  const eventsItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.home.value,
      section: ReferenceTypes.home.sections.upcoming_events.value,
    },
    locale
  );

  return eventsItems.map((item) => item.toEvent()).filter(Boolean);
}
