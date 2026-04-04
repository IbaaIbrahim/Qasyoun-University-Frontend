import { apiClient } from "@/lib/api/client";
import type { DataSourceRequest, DataSourceResult } from "@/lib/dto/data-source.dto";
import type { FacultyDto } from "@/lib/dto/faculty.dto";

function encodeDataSourceRequest(request: DataSourceRequest): string {
  return JSON.stringify(request);
}

export const facultyApi = {
  async read(request: DataSourceRequest = { skip: 0, take: 100 }) {
    const { data } = await apiClient.get<DataSourceResult<FacultyDto>>(
      "/api/Faculty/Read",
      {
        params: { request: encodeDataSourceRequest(request) },
      },
    );
    return data;
  },

  async getById(id: number) {
    const { data } = await apiClient.get<FacultyDto>(`/api/Faculty/${id}`);
    return data;
  },

  /** Backend expects singular `filter`, e.g. `filter=slug~eq~'pharmacy'`. */
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<FacultyDto>>(
      "/api/Faculty/Read",
      {
        params: {
          filter,
          page: options?.page ?? 1,
          pageSize: options?.pageSize ?? 100,
        },
      },
    );
    return data;
  },
};
