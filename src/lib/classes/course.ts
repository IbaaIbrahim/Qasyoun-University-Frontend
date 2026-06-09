export type CourseDto = {
  id: number;
  facultyId: number;
  studyYearId: number;
  name: string;
  name_AR: string | null;
  description: string | null;
  description_AR: string | null;
  isPublished: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export class Course {
  constructor(
    public readonly id: number,
    public readonly facultyId: number,
    public readonly studyYearId: number,
    public readonly name: string,
    public readonly nameAr: string | null,
    public readonly description: string | null,
    public readonly descriptionAr: string | null,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: CourseDto): Course {
    return new Course(
      dto.id,
      dto.facultyId,
      dto.studyYearId,
      dto.name ?? "",
      dto.name_AR ?? null,
      dto.description ?? null,
      dto.description_AR ?? null,
      Boolean(dto.isPublished),
      dto.displayOrder,
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  getName(locale: string): string {
    return locale === "ar" && this.nameAr ? this.nameAr : this.name;
  }

  getDescription(locale: string): string {
    return locale === "ar" && this.descriptionAr ? this.descriptionAr : (this.description ?? "");
  }

  toPlain(): CourseDto {
    return {
      id: this.id,
      facultyId: this.facultyId,
      studyYearId: this.studyYearId,
      name: this.name,
      name_AR: this.nameAr,
      description: this.description,
      description_AR: this.descriptionAr,
      isPublished: this.isPublished,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
