import { ScientificResearchDto } from "@/lib/api/scientific-research.api";
import { PictureDto } from "./lab";

export class ScientificResearch {
  constructor(
    public readonly id: number,
    public readonly facultyId: number,
    public readonly teacherId: number,
    public readonly studyYearId: number,
    public readonly title: string,
    public readonly titleAr: string | null,
    public readonly details: string | null,
    public readonly detailsAr: string | null,
    public readonly downloadFileId: string | null,
    public readonly downloadFile: PictureDto | null,
    public readonly publishedAt: string | null,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: ScientificResearchDto): ScientificResearch {
    return new ScientificResearch(
      dto.id,
      dto.facultyId,
      dto.teacherId,
      dto.studyYearId,
      dto.title,
      dto.title_AR,
      dto.details,
      dto.details_AR,
      dto.downloadFileId,
      dto.downloadFile,
      dto.publishedAt,
      dto.isPublished,
      dto.displayOrder,
      dto.isActive,
      dto.createdAt,
      dto.updatedAt,
    );
  }

  static getTitle(dto: ScientificResearchDto, locale: string): string {
    return locale === "ar" && dto.title_AR ? dto.title_AR : dto.title;
  }

  static getDetails(dto: ScientificResearchDto, locale: string): string {
    return locale === "ar" && dto.details_AR ? dto.details_AR : (dto.details ?? "");
  }

  toPlain(): ScientificResearchDto {
    return {
      id: this.id,
      facultyId: this.facultyId,
      teacherId: this.teacherId,
      studyYearId: this.studyYearId,
      title: this.title,
      title_AR: this.titleAr,
      details: this.details,
      details_AR: this.detailsAr,
      downloadFileId: this.downloadFileId,
      downloadFile: this.downloadFile,
      publishedAt: this.publishedAt,
      isPublished: this.isPublished,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  getTitle(locale: string): string {
    return ScientificResearch.getTitle(this.toPlain(), locale);
  }

  getDetails(locale: string): string {
    return ScientificResearch.getDetails(this.toPlain(), locale);
  }
}
