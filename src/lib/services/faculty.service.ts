import { facultyApi } from "@/lib/api/faculty.api";
import { Faculty } from "@/lib/classes/faculty";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";

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

export async function getFacultiesPageContent(locale: string) {
  try {
    const ref = ReferenceTypes.faculties;
    const section = ref.sections.faculties_page.value;

    const rows = await readContentAsJsonByFilter(
      {
        referenceType: ref.value,
        section: section,
      },
      locale
    );

    const activeRows = rows
      .filter((row) => row.isActive)
      .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder));

    const content = activeRows[0];
    return content ? content.contentMetasJson : null;
  } catch {
    return null;
  }
}
