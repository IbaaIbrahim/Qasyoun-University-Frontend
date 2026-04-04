import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { ContentMetaDto } from "@/lib/classes/content-meta";

export const contentMetaApi = {
  /** Backend expects singular `filter`, e.g. `filter=contentId~eq~'2'`. */
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<ContentMetaDto>>("/api/ContentMeta/Read", {
      params: {
        filter,
        page: options?.page ?? 1,
        pageSize: options?.pageSize ?? 500,
      },
    });
    return data;
  },
};
