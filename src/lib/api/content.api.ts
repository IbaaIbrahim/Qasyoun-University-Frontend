import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { ContentDto } from "@/lib/classes/content";

export const contentApi = {
  /** Backend expects singular `filter`, e.g. `filter=referenceType~eq~'home'`. */
  async readByFilters(filters: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<ContentDto>>("/api/Content/Read", {
      params: {
        filter: filters,
        page: options?.page ?? 1,
        pageSize: options?.pageSize ?? 100,
      },
    });
    return data;
  },
};
