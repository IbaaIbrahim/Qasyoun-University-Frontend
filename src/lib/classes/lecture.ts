export type LectureFileDto = {
  id: string;
  name: string;
  name_AR: string | null;
  url: string;
  thumbnail: string | null;
  isFile: boolean;
  fileType: number;
};

export type LectureDto = {
  id: number;
  courseId: number;
  teacherId: number;
  title: string;
  title_AR: string | null;
  content: string | null;
  content_AR: string | null;
  fileId: string | null;
  file: LectureFileDto | null;
  lectureNumber: number;
  isPublished: boolean;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export class Lecture {
  constructor(
    public readonly id: number,
    public readonly courseId: number,
    public readonly teacherId: number,
    public readonly title: string,
    public readonly titleAr: string | null,
    public readonly content: string | null,
    public readonly contentAr: string | null,
    public readonly fileId: string | null,
    public readonly fileUrl: string | null,
    public readonly fileName: string | null,
    public readonly lectureNumber: number,
    public readonly isPublished: boolean,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: string,
    public readonly updatedAt: string,
  ) {}

  static fromDto(dto: LectureDto): Lecture {
    return new Lecture(
      dto.id,
      dto.courseId,
      dto.teacherId,
      dto.title ?? "",
      dto.title_AR ?? null,
      dto.content ?? null,
      dto.content_AR ?? null,
      dto.fileId ?? null,
      dto.file?.url ?? null,
      dto.file?.name ?? null,
      dto.lectureNumber ?? 0,
      Boolean(dto.isPublished),
      dto.displayOrder,
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  getTitle(locale: string): string {
    return locale === "ar" && this.titleAr ? this.titleAr : this.title;
  }

  getContent(locale: string): string {
    return locale === "ar" && this.contentAr ? this.contentAr : (this.content ?? "");
  }

  toPlain(): LectureDto {
    return {
      id: this.id,
      courseId: this.courseId,
      teacherId: this.teacherId,
      title: this.title,
      title_AR: this.titleAr,
      content: this.content,
      content_AR: this.contentAr,
      fileId: this.fileId,
      file: this.fileUrl ? {
        id: this.fileId ?? "",
        name: this.fileName ?? "",
        name_AR: null,
        url: this.fileUrl,
        thumbnail: null,
        isFile: true,
        fileType: 2
      } : null,
      lectureNumber: this.lectureNumber,
      isPublished: this.isPublished,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
