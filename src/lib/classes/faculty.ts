import type { FacultyDto } from "@/lib/dto/faculty.dto";
import type { FacultyPlain } from "@/lib/dto/faculty-plain.dto";

export class Faculty {
  constructor(
    public readonly id: number,
    public readonly slug: string,
    public readonly name: string,
    public readonly pictureId: string | null,
    public readonly logoId: string | null,
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
      dto.pictureId ?? null,
      dto.logoId ?? null,
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

  toPlain(): FacultyPlain {
    return { id: this.id, slug: this.slug, name: this.name };
  }
}

export function facultyDetailPath(slug: string): string {
  return `/faculties/${encodeURIComponent(slug)}`;
}
