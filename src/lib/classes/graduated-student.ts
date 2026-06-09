import { GraduatedStudentDto } from "@/lib/api/graduated-student.api";

export class GraduatedStudent {
  constructor(
    public readonly id: number,
    public readonly facultyId: number,
    public readonly studyYearId: number,
    public readonly fullName: string,
    public readonly fullName_AR: string,
    public readonly average: number,
    public readonly studentNumber: string,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string
  ) {}

  static fromDto(dto: GraduatedStudentDto): GraduatedStudent {
    return new GraduatedStudent(
      dto.id,
      dto.facultyId,
      dto.studyYearId,
      dto.fullName,
      dto.fullName_AR,
      dto.average,
      dto.studentNumber,
      dto.isPublished,
      dto.displayOrder,
      dto.isActive,
      dto.createdAt,
      dto.updatedAt
    );
  }

  getFullName(locale: string): string {
    return locale === "ar" ? this.fullName_AR : this.fullName;
  }

  toPlain(): GraduatedStudentDto {
    return {
      id: this.id,
      facultyId: this.facultyId,
      studyYearId: this.studyYearId,
      fullName: this.fullName,
      fullName_AR: this.fullName_AR,
      average: this.average,
      studentNumber: this.studentNumber,
      isPublished: this.isPublished,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
