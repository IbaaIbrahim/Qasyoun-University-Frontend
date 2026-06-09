import { apiClient } from "./client";
import { DataSourceResult } from "./types";

export interface GraduatedStudentDto {
  id: number;
  studyYearId: number;
  facultyId: number;
  fullName: string;
  fullName_AR: string;
  average: number;
  studentNumber: string;
  isPublished: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const graduatedStudentApi = {
  async read(params: Record<string, any>) {
    const { data } = await apiClient.get<DataSourceResult<GraduatedStudentDto>>(
      "/api/GraduatedStudent/Read",
      { params }
    );
    return data;
  }
};
