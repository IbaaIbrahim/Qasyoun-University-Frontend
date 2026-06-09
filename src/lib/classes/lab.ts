export type PictureDto = {
  id: string;
  name: string;
  name_AR: string;
  url: string;
  thumbnail: string;
  isFile: boolean;
  fileType: number;
};

export type LabDto = {
  id: number | string;
  facultyId: number | string;
  name: string;
  name_AR: string | null;
  pictureId: string | null;
  picture: PictureDto | null;
  content: string | null;
  content_AR: string | null;
  isPublished: boolean;
  displayOrder: number | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export class Lab {
  constructor(
    public readonly id: number,
    public readonly facultyId: number,
    public readonly name: string,
    public readonly nameAr: string | null,
    public readonly pictureId: string | null,
    public readonly picture: PictureDto | null,
    public readonly content: string | null,
    public readonly contentAr: string | null,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: LabDto): Lab {
    return new Lab(
      Number(dto.id),
      Number(dto.facultyId),
      dto.name ?? "",
      dto.name_AR ?? null,
      dto.pictureId ?? null,
      dto.picture ?? null,
      dto.content ?? null,
      dto.content_AR ?? null,
      Boolean(dto.isPublished),
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  toPlain(): LabDto {
    return {
      id: this.id,
      facultyId: this.facultyId,
      name: this.name,
      name_AR: this.nameAr,
      pictureId: this.pictureId,
      picture: this.picture,
      content: this.content,
      content_AR: this.contentAr,
      isPublished: this.isPublished,
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

  /** Gets the content based on the specified locale. */
  getContent(locale: string): string | null {
    return locale === "ar" && this.contentAr ? this.contentAr : this.content;
  }

  /** Gets the picture URL if available. */
  get pictureUrl(): string | null {
    return this.picture?.url ?? null;
  }

  /** Gets the thumbnail URL if available. */
  get thumbnailUrl(): string | null {
    return this.picture?.thumbnail ?? null;
  }
}
