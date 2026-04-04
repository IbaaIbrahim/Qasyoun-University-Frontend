export type ContentDto = {
  id: number | string;
  referenceId: number | string;
  referenceType: string;
  type: string;
  /** Present on many CMS rows; optional in UI when copy comes only from `ContentMeta`. */
  title?: string | null;
  displayOrder: number | string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export class Content {
  constructor(
    public readonly id: number,
    public readonly referenceId: number,
    public readonly referenceType: string,
    public readonly type: string,
    public readonly title: string | null,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt?: string,
    public readonly updatedAt?: string,
  ) {}

  static fromDto(dto: ContentDto): Content {
    return new Content(
      Number(dto.id),
      Number(dto.referenceId),
      dto.referenceType ?? "",
      dto.type ?? "",
      dto.title ?? null,
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  toPlain(): ContentDto {
    return {
      id: this.id,
      referenceId: this.referenceId,
      referenceType: this.referenceType,
      type: this.type,
      title: this.title,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
