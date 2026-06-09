export type FacultyFileDto = {
  id: string;
  name: string;
  name_AR: string | null;
  url: string;
  thumbnail: string;
  isFile: boolean;
  fileType: number;
};

export type FacultyDto = {
  id: number | string;
  slug: string;
  name: string;
  name_AR: string | null;
  pictureId: string | null;
  picture: FacultyFileDto | null;
  logoId: string | null;
  logo: FacultyFileDto | null;
  slider: boolean;
  isPublished: boolean;
  primaryColor: string | null;
  secondaryColor: string | null;
  displayOrder: number | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export class Faculty {
  constructor(
    public readonly id: number,
    public readonly slug: string,
    public readonly name: string,
    public readonly nameAr: string | null,
    public readonly pictureId: string | null,
    public readonly pictureUrl: string | null,
    public readonly logoId: string | null,
    public readonly logoUrl: string | null,
    public readonly slider: boolean,
    public readonly isPublished: boolean,
    public readonly primaryColor: string | null,
    public readonly secondaryColor: string | null,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: FacultyDto): Faculty {
    return new Faculty(
      Number(dto.id),
      dto.slug ?? "",
      dto.name ?? "",
      dto.name_AR ?? null,
      dto.pictureId ?? null,
      dto.picture?.url ?? null,
      dto.logoId ?? null,
      dto.logo?.url ?? null,
      Boolean(dto.slider),
      Boolean(dto.isPublished),
      dto.primaryColor ?? null,
      dto.secondaryColor ?? null,
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  get detailPath(): string {
    return facultyDetailPath(this.slug);
  }

  toPlain(): FacultyDto {
    return {
      id: this.id,
      slug: this.slug,
      name: this.name,
      name_AR: this.nameAr,
      pictureId: this.pictureId,
      picture: this.pictureUrl
        ? {
            id: this.pictureId ?? "",
            name: "",
            name_AR: null,
            url: this.pictureUrl,
            thumbnail: this.pictureUrl,
            isFile: true,
            fileType: 1,
          }
        : null,
      logoId: this.logoId,
      logo: this.logoUrl
        ? {
            id: this.logoId ?? "",
            name: "",
            name_AR: null,
            url: this.logoUrl,
            thumbnail: this.logoUrl,
            isFile: true,
            fileType: 1,
          }
        : null,
      slider: this.slider,
      isPublished: this.isPublished,
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  /** Gets the name based on the specified locale. */
  getName(locale: string): string {
    return locale === "ar" && this.nameAr ? this.nameAr : this.name;
  }
}

export function facultyDetailPath(slug: string): string {
  return `/faculties/${encodeURIComponent(slug)}`;
}
