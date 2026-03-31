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
