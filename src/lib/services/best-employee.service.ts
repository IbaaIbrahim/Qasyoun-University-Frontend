import { bestEmployeeApi } from "@/lib/api/best-employee.api";
import { BestEmployee } from "@/lib/classes/best-employee";
import { Teacher } from "@/lib/classes/teacher";

export const listBestEmployeesByFacultyId = async (facultyId: number, teachers: Teacher[] = []) => {
  try {
    const response = await bestEmployeeApi.read({
      filter: `facultyId~eq~${facultyId}`,
      pageSize: 100,
    });
    return (response.data || []).map((dto) => {
      const teacher = teachers.find(t => t.id === Number(dto.teacherId));
      return BestEmployee.fromDto(dto, teacher);
    });
  } catch (error) {
    console.error("Failed to fetch best employees:", error);
    return [];
  }
};
