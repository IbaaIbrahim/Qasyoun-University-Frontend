import { facultyApi } from "@/lib/api/faculty.api";
import { Faculty } from "@/lib/classes/faculty";

export async function listFacultiesForPublic(options?: { take?: number }) {
  const take = options?.take ?? 100;
  try {
    const result = await facultyApi.read({ skip: 0, take });
    const items = (result.data ?? [])
      .filter((row) => row.isActive && row.isPublished)
      .map(Faculty.fromDto)
      .sort((a, b) => a.displayOrder - b.displayOrder);
    return items;
  } catch {
    return [];
  }
}

export async function getFacultyBySlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  try {
    // Telerik filter pattern: field~eq~'value'
    const filter = `slug~eq~'${decoded}'`;
    const result = await facultyApi.readByFilter(filter, { pageSize: 1 });
    const dto = result.data?.[0];
    if (!dto) return null;

    const faculty = Faculty.fromDto(dto);
    if (!faculty.isActive || !faculty.isPublished) return null;
    return faculty;
  } catch {
    return null;
  }
}

export async function getFacultyById(id: number) {
  try {
    const dto = await facultyApi.getById(id);
    const faculty = Faculty.fromDto(dto);
    if (!faculty.isActive || !faculty.isPublished) return null;
    return faculty;
  } catch {
    return null;
  }
}

