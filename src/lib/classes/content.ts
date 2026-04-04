import { ContentMeta, ContentMetaDto } from "./content-meta";
import Slider from "./slider";
import News from "./news";

export type ContentDto = {
  id: number | string;
  referenceId: number | string;
  referenceType: string;
  section: string;
  /** Present on many CMS rows; optional in UI when copy comes only from `ContentMeta`. */
  title?: string | null;
  displayOrder: number | string;
  isActive: boolean;
  contentMetas?: ContentMetaDto[];
  createdAt?: string;
  updatedAt?: string;
};

export class Content {
  constructor(
    public readonly id: number,
    public readonly referenceId: number,
    public readonly referenceType: string,
    public readonly section: string,
    public readonly title: string | null,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly contentMetas?: ContentMeta[],
    public readonly createdAt?: string,
    public readonly updatedAt?: string,
  ) { }

  static fromDto(dto: ContentDto): Content {
    return new Content(
      Number(dto.id),
      Number(dto.referenceId),
      dto.referenceType ?? "",
      dto.section ?? "",
      dto.title ?? null,
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.contentMetas?.map((meta) => ContentMeta.fromDto(meta)),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  toPlain(): ContentDto {
    return {
      id: this.id,
      referenceId: this.referenceId,
      referenceType: this.referenceType,
      section: this.section,
      title: this.title,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      contentMetas: this.contentMetas?.map((meta) => meta.toPlain()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}


export type ContentMetaJson = {
  [key: string]: string | null;
}


export class ContentJson extends Content {
  contentMetasJson?: ContentMetaJson
  constructor(content: Content, locale: string) {
    super(content.id, content.referenceId, content.referenceType, content.section, content.title, content.displayOrder, content.isActive, content.contentMetas, content.createdAt, content.updatedAt)
    this.contentMetasJson = content.contentMetas?.reduce((acc, meta) => {
      acc[meta.keyName] = locale === "ar" ? meta.valueAr ?? meta.value : meta.value;
      acc[`${meta.keyName}--id`] = String(meta.id);
      return acc;
    }, {} as ContentMetaJson);
  }

  toSlider(): Slider {
    if (!this.contentMetasJson) return {};
    const slider = Slider.fromContentMetaJson(this);
    return slider ? slider : {};
  }

  toNews(): News {
    if (!this.contentMetasJson) return {};
    const item = News.fromContentJson(this);
    return item ? item : {};
  }
}
