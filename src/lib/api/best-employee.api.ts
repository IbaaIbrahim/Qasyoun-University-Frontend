import { TeacherDto } from "../classes/teacher";
import { apiClient } from "./client";
import { DataSourceResult } from "./types";

export interface BestEmployeeDto {
  id: number;
  facultyId: number;
  studyYearId: number;
  teacherId: number;
  description: string;
  description_AR: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  teacher?: TeacherDto;
}

export const bestEmployeeApi = {
  async read(params: Record<string, any>) {
    const { data } = await apiClient.get<DataSourceResult<BestEmployeeDto>>(
      "/api/BestEmployee/Read",
      { params }
    );
    return data;
  }
};
