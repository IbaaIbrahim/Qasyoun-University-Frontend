import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { LectureDto } from "@/lib/classes/lecture";

export const lectureApi = {
  async read(options?: { page?: number; pageSize?: number; filter?: string }) {
    const { data } = await apiClient.get<DataSourceResult<LectureDto>>(
      "/api/Lecture/Read",
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
