export type ContentMetaDto = {
  id: number | string;
  contentId: number | string;
  type: string;
  keyName: string;
  value: string | null;
  value_AR: string | null;
  displayOrder: number | string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};
