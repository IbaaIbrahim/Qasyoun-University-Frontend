import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { StudyYearDto } from "@/lib/classes/study-year";

export const studyYearApi = {
  async read(options?: { page?: number; pageSize?: number; filter?: string }) {
    const { data } = await apiClient.get<DataSourceResult<StudyYearDto>>(
      "/api/StudyYear/Read",
      {
        params: {
          filter: options?.filter,
          page: options?.page ?? 1,
          pageSize: options?.pageSize ?? 100,
        },
      },
    );
    return data;
  },
};
