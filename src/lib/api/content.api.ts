import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/dto/data-source.dto";
import type { ContentDto } from "@/lib/dto/content.dto";

export const contentApi = {
  async readByFilters(filters: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<ContentDto>>("/api/Content/Read", {
      params: {
        filters,
        page: options?.page ?? 1,
        pageSize: options?.pageSize ?? 100,
      },
    });
    return data;
  },
};
