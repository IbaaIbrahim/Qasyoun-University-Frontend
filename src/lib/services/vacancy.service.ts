import { vacancyApi } from "@/lib/api/vacancy.api";
import { Vacancy } from "@/lib/classes/vacancy";

export const vacancyService = {
  async listPublicVacancies(): Promise<Vacancy[]> {
    try {
      const result = await vacancyApi.read({ filter: "isActive~eq~true" });
      return result.data.map(Vacancy.fromDto);
    } catch (error) {
      console.error("Failed to fetch vacancies:", error);
      return [];
    }
  },
};
