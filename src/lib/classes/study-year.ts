export type StudyYearDto = {
  id: number;
  name: string;
  name_AR: string | null;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export class StudyYear {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly nameAr: string | null,
    public readonly startDate: string,
    public readonly endDate: string,
    public readonly isCurrent: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: StudyYearDto): StudyYear {
    return new StudyYear(
      dto.id,
      dto.name ?? "",
      dto.name_AR ?? null,
      dto.startDate,
      dto.endDate,
      Boolean(dto.isCurrent),
      dto.displayOrder,
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  getName(locale: string): string {
    return locale === "ar" && this.nameAr ? this.nameAr : this.name;
  }

  toPlain(): StudyYearDto {
    return {
      id: this.id,
      name: this.name,
      name_AR: this.nameAr,
      startDate: this.startDate,
      endDate: this.endDate,
      isCurrent: this.isCurrent,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
