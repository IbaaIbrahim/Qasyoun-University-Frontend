import { studyYearApi } from "@/lib/api/study-year.api";
import { StudyYear } from "@/lib/classes/study-year";

export async function listStudyYears() {
  try {
    const result = await studyYearApi.read({ filter: "isActive~eq~true" });
    return result.data.map((dto) => StudyYear.fromDto(dto));
  } catch (error) {
    console.error("Failed to list study years:", error);
    return [];
  }
}
