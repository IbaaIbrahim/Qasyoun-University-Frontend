import { lectureApi } from "@/lib/api/lecture.api";
import { Lecture } from "@/lib/classes/lecture";

export async function listLectures(courseId: number) {
  try {
    const filter = `courseId~eq~${courseId}~and~isActive~eq~true~and~isPublished~eq~true`;
    const result = await lectureApi.read({ filter });
    return result.data.map((dto) => Lecture.fromDto(dto));
  } catch (error) {
    console.error("Failed to list lectures:", error);
    return [];
  }
}
