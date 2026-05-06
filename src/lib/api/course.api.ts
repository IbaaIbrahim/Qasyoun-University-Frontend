import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { CourseDto } from "@/lib/classes/course";

export const courseApi = {
  async read(options?: { page?: number; pageSize?: number; filter?: string }) {
    const { data } = await apiClient.get<DataSourceResult<CourseDto>>(
      "/api/Course/Read",
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
