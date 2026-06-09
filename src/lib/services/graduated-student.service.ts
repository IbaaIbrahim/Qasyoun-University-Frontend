import { graduatedStudentApi } from "@/lib/api/graduated-student.api";
import { GraduatedStudent } from "@/lib/classes/graduated-student";

export const listGraduatedStudentsByFacultyId = async (facultyId: number) => {
  try {
    const response = await graduatedStudentApi.read({
      filter: `facultyId~eq~${facultyId}`,
      pageSize: 100,
    });
    return (response.data || []).map((dto) => GraduatedStudent.fromDto(dto));
  } catch (error) {
    console.error("Failed to fetch graduated students:", error);
    return [];
  }
};
