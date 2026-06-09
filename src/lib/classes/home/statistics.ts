import { ContentJson } from "../content";

export default class HomeStatistics {
  id?: string;
  studentsCount?: string;
  professorsCount?: string;
  programsCount?: string;
  researchsCount?: string;

  static fromContentJson(contentJson: ContentJson): HomeStatistics {
    return {
      id: `${contentJson.id}`,
      studentsCount: contentJson.contentMetasJson?.["students_count"] ?? "",
      professorsCount: contentJson.contentMetasJson?.["professors_count"] ?? "",
      programsCount: contentJson.contentMetasJson?.["programs_count"] ?? "",
      researchsCount: contentJson.contentMetasJson?.["researchs_count"] ?? "",
    } as HomeStatistics;
  }
}
