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
    public readonly scientificDegree: string | null,
    public readonly scientificDegreeAr: string | null,
    public readonly academicDegree: string | null,
    public readonly academicDegreeAr: string | null,
    public readonly certificates: string | null,
    public readonly certificatesAr: string | null,
    public readonly experiences: string | null,
    public readonly experiencesAr: string | null,
    public readonly cvEnglish: PictureDto | null,
    public readonly cvArabic: PictureDto | null,
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
      dto.scientificDegree ?? null,
      dto.scientificDegree_AR ?? null,
      dto.academicDegree ?? null,
      dto.academicDegree_AR ?? null,
      dto.certificates ?? null,
      dto.certificates_AR ?? null,
      dto.experiences ?? null,
      dto.experiences_AR ?? null,
      dto.cvEnglish ?? null,
      dto.cvArabic ?? null,
      Boolean(dto.isPublished),
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  static getName(dto: TeacherDto, locale: string): string {
    return locale === "ar" && dto.name_AR ? dto.name_AR : dto.name;
  }

  static getPosition(dto: TeacherDto, locale: string): string {
    const v = locale === "ar" && dto.position_AR ? dto.position_AR : dto.position;
    return v?.trim() ?? "";
  }

  static getSpecialist(dto: TeacherDto, locale: string): string {
    const v = locale === "ar" && dto.specialist_AR ? dto.specialist_AR : dto.specialist;
    return v?.trim() ?? "";
  }

  getName(locale: string): string {
    return Teacher.getName(this.toPlain(), locale);
  }

  getPosition(locale: string): string {
    return Teacher.getPosition(this.toPlain(), locale);
  }

  getSpecialist(locale: string): string {
    return Teacher.getSpecialist(this.toPlain(), locale);
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

  toPlain(): TeacherDto {
    return {
      id: this.id,
      name: this.name,
      name_AR: this.nameAr,
      pictureId: this.pictureId,
      picture: this.picture,
      position: this.position,
      position_AR: this.positionAr,
      specialist: this.specialist,
      specialist_AR: this.specialistAr,
      scientificDegree: this.scientificDegree,
      scientificDegree_AR: this.scientificDegreeAr,
      academicDegree: this.academicDegree,
      academicDegree_AR: this.academicDegreeAr,
      certificates: this.certificates,
      certificates_AR: this.certificatesAr,
      experiences: this.experiences,
      experiences_AR: this.experiencesAr,
      cvEnglishId: null,
      cvEnglish: this.cvEnglish,
      cvArabicId: null,
      cvArabic: this.cvArabic,
      isPublished: this.isPublished,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
