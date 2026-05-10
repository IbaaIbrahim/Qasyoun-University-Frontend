export interface VacancyDto {
  id: number;
  title: string;
  title_AR: string;
  description: string;
  description_AR: string;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export class Vacancy {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly titleAr: string,
    public readonly description: string,
    public readonly descriptionAr: string,
    public readonly isActive: boolean,
    public readonly displayOrder: number,
  ) {}

  static fromDto(dto: VacancyDto): Vacancy {
    return new Vacancy(
      dto.id,
      dto.title,
      dto.title_AR,
      dto.description,
      dto.description_AR,
      dto.isActive,
      dto.displayOrder,
    );
  }

  getLocalizedTitle(locale: string): string {
    return locale === "ar" ? this.titleAr : this.title;
  }

  getLocalizedDescription(locale: string): string {
    return locale === "ar" ? this.descriptionAr : this.description;
  }

  /** For passing to "use client" components. */
  toPlain() {
    return {
      id: this.id,
      title: this.title,
      titleAr: this.titleAr,
      description: this.description,
      descriptionAr: this.descriptionAr,
      isActive: this.isActive,
      displayOrder: this.displayOrder,
    };
  }
}
