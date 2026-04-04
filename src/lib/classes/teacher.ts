import { resolveUploadSrc } from "@/lib/api/client";
import type { PictureDto } from "@/lib/classes/lab";

export type FacultyTeacherDto = {
  id: number | string;
  facultyId: number | string;
  teacherId: number | string;
  displayOrder: number | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TeacherDto = {
  id: number | string;
  name: string;
  name_AR: string | null;
  pictureId: string | null;
  picture: PictureDto | null;
  position: string | null;
  position_AR: string | null;
  specialist: string | null;
  specialist_AR: string | null;
  scientificDegree: string | null;
  scientificDegree_AR: string | null;
  academicDegree: string | null;
  academicDegree_AR: string | null;
  certificates: string | null;
  certificates_AR: string | null;
  experiences: string | null;
  experiences_AR: string | null;
  cvEnglishId: string | null;
  cvEnglish: PictureDto | null;
  cvArabicId: string | null;
  cvArabic: PictureDto | null;
  isPublished: boolean;
  displayOrder: number | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

const TEAM_FALLBACK_IMAGE = "/assets/img/team/about-team/about-team-1.jpg";

export type TeacherMemberCard = {
  id: number;
  name: string;
  title: string;
  imageSrc: string;
};

export class Teacher {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly nameAr: string | null,
    public readonly pictureId: string | null,
    public readonly picture: PictureDto | null,
    public readonly position: string | null,
    public readonly positionAr: string | null,
    public readonly specialist: string | null,
    public readonly specialistAr: string | null,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: TeacherDto): Teacher {
    return new Teacher(
      Number(dto.id),
      dto.name ?? "",
      dto.name_AR ?? null,
      dto.pictureId ?? null,
      dto.picture ?? null,
      dto.position ?? null,
      dto.position_AR ?? null,
      dto.specialist ?? null,
      dto.specialist_AR ?? null,
      Boolean(dto.isPublished),
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  getName(locale: string): string {
    return locale === "ar" && this.nameAr ? this.nameAr : this.name;
  }

  getPosition(locale: string): string {
    const v = locale === "ar" && this.positionAr ? this.positionAr : this.position;
    return v?.trim() ?? "";
  }

  getSpecialist(locale: string): string {
    const v =
      locale === "ar" && this.specialistAr ? this.specialistAr : this.specialist;
    return v?.trim() ?? "";
  }

  /** Card row for the faculty team grid (locale-specific copy + resolved image). */
  toMemberCard(locale: string): TeacherMemberCard {
    const thumb = this.picture?.thumbnail ?? this.picture?.url ?? null;
    const title =
      this.getPosition(locale) || this.getSpecialist(locale);
    return {
      id: this.id,
      name: this.getName(locale),
      title,
      imageSrc: resolveUploadSrc(thumb, TEAM_FALLBACK_IMAGE),
    };
  }
}
