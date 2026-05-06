import { courseApi } from "@/lib/api/course.api";
import { Course } from "@/lib/classes/course";

export async function listCourses(facultyId: number, studyYearId: number) {
  try {
    const filter = `facultyId~eq~${facultyId}~and~studyYearId~eq~${studyYearId}~and~isActive~eq~true~and~isPublished~eq~true`;
    const result = await courseApi.read({ filter });
    return result.data.map((dto) => Course.fromDto(dto));
  } catch (error) {
    console.error("Failed to list courses:", error);
    return [];
  }
}
