import { scientificResearchApi } from "@/lib/api/scientific-research.api";
import { ScientificResearch } from "@/lib/classes/scientific-research";

export async function listScientificResearchesByFacultyId(facultyId: number): Promise<ScientificResearch[]> {
  try {
    const result = await scientificResearchApi.readByFilter(`facultyId~eq~'${facultyId}'`, {
      pageSize: 500,
    });
    return (result.data ?? [])
      .filter((row) => row.isActive && row.isPublished)
      .map((row) => ScientificResearch.fromDto(row));
  } catch {
    return [];
  }
}
