import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { VacancyDto } from "@/lib/classes/vacancy";

export const vacancyApi = {
  async read(params: { page?: number; pageSize?: number; filter?: string } = {}) {
    const { data } = await apiClient.get<DataSourceResult<VacancyDto>>(
      "/api/Vacancy/Read",
      {
        params: {
          page: params.page ?? 1,
          pageSize: params.pageSize ?? 100,
          filter: params.filter,
        },
      },
    );
    return data;
  },

  async getById(id: number) {
    const { data } = await apiClient.get<VacancyDto>(`/api/Vacancy/${id}`);
    return data;
  },
};
