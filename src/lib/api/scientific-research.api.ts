import { apiClient } from "@/lib/api/client";
import type { DataSourceResult } from "@/lib/api/types";
import type { PictureDto } from "@/lib/classes/lab";

export type ScientificResearchDto = {
  id: number;
  facultyId: number;
  teacherId: number;
  studyYearId: number;
  title: string;
  title_AR: string | null;
  details: string | null;
  details_AR: string | null;
  downloadFileId: string | null;
  downloadFile: PictureDto | null;
  publishedAt: string | null;
  isPublished: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export const scientificResearchApi = {
  async readByFilter(filter: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<ScientificResearchDto>>(
      "/api/ScientificResearch/Read",
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
