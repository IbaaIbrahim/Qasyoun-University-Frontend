import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { FacultyTeacherDto } from "@/lib/classes/teacher";

export const facultyTeacherApi = {
  /** Backend expects singular `filter`, e.g. `filter=facultyId~eq~'1'`. */
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<FacultyTeacherDto>>(
      "/api/FacultyTeacher/Read",
      {
        params: {
          filter,
          page: options?.page ?? 1,
          pageSize: options?.pageSize ?? 200,
        },
      },
    );
    return data;
  },
};
