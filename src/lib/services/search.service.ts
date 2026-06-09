import { searchApi, SearchResponseDto } from "@/lib/api/search.api";
import { apiClient } from "@/lib/api/client";

export type FacultyLookup = {
  id: number;
  slug: string;
  name: string;
  nameAr: string | null;
};

let cachedCombinedMaps: Promise<{
  facultyMap: Record<number, FacultyLookup>;
  teacherFacultyMap: Record<number, FacultyLookup>;
}> | null = null;

export function getCombinedSearchMaps() {
  if (cachedCombinedMaps) return cachedCombinedMaps;

  cachedCombinedMaps = (async () => {
    try {
      const [facultiesRes, mappingsRes] = await Promise.all([
        apiClient.get("/api/Faculty/Read?pageSize=100"),
        apiClient.get("/api/FacultyTeacher/Read?pageSize=1000"),
      ]);

      const faculties = facultiesRes.data?.data || [];
      const mappings = mappingsRes.data?.data || [];

      const facultyMap: Record<number, FacultyLookup> = {};
      for (const f of faculties) {
        facultyMap[Number(f.id)] = {
          id: Number(f.id),
          slug: f.slug || "",
          name: f.name || "",
          nameAr: f.name_AR || null,
        };
      }

      const teacherFacultyMap: Record<number, FacultyLookup> = {};
      for (const m of mappings) {
        if (!m.isActive) continue;
        const f = facultyMap[Number(m.facultyId)];
        if (f) {
          teacherFacultyMap[Number(m.teacherId)] = f;
        }
      }

      return { facultyMap, teacherFacultyMap };
    } catch (e) {
      console.error("Failed to build search maps", e);
      return { facultyMap: {}, teacherFacultyMap: {} };
    }
  })();

  return cachedCombinedMaps;
}

export async function performSearch(query: string): Promise<SearchResponseDto> {
  if (!query.trim()) {
    return { query, totalCount: 0 };
  }
  return await searchApi.search(query);
}
