import { apiClient } from "@/lib/api/client";
import type { DataSourceRequest, DataSourceResult } from "@/lib/api/types";
import type { LabDto } from "@/lib/classes/lab";

function encodeDataSourceRequest(request: DataSourceRequest): string {
  return JSON.stringify(request);
}

export const labApi = {
  async read(request: DataSourceRequest = { skip: 0, take: 100 }) {
    const { data } = await apiClient.get<DataSourceResult<LabDto>>(
      "/api/Lab/Read",
      {
        params: { request: encodeDataSourceRequest(request) },
      },
    );
    return data;
  },

  async getById(id: number) {
    const { data } = await apiClient.get<LabDto>(`/api/Lab/${id}`);
    return data;
  },

  /** Backend expects singular `filter`, e.g. `filter=facultyId~eq~'1'`. */
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<LabDto>>(
      "/api/Lab/Read",
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
