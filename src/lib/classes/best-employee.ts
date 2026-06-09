import { BestEmployeeDto } from "@/lib/api/best-employee.api";
import { Teacher } from "./teacher";

export class BestEmployee {
  constructor(
    public readonly id: number,
    public readonly facultyId: number,
    public readonly studyYearId: number,
    public readonly teacherId: number,
    public readonly description: string,
    public readonly description_AR: string,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly teacher?: Teacher
  ) {}

  static fromDto(dto: BestEmployeeDto, teacher?: Teacher): BestEmployee {
    return new BestEmployee(
      dto.id,
      dto.facultyId,
      dto.studyYearId,
      dto.teacherId,
      dto.description,
      dto.description_AR,
      dto.displayOrder,
      dto.isActive,
      dto.createdAt,
      dto.updatedAt,
      teacher
    );
  }

  getDescription(locale: string): string {
    return locale === "ar" ? this.description_AR : this.description;
  }

  toPlain(): BestEmployeeDto {
    return {
      id: this.id,
      facultyId: this.facultyId,
      studyYearId: this.studyYearId,
      teacherId: this.teacherId,
      description: this.description,
      description_AR: this.description_AR,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teacher: this.teacher?.toPlain(),
    };
  }
}
