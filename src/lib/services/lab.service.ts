import { labApi } from "@/lib/api/lab.api";
import { Lab } from "@/lib/classes/lab";

export async function listLabsForPublic(options?: { facultyId?: number; take?: number }) {
  const take = options?.take ?? 100;
  try {
    let result;

    if (options?.facultyId !== undefined) {
      const filter = `facultyId~eq~'${options.facultyId}'`;
      result = await labApi.readByFilter(filter, { pageSize: take });
    } else {
      result = await labApi.read({ skip: 0, take });
    }

    const items = (result.data ?? [])
      .filter((row) => row.isActive && row.isPublished)
      .map(Lab.fromDto)
      .sort((a, b) => a.displayOrder - b.displayOrder);
    return items;
  } catch {
    return [];
  }
}

export async function getLabById(id: number) {
  try {
    const dto = await labApi.getById(id);
    const lab = Lab.fromDto(dto);
    if (!lab.isActive || !lab.isPublished) return null;
    return lab;
  } catch {
    return null;
  }
}

export async function listLabsByFacultyId(facultyId: number) {
  return listLabsForPublic({ facultyId });
}
