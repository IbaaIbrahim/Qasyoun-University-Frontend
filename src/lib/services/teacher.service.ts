import { facultyTeacherApi } from "@/lib/api/faculty-teacher.api";
import { teacherApi } from "@/lib/api/teacher.api";
import { Teacher } from "@/lib/classes/teacher";

/**
 * Active faculty–teacher links for the faculty, ordered by link `displayOrder`,
 * then loads published active teachers and preserves that order.
 */
export async function listTeachersByFacultyId(facultyId: number): Promise<Teacher[]> {
  try {
    const linkResult = await facultyTeacherApi.readByFilter(
      `facultyId~eq~'${facultyId}'`,
      { pageSize: 200 },
    );
    const links = (linkResult.data ?? [])
      .filter((row) => row.isActive)
      .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

    const teacherIds = links.map((l) => Number(l.teacherId));
    if (teacherIds.length === 0) return [];

    const filter = `(${teacherIds.map((id) => `id~eq~'${id}'`).join("~or~")})`;
    const teacherResult = await teacherApi.readByFilter(filter, {
      pageSize: 200,
    });

    const byId = new Map<number, Teacher>();
    for (const row of teacherResult.data ?? []) {
      if (!row.isActive || !row.isPublished) continue;
      byId.set(Number(row.id), Teacher.fromDto(row));
    }

    const ordered: Teacher[] = [];
    for (const id of teacherIds) {
      const t = byId.get(id);
      if (t) ordered.push(t);
    }
    // for (let i = 0; i < 500; i++) {
    //   ordered.push(ordered[0]);
    // }
    return ordered;
  } catch {
    return [];
  }
}

export async function getTeacherById(id: number): Promise<Teacher | null> {
  try {
    const result = await teacherApi.readByFilter(`id~eq~'${id}'`, { pageSize: 1 });
    const row = result.data?.[0];
    if (!row || !row.isActive || !row.isPublished) return null;
    return Teacher.fromDto(row);
  } catch {
    return null;
  }
}
