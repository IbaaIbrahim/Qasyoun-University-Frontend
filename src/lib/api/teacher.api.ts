import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { TeacherDto } from "@/lib/classes/teacher";

export const teacherApi = {
  /** Backend expects singular `filter`, e.g. composite `(id~eq~'1'~or~id~eq~'2')`. */
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<TeacherDto>>(
      "/api/Teacher/Read",
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
