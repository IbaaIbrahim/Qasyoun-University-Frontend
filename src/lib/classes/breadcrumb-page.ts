import { ContentJson } from "./content";
import { resolveUploadSrc } from "../api/client";

export default class BreadcrumbPage {
  id?: string;
  facultiesBreadcrumbImage?: string;
  newsBreadcrumbImage?: string;
  eventsBreadcrumbImage?: string;
  researchBreadcrumbImage?: string;
  aboutBreadcrumbImage?: string;
  admissionBreadcrumbImage?: string;
  contactUsBreadcrumbImage?: string;
  studentLifeBreadcrumbImage?: string;
  universityDirectoratesBreadcrumbImage?: string;
  higherEducationDecisionsBreadcrumbImage?: string;
  exhibitionsAndConferencesBreadcrumbImage?: string;
  galleryBreadcrumbImage?: string;
  vacanciesBreadcrumbImage?: string;

  static fromContentJson(contentJson: ContentJson): BreadcrumbPage | null {
    const metas = contentJson.contentMetasJson;
    if (!metas) return null;

    return {
      id: `${contentJson.id}`,
      facultiesBreadcrumbImage: resolveUploadSrc(metas["faculties_breadcrumb_image"], ""),
      newsBreadcrumbImage: resolveUploadSrc(metas["news_breadcrumb_image"], ""),
      eventsBreadcrumbImage: resolveUploadSrc(metas["events_breadcrumb_image"], ""),
      researchBreadcrumbImage: resolveUploadSrc(metas["research_breadcrumb_image"], ""),
      aboutBreadcrumbImage: resolveUploadSrc(metas["about_breadcrumb_image"], ""),
      admissionBreadcrumbImage: resolveUploadSrc(metas["admission_breadcrumb_image"], ""),
      contactUsBreadcrumbImage: resolveUploadSrc(metas["contact_us_breadcrumb_image"], ""),
      studentLifeBreadcrumbImage: resolveUploadSrc(metas["student_life_breadcrumb_image"], ""),
      universityDirectoratesBreadcrumbImage: resolveUploadSrc(metas["university_directorates_breadcrumb_image"], ""),
      higherEducationDecisionsBreadcrumbImage: resolveUploadSrc(metas["higher_education_decisions_breadcrumb_image"], ""),
      exhibitionsAndConferencesBreadcrumbImage: resolveUploadSrc(metas["exhibitions_and_conferences_breadcrumb_image"], ""),
      galleryBreadcrumbImage: resolveUploadSrc(metas["gallery_breadcrumb_image"], ""),
      vacanciesBreadcrumbImage: resolveUploadSrc(metas["vacancies_breadcrumb_image"], ""),
    } as BreadcrumbPage;
  }
}
