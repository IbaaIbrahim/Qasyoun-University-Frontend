/** Mirrors OpenAPI `FacultyDto` (v1.json). */
export type FacultyDto = {
  id: number | string;
  slug: string;
  name: string;
  name_AR: string | null;
  pictureId: string | null;
  logoId: string | null;
  slider: boolean;
  isPublished: boolean;
  primaryColor: string | null;
  secondaryColor: string | null;
  displayOrder: number | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
